// DonationModal.js
import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const DonationModal = ({ project , show, handleClose }) => {
  const [donationAmount, setDonationAmount] = useState('');
  const projectName = project.name;
  const handleDonationSubmit = (e) => {
    e.preventDefault();
    console.log(`Donation submitted for ${projectName}: $${donationAmount}`);
    // Add your donation submission logic here

    // Close the modal
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Donate to {projectName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleDonationSubmit}>
          <Form.Group controlId="donationAmount">
            <Form.Label>Enter Donation Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Donate
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DonationModal;
