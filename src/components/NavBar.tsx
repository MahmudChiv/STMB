import React from "react";
import { assets } from "../assets/assets";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // New import

const NavBar: React.FC = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/"> {/* Use Link for brand */}
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
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link> {/* Use Link for Home */}
            <Nav.Link as={Link} to="/about" className="mx-2">About Us</Nav.Link> {/* New About Us Link */}
            <Nav.Link href="#services" className="mx-2">Services</Nav.Link>
            <Nav.Link href="#business" className="mx-2">Business</Nav.Link>
            <Nav.Link href="#promotions" className="mx-2">Promotions</Nav.Link>
            <Nav.Link href="#community" className="mx-2">Community</Nav.Link>
            <Nav.Link href="#news" className="mx-2">News</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/internet-banking" target="_blank" className="mx-2">Internet Banking</Nav.Link>
            <Button variant="primary" className="btn-primary">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;