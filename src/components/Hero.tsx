import { Container, Row, Col, Button } from "react-bootstrap";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="hero-section py-6" style={{ backgroundColor: "#f5f5f5" }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="slide-up-animation">
            <h1 className="display-4 fw-bold mb-3">Seamless & Secure Digital Banking</h1>
            <p className="lead mb-4">
              Join millions who trust us for fast, secure, and easy banking. Your financial freedom starts here.
            </p>
            <div className="d-grid gap-2 d-sm-flex my-3">
              <Button variant="primary" size="lg" className="me-sm-3">Get Started</Button>

            </div>
          </Col>
          <Col lg={6} md={12} className="text-center slide-up-animation">
            <img src={assets.HeroImage} alt="Digital Banking" className="hero-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;