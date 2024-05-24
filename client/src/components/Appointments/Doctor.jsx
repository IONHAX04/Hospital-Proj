import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-clock/dist/Clock.css';
import Footer from '../LandingPage/Footer';

import './Appointment.css'

import { Button, Card, Col, Row, Container, ListGroup, Modal, Nav, Navbar, Offcanvas } from 'react-bootstrap';


import logo from '../../assets/LandingPage/hospital.png'

export default function Doctor() {
  const [dataList, setDataList] = useState([]);
  const [dataScheduleList, setDataScheduleList] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState('');

  const username = "Doctor name";

  const getFetchData = async () => {
    const data = await axios.get("/appointments");
    if (data.data.success) {
      setDataList(data.data.data);
    }
  }

  useEffect(() => {
    getFetchData();
  }, []);


  const getFetchScheduleData = async () => {
    const data = await axios.get("/schedules")
    console.log(data)
    if (data.data.success) {
      setDataScheduleList(data.data.data)
    }
  }
  useEffect(() => {
    getFetchScheduleData()
  }, [])


  const handleFixAppointment = (appointmentId) => {
    setSelectedAppointment(appointmentId);
  };

  const handleDateTimeSelection = (event) => {
    const selectedValue = event.target.value;
    console.log('Selected Value:', selectedValue);
    setSelectedDateTime(new Date(selectedValue));
  };


  const handleSubmit = async () => {
    console.log(`Appointment confirmed for ${selectedDateTime}`);


    const selectedAppointmentData = dataList.find((appointment) => appointment._id === selectedAppointment);

    const { doctorId, firstName, lastName, userId } = selectedAppointmentData;

    if (selectedDateTime instanceof Date && !isNaN(selectedDateTime)) {
      const scheduleData = {
        userId: userId,
        // mobile: mobile,
        doctorId: doctorId,
        firstName: firstName, 
        lastName: lastName,
        time: selectedDateTime.toISOString(),
      };

      try {
        const response = await axios.post("/schedules", scheduleData);

        if (response.data.success) {
          console.log('Schedule added successfully');
          getFetchScheduleData();
        } else {
          console.error('Failed to add schedule');
        }

        const deleteData = await axios.delete("/deleteAppointment/"+selectedAppointment)
        if(deleteData.data.success){
          getFetchData()  
          alert("Data removed")
        }
      } catch (error) {
        console.error('Error adding schedule:', error);
      }

      setSelectedAppointment(null);
      setSelectedDateTime('');
    } else {
      console.error('Invalid date selected:', selectedDateTime);
    }
  }




  const handleDeleteAppointment = async (id) => {
    const data = await axios.delete("/deletePatient/" + id)
    if (data.data.success) {
      getFetchData()
      getFetchScheduleData()
      alert("Patient Removed")
    }
  }

  return (
    <div>

      {/* ======================== NAVBAR ==============================*/}
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              Doctor's Admin Page
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top ms-2"
              />{' '}
            </Navbar.Brand>

          </Container>
        </Navbar>
      ))}





      <div className="appoitments m-5">
        <h3>Scheduled Appointments</h3>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th colSpan={2}>Doctor Name</th>
              <th>Patient Name</th>
              {/* <th>Mobile</th> */}
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dataScheduleList[0] ? (
              dataScheduleList.map((el, index) => (
                <tr key={el._id}>
                  <td>{index + 1}</td>
                  <td>{el.firstName}</td>
                  <td>{el.lastName}</td>
                  <td>{el.userId}</td>
                  {/* <td>{el.mobile}</td> */}
                  <td>
                    <Button variant='outline-danger' style={{ border: '1px solid red' }} onClick={() => handleDeleteAppointment(el._id)}>Visited</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


      <div className="appoitments m-5">
        <h3>Upcoming Appointments</h3>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th colSpan={2}>Doctor Name</th>
              <th>Patient Name</th>
              {/* <th>Mobile</th> */}
              <th>Fix Appointment</th>
              <th>Date and Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataList[0] ? (
              dataList.map((el, index) => (
                <tr key={el._id}>
                  <td>{index + 1}</td>
                  <td>{el.firstName}</td>
                  <td>{el.lastName}</td>
                  <td>{el.userId}</td>
                  {/* <td>{el.mobile}</td> */}
                  <td>
                    {selectedAppointment === el._id ? (
                      <Button variant='outline-danger' style={{ border: '1px solid red' }} onClick={() => handleFixAppointment(null)}>Cancel</Button>
                    ) : (
                      <Button variant='outline-success' style={{ border: '1px solid green' }} onClick={() => handleFixAppointment(el._id)}>Fix</Button>
                    )}
                  </td>
                  <td>
                    {selectedAppointment === el._id && (
                      <input
                        type="datetime-local"
                        value={selectedDateTime}
                        style={{ padding: '7px', borderRadius: '5px' }}
                        onChange={handleDateTimeSelection}
                      />
                    )}
                  </td>
                  <td>
                    {selectedAppointment === el._id && selectedDateTime && (
                      <Button variant='outline-success' style={{border: '1px solid green'}} onClick={()=>handleSubmit(el._id)}>Submit</Button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No data found</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>

      <Footer />
    </div>
  );
}
