import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import DonationModal from './DonationModal';

const ProductItem = ({ project }) => {
  const [showDonateModal, setShowDonateModal] = useState(false);

  const handleDonate = () => {
    setShowDonateModal(true);
  }

  const handleEdit = () => {
    console.log('Edit clicked for project:', project.name);
    // Add your edit logic here
  };

  const handleCloseDonateModal = () => {
    setShowDonateModal(false);
  };

  return (
    <Card key={project.id} className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          {/* Project Name with Ellipsis */}
          <div className="flex-grow-1 overflow-hidden">
            <Card.Title className="text-truncate">{project.name}</Card.Title>
          </div>

          {/* Total and Collected Amounts */}
          <div className="text-end">
            <span>Needed: ${project.requestedAmount}</span> 
            <span>{' | '}</span>
            <span>Collected: ${project.collectedAmount}</span>
          </div>

          {/* Donate and Edit Buttons */}
          <div className="ms-3">
            <Button variant="primary" className="me-2" onClick={handleDonate}>
              Donate
            </Button>
            <Button variant="secondary" onClick={handleEdit}>
              Edit
            </Button>
          </div>
        </div>
      </Card.Body>
      {/* Donation Modal */}
      <DonationModal
        project={project}
        show={showDonateModal}
        handleClose={handleCloseDonateModal}
      />
    </Card>
  );
};

export default ProductItem;
