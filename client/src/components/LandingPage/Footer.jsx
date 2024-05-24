import React from 'react'

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/LandingPage/img.png'

import { Col, Row } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {

    const [showTermsOfUse, setShowTermsOfUse] = useState(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

    const handleShowTermsOfUse = () => setShowTermsOfUse(true);
    const handleCloseTermsOfUse = () => setShowTermsOfUse(false);

    const handleShowPrivacyPolicy = () => setShowPrivacyPolicy(true);
    const handleClosePrivacyPolicy = () => setShowPrivacyPolicy(false);

    return (
        <div className='bottom'>

            {/* CONTACT INFO */}
            <div className="contact">
                <Row>
                    <Col lg={5}>
                        <img
                            alt=""
                            src={logo}
                            width="500"
                            height="200"
                            className="d-inline-block align-top"
                        />{' '}
                    </Col>
                    <Col lg={3}>
                        <h3>Servies:</h3>
                        <h5>Emergency Care</h5>
                        <h5>Appointment Scheduling</h5>
                        <h5>Prescription Management</h5>
                        <h5>Health Care Management</h5>
                    </Col>
                    <Col lg={3}>
                        <h3>Contact Details:</h3>
                        <h5>support@mediconnectpro.com</h5>
                        <h5>support@mediconnectplus.com</h5>
                        <h5>+044-123-123-123</h5>
                        <h5>+044-123-123-124</h5>
                    </Col>
                </Row>
            </div>

            <Row className='footerContent'>
                <Col lg={6}>
                    <h5>COPYRIGHT © 2023 - MediConnect Pro. All Rights Reserved.</h5>
                </Col>

                <Col lg={3}>
                    <h5 onClick={handleShowTermsOfUse}>Terms of Use</h5>
                    <Offcanvas show={showTermsOfUse} onHide={handleCloseTermsOfUse} backdrop="static">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Terms Of Use</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body style={{ textAlign: 'justify' }}>
                            <h4>1. User Responsibilities:</h4>
                            <ul>
                                <li>
                                    Users, including doctors, nurses, and patients, are responsible for the accuracy and completeness of the information provided during registration and usage of the platform.
                                </li>
                            </ul>

                            <h4>2. Security and Access:</h4>
                            <ul>
                                <li>Users must maintain the confidentiality of their login credentials.</li>
                                <li>Unauthorized access attempts or sharing of login information are strictly prohibited.</li>
                            </ul>

                            <h4>3. Data Privacy:</h4>
                            <ul>
                                <li>MediConnect Pro prioritizes data privacy. Users have control over their health records, and access is granted only to authorized healthcare providers.</li>
                            </ul>

                            <h4>4. Medical Advice:</h4>
                            <ul>
                                <li>\Information provided on MediConnect Pro is for informational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment.</li>
                            </ul>

                            <h4>5. Appointment Scheduling:</h4>
                            <ul>
                                <li>Users are responsible for providing accurate information during appointment scheduling. Changes or cancellations should be made in a timely manner.</li>
                            </ul>

                            <h4>6. Prescription Management:</h4>
                            <ul>
                                <li>Users are responsible for the accuracy of prescription information uploaded to the platform. MediConnect Pro is not liable for errors in medication management.</li>
                            </ul>
                            <h4>7. Health Tracker Accuracy:</h4>
                            <ul>
                                <li>Users should ensure the accuracy of health metrics entered into the Personal Health Tracker. The platform provides insights based on the information provided.</li>
                            </ul>
                            <h4>8. Diet Planning:</h4>
                            <ul>
                                <li>Diet plans provided by MediConnect Pro are suggestions and may not be suitable for all individuals. Users with specific dietary concerns should consult with a registered dietitian or healthcare professional.</li>
                            </ul>
                            <h4>9. Service Availability:</h4>
                            <ul>
                                <li>While we strive to provide uninterrupted services, MediConnect Pro may undergo maintenance or experience downtime. We are not liable for any inconvenience caused.</li>
                            </ul>
                            <h4>10. Legal Compliance:</h4>
                            <ul>
                                <li>Users must comply with all applicable laws and regulations while using the platform. Any misuse or illegal activities will result in immediate termination of access.</li>
                            </ul>
                            <h4>11. Termination of Services:</h4>
                            <ul>
                                <li>MediConnect Pro reserves the right to terminate or suspend user accounts at its discretion, especially in cases of violation of terms or misuse of the platform.</li>
                            </ul>
                            <h4>12. Changes to Terms and Conditions:</h4>
                            <ul>
                                <li>MediConnect Pro may update these terms and conditions at any time. Users will be notified of any changes, and continued use of the platform implies acceptance of the modified terms.</li>
                            </ul>
                            <h4>Disclaimer</h4>
                            MediConnect Pro does not guarantee the accuracy, completeness, or suitability of the information provided on the platform. Users are advised to seek professional medical advice for specific health concerns. The platform is not liable for any direct or indirect consequences resulting from the use of its services. Users agree to use the platform at their own risk.


                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>

                <Col lg={3}>
                    <h5 onClick={handleShowPrivacyPolicy}>Privacy Policy</h5>
                    <Offcanvas show={showPrivacyPolicy} onHide={handleClosePrivacyPolicy} backdrop="static">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Privacy Policy</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <h4>1. Information Collection</h4>
                            <ul>
                                <li><b>User Information: </b>During registration, we collect personal information such as name, email, and contact details.</li>
                                <li><b>Health Records: </b>Users may voluntarily provide health-related information for efficient healthcare management.</li>
                            </ul>

                            <h4>2. Data Security:</h4>
                            <ul>
                                <li><b>Access Control: </b>Users have control over who can access their health records. We implement security measures to protect your information from unauthorized access.</li>
                            </ul>

                            <h4>3. User Choices:</h4>
                            <ul>
                                <li><b>Account Management:</b>Users can review, update, or delete their account information at any time.</li>
                                <li><b>Communication Preferences:</b>Users can choose their communication preferences for receiving updates.</li>
                            </ul>

                            <h4>4. Children's Privacy:</h4>
                            <ul>
                                <li><b>Age Restriction:</b>MediConnect Pro is not intended for individuals under the age of 18. We do not knowingly collect information from children.</li>
                            </ul>

                            <h4>5. Changes to Privacy Policy:</h4>
                            <ul>
                                <li><b>Notification:</b>Users will be notified of any changes to the privacy policy. Continued use of the platform implies acceptance of the modified policy.</li>
                            </ul>

                            <h4>Contact Information:</h4>
                            <ul>
                                <li><b>For any questions, concerns, or requests regarding your privacy, contact our support team at support@mediconnectpro.com.</b></li>
                            </ul>


                            <p>By using the App, you agree to the terms outlined in this Privacy Policy.</p>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
            </Row>
        </div>
    )
}
