import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // New import

const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img
            src={assets.logo}
            height="30"
            className="d-inline-block align-top"
            alt="Swift Trust MFB Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="mx-2 lead" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2 lead" onClick={() => setExpanded(false)}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" className="mx-2 lead" onClick={() => setExpanded(false)}>Services</Nav.Link>
            <Nav.Link as={Link} to="/#contact" className="mx-2 lead" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/internet-banking" target="_blank" className="mx-2 lead" onClick={() => setExpanded(false)}>Internet Banking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;