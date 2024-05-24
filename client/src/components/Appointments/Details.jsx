import React, { useEffect } from 'react'

import img1 from '../../assets/Doctors/john.png'



export default function Details() {

    const addDoctorsToDatabase = async () => {
        const doctors = [
            {
                firstName: "John",
                lastName: "Doe",
                specialized: "Cardiologist",
                qualification: "MD",
                experience: "12",
                contactNumber: "123-456-7890",
                email: "john.doe@gmail.com",
                address: "123 Main St, Cityville, State, 12345",
                photo: { img1 },
                password: "johndoe123",
            },
        ];

        const baseUrl = 'http://localhost:8080/doctor';

        for (const doctor of doctors) {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(doctor),
            });

            if (response.ok) {
                console.log(`Doctor ${doctor.firstName} added successfully`);
            } else {
                console.error(`Failed to add doctor ${doctor.firstName}`);
            }
        }
    };
    addDoctorsToDatabase();


    return (
        <div>

        </div>
    )
}
