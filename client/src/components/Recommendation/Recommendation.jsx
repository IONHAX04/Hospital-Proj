import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import { Button, Card, Col, Row, Container, NavDropdown, ListGroup, Modal, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Recommendation.css'

import { useLocation } from 'react-router-dom';

import logo from '../../assets/LandingPage/hospital.png'
import articles from '../../assets/Navbar/articles.png'
import goals from '../../assets/Navbar/target.png'
import info from '../../assets/Navbar/plan.png'
import doctor from '../../assets/Navbar/doctor.png'
import Footer from '../LandingPage/Footer';
import { useUser } from '../UserContext';
import success from '../../assets/LandingPage/success.png'
import pending from '../../assets/LandingPage/waiting.png'
import doctors from '../../assets/Doctors/doctor.png'

axios.defaults.baseURL = "http://localhost:8080"

export default function Recommendation({ onMakeAppointment }) {
  const location = useLocation();
  const { emailId } = location.state || {};
  const userName = location.state && location.state.username;
  

  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [doctorImage, setDoctorImage] = useState(null);
  const [hasAppointment, setHasAppointment] = useState(false);

  const { email } = useUser();
  console.log(email);


  const [dataList, setDataList] = useState([])
  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(null);

  const [show, setShow] = useState(false);

  const handleShow = (index) => {
    setSelectedDoctorIndex(index);
  };

  const handleClose = () => {
    setSelectedDoctorIndex(null);
  };


  useEffect(() => {
    const fetchDoctorImage = async () => {
      try {
        const response = await axios.get(`/api/doctors/${dataList[selectedDoctorIndex]._id}/image`);
        setDoctorImage(response.data.imageUrl);
      } catch (error) {
        console.error('Error fetching doctor image:', error);
      }
    };

    if (selectedDoctorIndex !== null) {
      fetchDoctorImage();
    }
  }, [dataList, selectedDoctorIndex]);

  useEffect(() => {
    if (emailId) {
      axios.get(`/getUsernameByEmail?emailId=${emailId}`)
        .then(response => {
          if (response.data.success) {
            setUsername(response.data.username);
          } else {
            console.error('Error fetching username:', response.data.message);
          }
        })
        .catch(error => {
          console.error('Error fetching username:', error);
        });

      axios.get(`/getMobileByEmail?emailId=${emailId}`)
        .then(response => {
          if (response.data.success) {
            setMobile(response.data.mobile);
          } else {
            console.error('Error fetching mobile number:', response.data.message);
          }
        })
        .catch(error => {
          console.error('Error fetching mobile number:', error);
        });
    }
    getFetchData();
  }, [emailId]);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/getUserByEmail/${emailId}`);
        if (response.data.success) {
          setUsername(response.data.data.username);
        } else {
          console.error('Error fetching user data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };


    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/schedules');
        if (response.data.success) {
          const appointments = response.data.data;
          const hasAppointment = appointments.some(appointment => appointment.userId === userName);
          setHasAppointment(hasAppointment);
        } else {
          console.error('Error fetching appointments:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchUserData();
    fetchAppointments();
  }, [userName]);

  const getFetchData = async () => {
    const data = await axios.get("/doctor")
    console.log(data)
    if (data.data.success) {
      setDataList(data.data.data)
    }
  }
  useEffect(() => {
    getFetchData()
  }, [])

  // const username = "Sai"

  const handleNavLinkClick = () => {
    if (hasAppointment) {
      Swal.fire({
        title: 'Appointment Information',
        text: `Your appointment is fixed with Doctor`,
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
  };


  const handleMakeAppointment = async () => {
    const selectedDoctor = dataList[selectedDoctorIndex];
    console.log('Appointment made for', dataList[selectedDoctorIndex]?.firstName, dataList[selectedDoctorIndex]?.lastName);

    if (!selectedDoctor) {
      return;
    }

    const userEmail = emailId;

    const appointmentDetails = {
      userId: userName,
      // emailId: userEmail,
      doctorId: selectedDoctor._id,
      firstName: selectedDoctor.firstName,
      lastName: selectedDoctor.lastName
    };

    try {
      const response = await axios.post("/appointments", appointmentDetails);

      if (response.data.success) {
        console.log('Appointment created successfully');
        Swal.fire({
          title: 'Congrats!',
          text: `Your appointment sent to Dr.${selectedDoctor.firstName} ${selectedDoctor.lastName} You'll receive notification shortly`,
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setSelectedDoctorIndex(null);
      } else {
        alert("Failed to create appointment. Please try again.");
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert("An error occurred. Please try again later.");
    }
  };



  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <b>Dr. {dataList[selectedDoctorIndex]?.firstName} {dataList[selectedDoctorIndex]?.lastName}, {dataList[selectedDoctorIndex]?.qualification}.</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={6}>
              <h5><b>Dr. {dataList[selectedDoctorIndex]?.firstName} {dataList[selectedDoctorIndex]?.lastName}, {dataList[selectedDoctorIndex]?.qualification}.</b></h5>
              <h5>➱ {dataList[selectedDoctorIndex]?.specialized}</h5>
              <h5>➱ {dataList[selectedDoctorIndex]?.contactNumber}</h5>
              <h5>➱ {dataList[selectedDoctorIndex]?.email}</h5>
              <h5>➱ {dataList[selectedDoctorIndex]?.address}</h5>
            </Col>
            <Col lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {doctorImage && (
                <img
                  alt={`Dr. ${dataList[selectedDoctorIndex]?.firstName} ${dataList[selectedDoctorIndex]?.lastName}`}
                  src={dataList[selectedDoctorIndex]?.photo}
                  width="130"
                  height="160"
                  className="d-inline-block align-top ms-2"
                />
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-success' style={{ border: '1px solid green' }} onClick={handleMakeAppointment}>Book Appointment</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <div>

      {/* ======================== NAVBAR ==============================*/}
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              Doctor Recommendation
              <img
                alt=""
                src={doctor}
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
                  <a href='/reg'>Welcome, {userName}</a>

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=' bg-dark navbar-dark'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href='/recommendation'>
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
                    <NavDropdown.Item href='/nutrition'>
                      <img
                        alt=""
                        src={info}
                        width="20"
                        height="20"
                        className="d-inline-block align-top"
                      />{' '}
                      Nutrition Info
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/goals'>
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
                  <Nav.Link href='/articles'>
                    <img
                      alt=""
                      src={articles}
                      width="20"
                      height="20"
                      className="d-inline-block align-top"
                    />{' '}
                    Articles</Nav.Link>

                  <Nav.Link href='/health'>
                    <img
                      alt=""
                      src={articles}
                      width="20"
                      height="20"
                      className="d-inline-block align-top"
                    />{' '}
                    Health record management</Nav.Link>

                  <Nav.Link href='/prescription'>
                    <img
                      alt=""
                      src={articles}
                      width="20"
                      height="20"
                      className="d-inline-block align-top"
                    />{' '}
                    Prescription management</Nav.Link>


                  <Nav.Link className='nav-link' onClick={handleNavLinkClick}>
                    {hasAppointment ? (
                      <>
                        <img
                          alt=""
                          src={success}
                          width="20"
                          height="20"
                          className="d-inline-block align-top"
                        />{' '}
                        You have an appointment
                      </>
                    ) : (
                      <>
                        <img
                          alt=""
                          src={pending}
                          width="20"
                          height="20"
                          className="d-inline-block align-top"
                        />{' '}
                        No appointment
                      </>
                    )}
                  </Nav.Link>


                  <Button variant="danger" className='danger mt-5' style={{ fontWeight: 'bolder' }}>Logout</Button>{' '}
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


      {/* ================== DOCTORS DETAILS =========================== */}
      <div className="doctorCards">
        <h3>Connect with our Doctors</h3>
        <h5>Introducing our outstanding team of expert doctors, committed to delivering high-quality healthcare services at Health Plus. Rely on their expertise and wealth of experience to guide you towards a life of improved health and well-being.</h5>
        <Row style={{ margin: '0' }}>
          {dataList.length > 0 ? (
            dataList.map((el, index) => (
              <React.Fragment key={index}>
                <Col lg={3} className='doctorsDetails'>
                  <Card style={{ width: '18rem', alignItems: 'center', justifyContent: 'center', margin: '20px', padding: '12px' }}>
                    <Card.Img variant="top" src={doctors} style={{ width: '12rem', height: '13rem' }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Name: {el.firstName} {el.lastName}</ListGroup.Item>
                        <ListGroup.Item>{el.specialized}</ListGroup.Item>
                        <ListGroup.Item>Experience: {el.experience} years</ListGroup.Item>
                      </ListGroup>
                      <Button variant="success" onClick={() => handleShow(index)} style={{ alignItems: 'center' }}>
                        View Doctor
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: 'center' }}>
                No data
              </td>
            </tr>
          )}

          {selectedDoctorIndex !== null && (
            <MyVerticallyCenteredModal
              show={selectedDoctorIndex !== null}
              onHide={handleClose}
            />
          )}
        </Row>
      </div>

      <Footer />
    </div>


  )
}
