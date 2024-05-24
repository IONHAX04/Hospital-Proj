import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Form, InputGroup, Modal, Nav, Navbar, NavDropdown, Offcanvas, Tab, Tabs, Table, Col, Row } from 'react-bootstrap';

import Tables from './Tables'
import Cards from './Cards'
import './Nutrition.css'

import Low from '../../../assets/Nutrition/watermelon.gif'
import Moderate from '../../../assets/Nutrition/mushroom-shower.gif'
import High from '../../../assets/Nutrition/meat.gif'
import Footer from '../../LandingPage/Footer';

import goals from '../../../assets/Navbar/target.png'
import info from '../../../assets/Navbar/plan.png'
import doctor from '../../../assets/Navbar/doctor.png'
import appointment from '../../../assets/Navbar/online.png'
import record from '../../../assets/health/record.png'
import prescription from '../../../assets/health/prescription.png'
import articles from '../../../assets/Navbar/articles.png'


import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Nutrition() {

  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state && location.state.username;



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
              Nutrition Info
              <img
                alt=""
                src={info}
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



      <div className="nutritionContents mt-5 mb-5">
        <h3>Unlock a Healthier You with Detailed Nutrition Information</h3>
        <h6>Welcome to our web application, where we empower you to take control of your health through informed choices. We believe that knowledge is the key to a healthier lifestyle, and that's why we provide you with comprehensive nutritional information for every meal and recipe you encounter.</h6>

        <h4>What can you expect from our platform?</h4>

        <Cards />

        <Tables />

        <h4 className='mt-5'>We understand that making healthy choices can be a challenge. That's why we've categorized foods into three main groups based on protein content to help you make the right choices:</h4>
        <Row className='cardsMain'>
          <Col lg={3} className='cardsCol'>
            <Card style={{ width: '18rem' }} className='cardsNutrition'>
              <Card.Img variant="top" src={High} style={{ width: '100px', height: '100px' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '20px', fontWeight: 'bolder' }}>Foods High in Protein</Card.Title>
                <Card.Text style={{ fontSize: '19px' }}>
                  These foods are packed with protein, making them excellent choices for those looking to build muscle or maintain a high-protein diet. They include chicken, beef, bacon, hamburger, and fried shrimp, among others.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className='cardsCol'>
            <Card style={{ width: '18rem' }} className='cardsNutrition'>
              <Card.Img variant="top" src={Moderate} style={{ width: '100px', height: '100px' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '20px', fontWeight: 'bolder' }}>Foods Moderate in Protein</Card.Title>
                <Card.Text style={{ fontSize: '19px' }}>
                  These foods offer a moderate protein content and are versatile additions to a balanced diet. In this category, you'll discover options such as cheese, bread, rice, pasta, and a wide variety of other choices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className='cardsCol'>
            <Card style={{ width: '18rem' }} className='cardsNutrition'>
              <Card.Img variant="top" src={Low} style={{ width: '100px', height: '100px' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '20px', fontWeight: 'bolder' }}>Foods Low in Protein</Card.Title>
                <Card.Text style={{ fontSize: '19px' }}>
                  If you're watching your protein intake or looking for lighter options, these foods are low in protein. They include fruits like grapes, melon, and strawberries, vegetables like cucumbers and tomatoes, snacks.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>



      <Footer />


    </div>
  )
}
