import { Container, Row, Col } from "react-bootstrap";
import { assets } from "../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={4} md={12} className="mb-4">
            <img
              src={assets.logo}
              alt="Swift Trust MFB Logo"
              height="40"
              className="mb-3"
            />
            <p className="text-muted">
              SwiftTrust Microfinance Bank Ltd is authorised and regulated by
              the Central Bank of Nigeria (CBN) to provide banking services.
            </p>
          </Col>

          <Col lg={2} md={4} className="mb-4">
            <h5 className="text-primary mb-3">Products</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Savings</a></li>
              <li><a href="#" className="text-white text-decoration-none">Loans</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cards</a></li>
            </ul>
          </Col>

          <Col lg={2} md={4} className="mb-4">
            <h5 className="text-primary mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>

          <Col lg={2} md={4} className="mb-4">
            <h5 className="text-primary mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Terms of Use</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <p className="text-center text-muted mb-0">
          © {currentYear} SwiftTrust Microfinance Bank Ltd. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;