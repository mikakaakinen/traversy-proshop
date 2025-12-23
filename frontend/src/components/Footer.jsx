import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-header-styling">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              Made with &#10084; in Riihimäki, Finland, According to the MERN
              Stack Course by Brad Traversy &copy; {currentYear}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
