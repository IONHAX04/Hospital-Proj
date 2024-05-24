const express = require("express")
const cors = require('cors')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080




const secretKeyHex = "404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970";
const secretKey = Buffer.from(secretKeyHex, 'hex').toString('utf-8');

console.log('Decoded Secret Key:', secretKey);




// SCHEMA INITIALIZATION
const schemaData = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
}, {
    timestamps: true
})

const userModel = mongoose.model("user", schemaData)

// READ
// http://​localhost:8080/
app.get("/", async (req, res) => {
    const data = await userModel.find({})
    res.json({ success: true, data: data })
})



// CREATE DATA & STORE IN MONGODB
// http://​localhost:8080/create       name, email, mobile
app.post("/create", async (req, res) => {
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save();

    res.send({ success: true, message: "DATA SAVED", data: data })
})


// UPDATE
// http://​localhost:8080/update        id, name, email, mobile
app.put("/update", async (req, res) => {
    console.log(req.body)
    const { _id, ...rest } = req.body
    console.log(rest)
    const data = await userModel.updateOne({ _id: _id }, rest)
    res.send({ success: true, message: "DATA UPDATED", data: data })
})


// DELETE
http://​localhost:8080/delete/:id
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    const data = await userModel.deleteOne({ _id: id })
    res.send({ success: true, message: "DATA DELETED", data: data })
})



// =====================================INSERTION DOCTOR'S DETAILS================================

const doctorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    specialized: String,
    qualification: String,
    experience: String,
    contactNumber: String,
    email: String,
    address: String,
    photo: String,
    password: String,
})

const doctorDetails = mongoose.model("doctor", doctorSchema)

