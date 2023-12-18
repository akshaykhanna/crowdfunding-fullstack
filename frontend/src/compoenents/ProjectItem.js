import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import DonationModal from "./DonationModal";
import { capitalize } from "../utils";
import "./style.css";
import { PROJECT_STATE } from "../constants";
import { Link } from "react-router-dom";

const ProductItem = ({ project, username }) => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const { collectedAmount, requestedAmount, id } = project;
  const shouldDonateButtonBeDisabled = +collectedAmount >= +requestedAmount;
  const isProjectOwnByLoginUser = username === project.createdBy;

  const handleDonate = () => {
    setShowDonateModal(true);
  };

  const handleEdit = () => {
    console.log("Edit clicked for project:", project.name);
    // Add your edit logic here
  };

  const handleCloseDonateModal = () => {
    setShowDonateModal(false);
  };

  return (
    // add conditional styling for project state
    <Link to={`/projects/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Card key={project.id} className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            {/* Project Name with Ellipsis */}
            <div className="flex-grow-1 overflow-hidden">
              <Card.Title className="text-truncate">{project.name}</Card.Title>
            </div>

            {/* Total and Collected Amounts */}
            <div className="text-end">
              {project.state && (
                <>
                  <span>State: {capitalize(project.state)}</span>
                  <span>{" | "}</span>
                </>
              )}
              <span>Needed: ${project.requestedAmount}</span>
              {project.collectedAmount && (
                <>
                  <span>{" | "}</span>
                  <span>Collected: ${project.collectedAmount}</span>
                </>
              )}
            </div>

            {/* Donate and Edit Buttons */}
            {username && (
              <div className="ms-3">
                <Button
                  variant="primary"
                  size="sm"
                  className="me-2"
                  disabled={shouldDonateButtonBeDisabled}
                  onClick={handleDonate}
                >
                  Donate
                </Button>
                {isProjectOwnByLoginUser && (
                  <Button variant="secondary" size="sm" onClick={handleEdit}>
                    Edit
                  </Button>
                )}
              </div>
            )}
          </div>
        </Card.Body>
        {/* Donation Modal */}
        <DonationModal
          project={project}
          show={showDonateModal}
          handleClose={handleCloseDonateModal}
        />
      </Card>
    </Link>
  );
};

export default ProductItem;
