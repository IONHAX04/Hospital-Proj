import React, { useState } from 'react'
import Loss from './WeightLoss/Loss'
import Gain from './WeightGain/Gain'

import './Goals.css'

import { Button, Card, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Offcanvas, Tab, Tabs, Table, Col, Row } from 'react-bootstrap';
import Footer from '../../LandingPage/Footer'
import logo from '../../../assets/LandingPage/hospital.png'

import goals from '../../../assets/Navbar/target.png'
import info from '../../../assets/Navbar/plan.png'
import doctor from '../../../assets/Navbar/doctor.png'
import record from '../../../assets/health/record.png'
import prescription from '../../../assets/health/prescription.png'
import articles from '../../../assets/Navbar/articles.png'


import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





export default function Goals() {

  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state && location.state.username;

  const [activeTab, setActiveTab] = useState('first');

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };


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

  return (
    <div>
      {/* ======================== NAVBAR ==============================*/}
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              Goals
              <img
                alt=""
                src={goals}
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



      <div className="goalsContents">
        <Button
          variant={activeTab === 'first' ? 'warning' : 'outline-warning'}
          onClick={() => handleTabClick('first')}
        >
          Weight Loss Diet
        </Button>
        <Button
          variant={activeTab === 'second' ? 'success' : 'outline-success'}
          onClick={() => handleTabClick('second')}
        >
          Weight Gain Diet
        </Button>

        <div className="mt-3">
          {activeTab === 'first' && <div><Loss /></div>}
          {activeTab === 'second' && <div><Gain /> </div>}
        </div>
      </div>



      <Footer />
    </div>
  )
}
