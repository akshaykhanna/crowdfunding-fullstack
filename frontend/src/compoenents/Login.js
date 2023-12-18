import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import LoginModal from "./LoginModal";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../redux/actions';

const Login = () => {
  // Handle login logic here
  const [showLoginModal, setShowLoginModal] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const handleLoginButtonClick = () => {
    if (auth.isAuthenticated) {
      dispatch(logout());
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
