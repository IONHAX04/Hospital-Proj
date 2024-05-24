import React from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import './Art.css'

export default function Science(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const { img, title, content, head1, headContent1 } = props.details;

  function MyVerticallyCenteredModal(props) {
    const [localModalShow, setLocalModalShow] = React.useState(props.show);

    const handleHide = () => {
      setLocalModalShow(false);
      props.onHide();
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={localModalShow} // Use localModalShow instead of props.show
        onHide={handleHide} // Use local onHide function
        className='modal'
        style={{textAlign:'center'}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='title'>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='body'>
          <h4>{content}</h4>
          <img src={img} alt={title} style={{width: '500px', height: '300px'}}></img>
          <h5>{head1}</h5>
          <p>{headContent1}</p>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <Card style={{ width: '18rem' }} className='mb-4' onClick={() => setModalShow(true)}>
      <Card.Img variant='top' src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
}