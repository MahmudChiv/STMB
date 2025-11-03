import { Container, Row, Col } from 'react-bootstrap';
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <img src={assets.aboutUs} alt="About Us" className="img-fluid" />
          </Col>
          <Col lg={6} md={12}>
            <h2 className="display-4 fw-bold text-primary">About Swift Trust MFB</h2>
            <p className="lead text-secondary">
              Your trusted partner in financial growth and community development.
            </p>
            <p className="text-secondary">
              SwiftTrust MFB was established to close Nigeria’s financial access gap by creating a trusted platform for individuals, businesses, and underserved communities to access affordable and reliable banking services. Over the years, we have expanded our product portfolio, developed digital channels for faster and safer transactions, and built a strong governance structure that ensures compliance and customer trust.
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col>
            <h3 className="display-4 fw-bold text-primary">1M+</h3>
            <p className="lead text-secondary">Happy Customers</p>
          </Col>
          <Col>
            <h3 className="display-4 fw-bold text-primary">100+</h3>
            <p className="lead text-secondary">Branches Nationwide</p>
          </Col>
          <Col>
            <h3 className="display-4 fw-bold text-primary">$1B+</h3>
            <p className="lead text-secondary">In Transactions</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;