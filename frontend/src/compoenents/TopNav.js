import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Login from "./Login";
import { useSelector } from "react-redux";

export default function TopNav() {
  const auth = useSelector((state) => state.auth);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Crowdfunding</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {auth.username && (
              <LinkContainer to="/my-projects">
                <Nav.Link>My Projects</Nav.Link>
              </LinkContainer>
            )}
            {auth.username && (
              <LinkContainer to="/create">
                <Nav.Link>Create</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Login auth={auth} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
