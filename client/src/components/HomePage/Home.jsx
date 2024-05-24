import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Row, Container, NavDropdown, ListGroup, Modal, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import logo from '../../assets/LandingPage/hospital.png'
import articles from '../../assets/Navbar/articles.png'
import goals from '../../assets/Navbar/target.png'
import info from '../../assets/Navbar/plan.png'
import doctor from '../../assets/Navbar/doctor.png'
import appointment from '../../assets/Navbar/online.png'
import record from '../../assets/health/record.png'
import prescription from '../../assets/health/prescription.png'

import './Home.css'
import Footer from '../LandingPage/Footer';

import axios from 'axios';

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const emailId = location.state && location.state.emailId;
  const [username, setUsername] = useState('');



  const recommendation = () => {
    console.log(username)
    navigate("/recommendation", { state: { username: username } });
  }
  const nutrition = () => {
    console.log(username)
    navigate("/nutrition", { state: { username: username } });
  }
  const goal = () => {
    console.log(username)
    navigate("/goals", { state: { username: username } });
  }
  const article = () => {
    console.log(username)
    navigate("/articles", { state: { username: username } });
  }
  const health = () => {
    console.log(username)
    navigate("/health", { state: { username: username } });
  }
  const prescriptions = () => {
    console.log(username)
    navigate("/prescription", { state: { username: username } });
  }
  


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/getUserByEmail/${emailId}`);
        if (response.data.success) {
          setUsername(response.data.username);
          setUsername(response.data.data.username);
        } else {
          console.error('Error fetching user data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (emailId) {
      fetchUserData();
    }
  }, [emailId]);

  return (
    <div>
      {/* ======================== NAVBAR ==============================*/}
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              Home
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top ms-2"
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              className="bg-dark color-white"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"

            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='navbarBrand'>
                  {/* <a href='/reg'>Welcome, {username}</a> */}
                  <a href='/reg'>Welcome, {username}</a>

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=' bg-dark navbar-dark'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={recommendation}>
                    <img
                      alt=""
                      src={doctor}
                      width="30"
                      height="25"
                      className="d-inline-block align-top"
                    />{' '}
                    Doctors</Nav.Link>
                  <NavDropdown
                    title="Diet Plannning"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item onClick={nutrition}>
                      <img
                        alt=""
                        src={info}
                        width="20"
                        height="20"
                        className="d-inline-block align-top"
                      />{' '}
                      Nutrition Info
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={goal}>
                      <img
                        alt=""
                        src={goals}
                        width="20"
                        height="20"
                        className="d-inline-block align-top"
                      />{' '}
                      Goals
                    </NavDropdown.Item>

                  </NavDropdown>
                  <Nav.Link onClick={article}>
                    <img
                      alt=""
                      src={articles}
                      width="20"
                      height="20"
                      className="d-inline-block align-top"
                    />{' '}
                    Articles</Nav.Link>

                  <Nav.Link onClick={health}>
                    <img
                      alt=""
                      src={record}
                      width="20"
                      height="20"
                      className="d-inline-block align-top"
                    />{' '}
                    Health record management</Nav.Link>

                  <Nav.Link onClick={prescriptions}>
                    <img
                      alt=""
                      src={prescription}
                      width="20"
                      height="20"
                      className="d-inline-block align-top"
                    />{' '}
                    Prescription management</Nav.Link>



                  <Button variant="danger" className='danger mt-5' style={{ fontWeight: 'bolder' }}>Logout</Button>{' '}
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


      <div className="contentss">
        <div className="homePageContents col-lg-8">
          <header>
            <h1>Welcome to MediConnect Pro..</h1>
            <h2>What we Do?</h2>
            <p>At MediConnect Pro, our mission is to revolutionize healthcare by providing innovative solutions that empower patients and streamline medical processes. We are committed to creating a seamless healthcare experience, leveraging technology to bridge gaps, enhance accessibility, and prioritize the well-being of individuals.</p>
          </header>

          <section className="mb-3 mt-4 text-center">
            <h2>Explore Our Key feature</h2>

            <div className="feature row mb-3  ">
              <div className="col-lg-3 d-none d-lg-block">
                <img
                  alt=""
                  src={appointment}
                  width="200"
                  height="160"
                  className="d-inline-block align-top"
                />{' '}
              </div>
              <div className="col-lg-9 text-center">
                <h3>Make Appointments</h3>
                <p>
                  Through our platform, patients can easily schedule appointments with their preferred doctors, while medical professionals can efficiently manage their schedules. Our goal is to eliminate the hassles of appointment booking, making healthcare accessible and stress-free.
                </p>
                <Button variant="outline-success col-lg-6 mx-auto" onClick={recommendation} className='buttons'>View </Button>{' '}
              </div>
            </div>

            <div className="feature row  mb-3  ">
              <div className="col-lg-9 text-center">
                <h3>Nutritional Information</h3>
                <p>
                  Access detailed nutritional information for every meal and recipe. Understand calories, macronutrients, vitamins, minerals, and more to make informed dietary choices.
                </p>
                <Button variant="outline-success col-lg-6 mx-auto" onClick={nutrition} className='buttons'>View </Button>{' '}
              </div>
              <div className=" col-lg-3 d-none d-lg-block">
                <img
                  alt=""
                  src={info}
                  width="200"
                  height="160"
                  className="d-inline-block align-top"
                />{' '}
              </div>
            </div>

            <div className="feature row mb-3  ">
              <div className="col-lg-3 d-none d-lg-block">
                <img
                  alt=""
                  src={goals}
                  width="200"
                  height="160"
                  className="d-inline-block align-top"
                />{' '}
              </div>
              <div className="col-lg-9 text-center">
                <h3>Diet Planning - Goals</h3>
                <p>
                  Define your health and fitness aspirations. Set achievable goals tailored to your preferences, whether it's weight loss, muscle gain, or maintenance.
                </p>
                <Button variant="outline-success col-lg-6 mx-auto" onClick={goal} className='buttons'>View </Button>{' '}
              </div>
            </div>

          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
