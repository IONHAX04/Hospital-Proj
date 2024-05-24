import React, { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import './Regiter.css'


import google from '../../assets/Login/google.png'
import axios from 'axios'


export default function Register() {
  const [formData, setFormData] = useState({
    patientName: "",
    emailId:"",
    password:"",
    mobile:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const login = () => {
    window.location.href="/login"
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/registerUser", formData);
      console.log(response.data);
      if (response.data.success) {
        setFormData({
          patientName: "",
          emailId: "",
          password: "",
          mobile: "",
        });
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    window.location.href="/login"
  };
  
  return (
    <div>
      <div className="registerForm">
        <Col lg={5} className='reg'>
          <h3>Registration - User Details</h3>
          <Button className='col-lg-6 mt-4' style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', border: '1px solid yellow' }} variant='outline-warning'>
            <img
              alt=""
              src={google}
              width="20"
              height="20"
              className="d-inline-block align-top"
            />{' '}
            Continue with Google
          </Button>
          <h3>OR</h3>
          <input
            type="text"
            id="patientName"
            name="patientName"
            className='col-lg-6'
            value={formData.patientName}
            onChange={handleChange}
            placeholder='Enter username'
            required
          />
          <input
            type="email"
            id="emailId"
            name="emailId"
            className='col-lg-6'
            value={formData.emailId}
            placeholder='Enter Email Id'
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            className='col-lg-6'
            value={formData.password}
            placeholder='Enter password'
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            id="mobile"
            name="mobile"
            className='col-lg-6 mb-5'
            value={formData.mobile}
            placeholder='Enter mobile number'
            onChange={handleChange}
            required
          />
          <h5>Already have an account? <span onClick={login}>Login here...</span></h5>
          <Button variant='outline-success' style={{ border: '1px solid green' }} className='col-lg-6 mt-3' onClick={handleSubmit}>Register</Button>
        </Col>
      </div>
    </div>
  )
}