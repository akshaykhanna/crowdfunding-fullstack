// src/components/Layout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
