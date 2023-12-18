import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import LoginModal from "./LoginModal";
import { useSelector } from 'react-redux';

const Login = () => {
  // Handle login logic here
  const [showLoginModal, setShowLoginModal] = useState(false);
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };
  return (
    <span>
     {auth.username && <span className="me-2">Welcome, {auth.username}</span>}
      <Button variant="outline-primary" onClick={handleShowLoginModal}>
        {auth.isAuthenticated ? 'Logout' : 'Login'}
      </Button>
      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
    </span>
  );
};

export default Login;
