import { Container, Row, Col } from "react-bootstrap";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={4} md={12} className="mb-4">
            <img
              src={assets.footerImg}
              alt="Swift Trust MFB Logo"
              height="40"
              className="mb-3"
            />
            <p className="text-white">
              SwiftTrust Microfinance Bank Ltd is authorised and regulated by
              the Central Bank of Nigeria (CBN) to provide banking services.
              Deposits are insured by the Nigerian Deposit Insurance Corporation
              (NDIC)
            </p>
          </Col>

          <Col lg={2} md={4} className="mb-4">
            <h5 className="text-primary mb-3">Products</h5>
            <ul className="list-unstyled">
              <li>
                <span className="text-white text-decoration-none disabled-link">
                  Savings
                </span>
              </li>
              <li>
                <span className="text-white text-decoration-none disabled-link">
                  Loans
                </span>
              </li>
              <li>
                <span className="text-white text-decoration-none disabled-link">
                  Cards
                </span>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={4} className="mb-4">
            <h5 className="text-primary mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/about-us"
                  className="text-white text-decoration-none"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={4} className="mb-4">
            <h5 className="text-primary mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-white text-decoration-none"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white text-decoration-none"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <p className="text-center text-white mb-0">
          © {currentYear} SwiftTrust Microfinance Bank Ltd. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;