import React, { useEffect } from 'react'
import { Accordion, Button, Card, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, OverlayTrigger, Row, Col, Tooltip } from 'react-bootstrap';
import './LandingPage.css'
import Swal from 'sweetalert2';

import hospital from '../../assets/LandingPage/hospital.png'
import logo from '../../assets/LandingPage/medical-team.png'
import introImg from '../../assets/LandingPage/intro.png'
import appointment from '../../assets/LandingPage/appointment.png'
import recommendation from '../../assets/LandingPage/recommendation.png'
import personalize from '../../assets/LandingPage/personalize.png'
import healthRec from '../../assets/LandingPage/healthRec.png'
import prescription from '../../assets/LandingPage/prescription.png'
import medi from '../../assets/LandingPage/medi.png'
import Footer from './Footer';
import add from '../../assets/LandingPage/introImg.png'


export default function LandingPage() {
    const loginPage = () => {
        window.location.href = "/login"
    }
    useEffect(() => {
        window.onload = () => {
            Swal.fire({
                title: 'Welcome to MediConnect Pro!',
                text: 'We are here to inform you that, if you want to experience our service, login is needed.'
            });
        };
        return () => {
            window.onload = null;
        };
    }, []);


    return (
        <div>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            MediConnect Pro
                            <img
                                alt=""
                                src={logo}
                                className="d-inline-block align-top"
                            />{' '}
                        </Navbar.Brand>
                        <Button variant='outline-success' style={{ border: '1px solid green', fontSize: '18px', fontWeight: 'bolder' }} onClick={loginPage}>Login</Button>
                    </Container>
                </Navbar>
            ))}
            {/* ==============LANDING PAGE CONTENT========================= */}
            <div className='landingPageContents'>
                <Row className="startPage">
                    <Col lg={5} className='mainPageContent'>
                        <h2>Time is generally the "BEST DOCTOR"... <span><br></br>~Thanks for ur time</span></h2>
                        <h6>Say goodbye to appointment hassles. With MediConnect Pro, users can effortlessly book appointments with doctors, specialists, and healthcare facilities directly from the app. Real-time availability, intuitive time slot selection, and instant confirmations make appointment management a breeze.</h6>
                        {/* <Button variant="outline-success" style={{ border: '1px solid green' }} className='col-lg-12'>Get Start Your Journey with Us 🤝️ </Button>{' '} */}

                        <Row style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                            <Col lg={3}>
                                <h3><span style={{ color: 'green', fontWeight: 'bolder' }}>100k+ </span>Patients</h3>
                            </Col>
                            <Col lg={3}>
                                <h3><span style={{ color: 'green', fontWeight: 'bolder' }}>20+ </span>Doctors</h3>
                            </Col>
                            <Col lg={4}>
                                <h3><span style={{ color: 'green', fontWeight: 'bolder' }}>10+ </span>yrs experience</h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className='mainPageContent d-none d-lg-block'>
                        <img
                            src={introImg}
                            className='img-fluid'
                        ></img>
                    </Col>
                </Row>
            </div>

            {/* WHY MEDI CONNECT PRO */}
            <div className="why">
                <Row style={{ justifyContent: 'space-around' }}>
                    <Col lg={4}>
                        <img
                            alt=""
                            src={add}
                            width="400"
                            height="400"
                            className="d-inline-block align-top"
                            style={{ borderRadius: '120px' }}
                        />{' '}
                    </Col>
                    <Col lg={6}>
                        <h2 style={{ fontWeight: 'bolder' }}>Why MediConnect Pro</h2>
                        <h5 style={{ color: 'rgba(0, 0, 0, 0.8)', padding: '20px' }}>Discover the reasons to choose Health Plus for your healthcare needs. Experience expert care, convenience, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.</h5>
                        <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>🩺️ Best Professional Doctors</p>
                        <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>💡️ Enrollment Easy and Quick</p>
                        <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>👨‍⚕️️ Choose Specialist</p>
                        <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>📅️ Make a Schedule</p>
                        <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>😃️ Get Your Solution</p>
                    </Col>
                </Row>

            </div>

            {/* FEATURES */}
            <div className="plans features mt-5">
                <h2>Our Features</h2>
                <h5>Modules of MediConnect Pro System</h5>
                <div className="row mt-5">
                    <Card style={{ width: '18rem', alignItems: 'center', alignItems: 'center' }} className="mb-4">
                        <Card.Img variant="top" src={appointment} className='introPgContents' />
                        <Card.Body>
                            <Card.Title>Appointment Scheduling</Card.Title>
                            <Card.Text>
                                Effortlessly book appointments with doctors, specialists, and healthcare facilities. Real-time availability, intuitive scheduling, and instant confirmations for a seamless healthcare experience.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', alignItems: 'center' }} className="mb-4">
                        <Card.Img variant="top" src={recommendation} className='introPgContents' />
                        <Card.Body>
                            <Card.Title>Doctor Recommendation</Card.Title>
                            <Card.Text>
                                Discover the right healthcare providers based on your location, preferences, and patient reviews. Access detailed profiles, qualifications, and expertise for informed decisions.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', alignItems: 'center' }} className="mb-4">
                        <Card.Img variant="top" src={personalize} className='introPgContents' />
                        <Card.Body>
                            <Card.Title>Diet Planning</Card.Title>
                            <Card.Text>
                                Unlock a healthier you with personalized diet plans. Our expert suggestions cater to your goals, preferences, and nutritional needs, ensuring a balanced and delicious journey.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* FAQ */}
                <div className="row">

                    <Accordion defaultActiveKey="0" flush className='faq' style={{ width: '70rem' }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is MediConnect Pro?</Accordion.Header>
                            <Accordion.Body>
                                MediConnect Pro is a comprehensive healthcare management portal that seamlessly connects doctors, nurses, and patients. It streamlines appointment scheduling, health record management, and offers personalized health solutions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How secure is the health record management feature?</Accordion.Header>
                            <Accordion.Body>
                                MediConnect Pro prioritizes security. Health records are stored securely with access control. Users have control over who can view their profiles, ensuring privacy and confidentiality.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I schedule appointments with specific doctors?</Accordion.Header>
                            <Accordion.Body>
                                Absolutely! MediConnect Pro allows you to effortlessly schedule appointments with preferred doctors, specialists, and healthcare facilities. Real-time availability and instant confirmations enhance convenience.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Is the Personal Health Tracker customizable?</Accordion.Header>
                            <Accordion.Body>
                                Yes, the Personal Health Tracker is highly customizable. Monitor and track health metrics such as blood pressure, weight, and glucose levels. Visualize trends and set personalized health goals for proactive well-being.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>


            {/* FOR YOU */}
            <div className="forU plans mt-5">
                <h2>For You!!</h2>
                <h5>Our exclusive features for you</h5>
                <div className="row mt-5">
                    <Card style={{ width: '20rem', alignItems: 'center' }} className="mb-4">
                        <Card.Img variant="top" src={healthRec} className='introPgContents' />
                        <Card.Body>
                            <Card.Title>Health Record Management</Card.Title>
                            <Card.Text>
                                Effortlessly book appointments with doctors, specialists, and healthcare facilities. Real-time availability, intuitive scheduling, and instant confirmations for a seamless healthcare experience.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem', alignItems: 'center' }} className="mb-4">
                        <Card.Img variant="top" src={prescription} className='introPgContents' />
                        <Card.Body>
                            <Card.Title>Prescription Management</Card.Title>
                            <Card.Text>
                                Discover the right healthcare providers based on your location, preferences, and patient reviews. Access detailed profiles, qualifications, and expertise for informed decisions.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem', alignItems: 'center' }} className="mb-4">
                        <Card.Img variant="top" src={medi} className='introPgContents' />
                        <Card.Body>
                            <Card.Title>Medical Articles</Card.Title>
                            <Card.Text>
                                Discover the right healthcare providers based on your location, preferences, and patient reviews. Access detailed profiles, qualifications, and expertise for informed decisions.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <Footer />

        </div>
    )
}