app.post('/doctor', async (req, res) => {
    try {
        const { firstName, lastName, specialized, qualification, experience, contactNumber, email, address, photo, password } = req.body;

        if (!firstName || !lastName || !specialized || !qualification || !experience || !contactNumber || !email || !address || !photo || !password) {
            return res.status(400).json({ success: false, message: 'Incomplete data' });
        }

        const doctorss = new doctorDetails({
            firstName,
            lastName,
            specialized,
            qualification,
            experience,
            contactNumber,
            email,
            address,
            photo,
            password
        });

        await doctorss.save();

        return res.status(201).json({ success: true, message: 'Appointment created successfully' });
    } catch (error) {
        console.error('Error creating appointment:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.get("/doctor", async (req, res) => {
    const docData = await doctorDetails.find({})
    res.json({ success: true, data: docData })
})


// =====================================INSERTION APPOINTMENT'S DETAILS================================



const appointmentSchema = new mongoose.Schema({
    userId: String,
    // emailId: String,
    doctorId: String,
    firstName: String,
    lastName: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);



app.post('/appointments', async (req, res) => {
    try {
        const { userId, doctorId, firstName, lastName } = req.body;

        if (!userId || !doctorId || !firstName || !lastName) {
            return res.status(400).json({ success: false, message: 'Incomplete data' });
        }

        const newAppointment = new Appointment({
            userId,
            // emailId,
            doctorId,
            firstName,
            lastName
        });

        await newAppointment.save();

        return res.status(201).json({ success: true, message: 'Appointment created successfully' });
    } catch (error) {
        console.error('Error creating appointment:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});


app.get("/appointments", async (req, res) => {
    const appData = await Appointment.find({})
    res.json({ success: true, data: appData })
})


app.delete("/deleteAppointment/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    const data = await Appointment.deleteOne({ _id: id })
    res.send({ success: true, message: "Data Deleted", data: data })
})



// =====================================INSERTION APPOINTMENT SCHEDULE'S DETAILS================================



const scheduleSchema = new mongoose.Schema({
    userId: String,
    // emailId: String,
    doctorId: String,
    firstName: String,
    lastName: String,
    date: Date,
})

const Schedule = mongoose.model('schedules', scheduleSchema);

app.post('/schedules', async (req, res) => {
    console.log(req.body);
    try {
        const { userId, doctorId, firstName, lastName, time } = req.body;

        if (!userId || !doctorId || !firstName || !lastName || !time) {
            return res.status(400).json({ success: false, message: 'Incomplete data' });
        }

        const newSchedule = new Schedule({
            userId,
            // emailId,
            doctorId,
            firstName,
            lastName,
            date: new Date(time),
        });

        await newSchedule.save();

        return res.status(201).json({ success: true, message: 'Schedule created successfully' });
    } catch (error) {
        console.error('Error creating schedule:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
})


app.get("/schedules", async (req, res) => {
    const appData = await Schedule.find({})
    res.json({ success: true, data: appData })
})


app.delete("/deletePatient/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    const data = await Schedule.deleteOne({ _id: id })
    res.send({ success: true, message: "Data Deleted", data: data })
})




// =================================== INSERTION OF USER DATA ====================

const registerSchema = new mongoose.Schema({
    patientName: String,
    emailId: String,
    password: String,
    mobile: String
})

const Register = mongoose.model('register', registerSchema);
app.post('/registerUser', async (req, res) => {
    console.log(req.body)
    try {
        const { patientName, emailId, password, mobile } = req.body;

        if (!patientName || !emailId || !password || !mobile) {
            return res.status(400).json({ success: false, message: 'Data incomplete' });
        }

        const newRegister = new Register({
            patientName,
            emailId,
            password,
            mobile,
        });

        await newRegister.save();

        const token = jwt.sign({ userId: newRegister._id, email: newRegister.emailId }, secretKey, { expiresIn: '1h' });

        return res.status(201).json({ success: true, message: 'Data inserted successfully' });

    } catch (error) {
        console.error('Error occurred', error);
        return res.status(500).json({ success: false, message: 'server error' });
    }
})


app.get("/registerUser", async (req, res) => {
    const appData = await Register.find({})
    res.json({ success: true, data: appData })
})



app.get("/getUserByEmail/:emailId", async (req, res) => {
    try {
        const emailId = req.params.emailId;

        const user = await Register.findOne({ emailId });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        return res.json({ success: true, data: { username: user.patientName, emailId: user.emailId } });
    } catch (error) {
        console.error('Error occurred', error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.get("/getMobileByEmail/:emailId", async (req, res) => {
    try {
        const emailId = req.params.emailId;

        const user = await Register.findOne({ emailId });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        return res.json({ success: true, data: { username: user.mobile, emailId: user.emailId } });
    } catch (error) {
        console.error('Error occurred', error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});


// ================================ PROTECTED ROUTES =======================================

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
        }
        req.userId = decoded.userId;
        next();
    });
}


app.get("/protectedRoute", verifyToken, (req, res) => {


});



// ======================================== LOGIN FORM=====================================

app.post('/loginUser', async (req, res) => {
    try {
        console.log('Login request data:', req.body);
        const { emailId, password } = req.body;
        if (!emailId || !password) {
            return res.status(400).json({ success: false, message: 'Incomplete data' });
        }
        const user = await Register.findOne({ emailId, password });
        if (user) {
            return res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});




// ======================================== FETCHING ROUTE ================

app.get('/getUsernameByEmail', async (req, res) => {
    const { emailId } = req.query;
    try {
        const user = await Register.findOne({ emailId });
        if (user) {
            res.json({ success: true, username: user.patientName });
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching username:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});


app.get('/getMobileByEmail', async (req, res) => {
    const { emailId } = req.query;

    try {
        const user = await Register.findOne({ emailId });
        if (user) {
            res.json({ success: true, mobile: user.mobile });
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching mobile number:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});















mongoose.connect("mongodb://localhost:27017/testing")
    .then(() => {
        console.log("DB CONNECTED")
        app.listen(PORT, () => console.log("SERVER START"))
    })
    .catch((err) => console.log(err))








const multer = require('multer');
const path = require('path');

const pdfSchema = new mongoose.Schema({
    title: String,
    name: String,
    data: Buffer,
});

const PDF = mongoose.model('PDF', pdfSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

app.post('/upload', upload.single('pdf'), async (req, res) => {
    try {
        const { originalname, buffer } = req.file;
        const title = req.headers.title || 'Untitled';

        const newPDF = new PDF({
            title,
            name: originalname,
            data: buffer,
        });

        const savedPDF = await newPDF.save();

        res.status(200).send('PDF uploaded successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint for downloading PDF
app.get('/download/:id', async (req, res) => {
    try {
        const pdf = await PDF.findById(req.params.id);

        if (!pdf) {
            return res.status(404).send('PDF not found');
        }

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${pdf.name}`);
        res.send(pdf.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/latest-pdf-id', async (req, res) => {
    try {
        const latestPDF = await PDF.findOne().sort({ _id: -1 }).limit(1);

        if (!latestPDF) {
            return res.status(404).send('No PDF found');
        }

        res.status(200).json({ id: latestPDF._id });
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.get('/download', async (req, res) => {
    const pdfData = await PDF.find({})
    res.json({success: true, data: pdfData})
})



// =======================================





const prescriptionSchema = new mongoose.Schema({
    title: String,
    name: String,
    data: Buffer,
});

const Prescriptions = mongoose.model('Prescription', prescriptionSchema);

const storagePres = multer.memoryStorage();
const uploadPres = multer({ storage: storagePres });

app.use(express.json());

app.post('/uploadPres', uploadPres.single('pdf'), async (req, res) => {
    try {
        const { originalname, buffer } = req.file;
        const title = req.headers.title || 'Untitled';

        const newPDF = new Prescriptions({
            title,
            name: originalname,
            data: buffer,
        });

        const savedPDF = await newPDF.save();

        res.status(200).send('Prescriptions uploaded successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint for downloading Prescriptions
app.get('/downloadPres/:id', async (req, res) => {
    try {
        const pdf = await Prescriptions.findById(req.params.id);

        if (!pdf) {
            return res.status(404).send('Prescriptions not found');
        }

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${pdf.name}`);
        res.send(pdf.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/latest-pdf-id-Pres', async (req, res) => {
    try {
        const latestPDF = await Prescriptions.findOne().sort({ _id: -1 }).limit(1);

        if (!latestPDF) {
            return res.status(404).send('No Prescriptions found');
        }

        res.status(200).json({ id: latestPDF._id });
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.get('/downloadPres', async (req, res) => {
    const pdfData = await Prescriptions.find({})
    res.json({success: true, data: pdfData})
})