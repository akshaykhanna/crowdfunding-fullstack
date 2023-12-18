import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import LoginModal from "./LoginModal";
import { logout } from '../redux/actions';

const Login = ({auth}) => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const dispatch = useDispatch();
  console.log(auth);

  const handleLoginButtonClick = () => {
    if (auth.isAuthenticated) {
      dispatch(logout());
      navigate('/');
    } else setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };
  return (
    <span>
      {auth.username && <span className="me-2">Welcome, {auth.username}</span>}
      <Button variant="outline-primary" onClick={handleLoginButtonClick}>
        {auth.isAuthenticated ? "Logout" : "Login"}
      </Button>
      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
    </span>
  );
};

export default Login;
