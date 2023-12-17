// DonationModal.js
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { submitDonation } from '../redux/actions/donationActions';

const DonationModal = ({ project, show, handleClose }) => {
  const projectName = project ? project.name : "";
  const dispatch = useDispatch();
  const [donationAmount, setDonationAmount] = useState('');
  const donor = useSelector((state) => state.donation.username);
  const handleSubmit = () => {
    const donationData = {
      donationAmount: parseFloat(donationAmount),
      project: project.id,
      donor,
    };

    dispatch(submitDonation(donationData));
    handleClose(); // Close the modal after submission
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Donate to {projectName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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
