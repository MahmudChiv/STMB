import { Container, Row, Col } from "react-bootstrap";
import { assets } from "../assets/assets";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-dark text-white py-5">
      <Container>
        <Row className="justify-content-between">
          <Col lg={4} md={6} className="mb-4">
            <img
              src={assets.logo}
              alt="Swift Trust MFB Logo"
              height="40"
              className="mb-3"
            />
            <p className="text-muted">
              SwiftTrust Microfinance Bank Ltd is authorised and regulated by
              the Central Bank of Nigeria (CBN) to provide banking services.
              Deposits are insured by the Nigerian Deposit Insurance Corporation
              (NDIC).
            </p>
            <div className="social-icons mt-4">
              <a href="#" className="text-white me-3"><FaFacebookF size={20} /></a>
              <a href="#" className="text-white me-3"><FaTwitter size={20} /></a>
              <a href="#" className="text-white me-3"><FaInstagram size={20} /></a>
              <a href="#" className="text-white"><FaLinkedinIn size={20} /></a>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h5 className="text-primary mb-3">For Business</h5>
            <ul className="list-unstyled">
              <li><a href="#services" className="text-white text-decoration-none">Business Account</a></li>
              <li><a href="#services" className="text-white text-decoration-none">POS Terminals</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Loans</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Corporate Deposit</a></li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h5 className="text-primary mb-3">For Personal</h5>
            <ul className="list-unstyled">
              <li><a href="#services" className="text-white text-decoration-none">Instant Debit Card</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Personal Account</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Savings</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Fixed Deposit</a></li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h5 className="text-primary mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Press & Media</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h5 className="text-primary mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#news" className="text-white text-decoration-none">SwiftTrust Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Help Centre</a></li>
              <li><a href="#" className="text-white text-decoration-none">Learning Centre</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Security</a></li>
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