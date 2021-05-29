import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal';

function HeroSection() {
    const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        <div className='hero-container'>
           
            <h1>Hospital4You</h1>
            <p>Find the best Medical Facilities for you</p>
            <div className='hero-btn'>
                <button 
                    className='btn btn-primary' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                    onClick={handleShow}
                    >
                        Get Started
                </button>

            </div>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      </>
    )
    
}

export default HeroSection
