import React, { useState } from 'react'
import { Col, Button } from 'react-bootstrap'
import './Regiter.css'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../UserContext'
// import { useHistory } from 'react-router-dom';

import axios from 'axios'

import google from '../../assets/Login/google.png'

export default function Login() {

  const navigate = useNavigate();
  const { setUser } = useUser();
  const { emailId } = useUser();

  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  });

  console.log(emailId);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const login = () => {
    navigate('/register');
  };


  const handleSubmit = async () => {
    // const history = useHistory();
    try {
      const response = await axios.post('/loginUser', formData);
      console.log(response.data);

      const newEmailId = formData.emailId;
      setUser(newEmailId);

      if (response.data.success) {
        // history.push('/home', { emailId: formData.emailId });
        navigate('/home', { state: { emailId: formData.emailId } });
        setUser(formData.emailId);
        localStorage.setItem('emailId', formData.emailId);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (
    <div>
      <div className="loginForm">
        <Col lg={5} className='reg'>
          <h3>Login, Welcome back!</h3>
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
          <h5>New to our site? <span onClick={login}>Signup here...</span></h5>
          <Button variant='outline-success' style={{ border: '1px solid green' }} className='col-lg-6 mt-3' onClick={handleSubmit}>Login</Button>
        </Col>
      </div>
    </div>
  )
}
