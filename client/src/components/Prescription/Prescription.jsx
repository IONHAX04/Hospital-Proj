import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row, Container, NavDropdown, ListGroup, Modal, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import logo from '../../assets/LandingPage/hospital.png'
import articles from '../../assets/Navbar/articles.png'
import goals from '../../assets/Navbar/target.png'
import info from '../../assets/Navbar/plan.png'
import doctor from '../../assets/Navbar/doctor.png'
import record from '../../assets/health/record.png'
import prescription from '../../assets/health/prescription.png'
import Footer from '../LandingPage/Footer';
import './Prescription.css'

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Prescription() {
    const [file, setFile] = useState(null);
    const [pdfId, setPdfId] = useState(null);
    const [pdfData, setPdfData] = useState(null);
    const [pdfName, setPdfName] = useState('');
    const [pdfTitle, setPdfTitle] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const [displayName, setDisplayName] = useState([]);

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






    const getFetchData = async () => {
        const data = await axios.get("/downloadPres")
        console.log(data)
        if (data.data.success) {
            setDisplayName(data.data.data)
        }
    }

    useEffect(() => {
        getFetchData()
    }, [])

    console.log(displayName);

    useEffect(() => {
        const fetchPdfId = async () => {
            try {
                const response = await axios.get('http://localhost:8080/latest-pdf-id-Pres');
                setPdfId(response.data.id);
            } catch (error) {
                console.error('Error fetching PDF ID:', error.message);
            }
        };

        fetchPdfId();
    }, []);

    useEffect(() => {
        const fetchPdfData = async () => {
            try {
                if (pdfId) {
                    const response = await axios.get(`http://localhost:8080/downloadPres/${pdfId}`, {
                        responseType: 'blob',
                    });

                    setPdfData(response.data);
                }
            } catch (error) {
                console.error('Error fetching PDF data:', error.message);
            }
        };

        fetchPdfData();
    }, [pdfId]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        const fileNameWithoutExtension = event.target.files[0].name.replace(/\.[^/.]+$/, '');
        setPdfName(fileNameWithoutExtension);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('pdf', file);
            formData.append('title', pdfTitle);

            await axios.post('http://localhost:8080/uploadPres', formData);

            setUploadedFiles((prevFiles) => [
                ...prevFiles,
                { title: pdfTitle, name: pdfName },
            ]);

            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error.message);
        }
    };

    const handleDownload = async (fileName) => {
        try {
            const response = await axios.get(`http://localhost:8080/downloadPres/${pdfId}`, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', displayName.title + '.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading file:', error.message);
        }
    };


    return (
        <div>

            {/* ======================== NAVBAR ==============================*/}
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            Prescription Management
                            <img
                                alt=""
                                src={prescription}
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




            <div className="healthRecMgmt">
                <h2>Prescription Management</h2>
                <h4>Effective prescription management is a vital element in healthcare, ensuring precise, secure, and efficient handling of medication orders for patients. This comprehensive guide explores the fundamental components of prescription management, its significance, and optimal practices to uphold an organized and patient-centered approach.</h4>

                <div className="forms">
                    <h2>Click here to upload your prescriptions</h2>
                    <input type="file" accept=".pdf" onChange={handleFileChange} className='mt-5' style={{ fontSize: '20px' }} />
                    <Button variant='success' onClick={handleUpload}>Upload</Button>
                </div>

                <div className="display">
                    <h2>Your previous prescriptions</h2>
                    <tbody>
                        {displayName[0] ? (
                            displayName.map((el) => {
                                console.log(el)
                                return (
                                    <tr>
                                        <td>{el.name}</td>
                                        <td><Button onClick={handleDownload}>Download</Button></td>
                                    </tr>
                                )
                            }
                            )) : (
                            <p style={{ textAlign: "center" }}>No data</p>
                        )}
                    </tbody>
                </div>
            </div>

            <Footer />
        </div>
    );
}
