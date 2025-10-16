import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-success">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={assets.logo}
            alt="Swift Trust MFB Logo"
            width={150}
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Microloans</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Savings & Deposits
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                SwiftPay POS Solutions
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Digital Banking
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Management</Nav.Link>
            <Nav.Link href="#pricing">Board</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Internet Banking</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Download App
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
