// components/ProjectDetail.js

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById, fetchDonationsByProjectId } from "../redux/actions";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import DonationModal from "./DonationModal";

const ProjectDetail = () => {
  const { id: projectId } = useParams();
  const [showDonateModal, setShowDonateModal] = useState(false);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.project);
  const donations = useSelector((state) => state.donation.donations);
  let shouldDonateButtonBeDisabled = false;
  if (project) {
    const { collectedAmount, requestedAmount } = project;
    shouldDonateButtonBeDisabled = +collectedAmount >= +requestedAmount;
  }
  const handleDonate = () => {
    setShowDonateModal(true);
  };
  const handleCloseDonateModal = () => {
    setShowDonateModal(false);
  };

  useEffect(() => {
    dispatch(fetchProjectById(projectId));
    dispatch(fetchDonationsByProjectId(projectId));
  }, [dispatch, projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {project && (
        <Card>
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Created by: {project.createdBy} | State: {project.state}
            </Card.Subtitle>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text>Requested Amount: ${project.requestedAmount}</Card.Text>
            <Card.Text>Collected Amount: ${project.collectedAmount}</Card.Text>
            <Button
              disabled={shouldDonateButtonBeDisabled}
              onClick={handleDonate}
              variant="primary"
            >
              Donate
            </Button>
          </Card.Body>
          {donations && donations.length > 0 && (
            <ListGroup variant="flush">
              <ListGroup.Item variant="light" className="fw-bold">
                List of Donations
              </ListGroup.Item>
              {donations.map((donation) => (
                <ListGroup.Item key={donation.id}>
                  {donation.donor} donated ${donation.donationAmount}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          <DonationModal
            project={project}
            show={showDonateModal}
            handleClose={handleCloseDonateModal}
          />
        </Card>
      )}
    </div>
  );
};

export default ProjectDetail;
