import { Container, Row, Col, Button } from "react-bootstrap";
import { assets } from "../assets/assets";
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center" style={{ padding: "30px" }}>
          <Col lg={6} md={12} className="text-center img-container">
            <img
              src={assets.HeroImage}
              alt="Swift Trust App"
              className="hero-image"
            />
          </Col>
          <Col lg={6} md={12} className="hero-text-content">
            <img
              src={assets.logo}
              alt="Swift Trust Logo"
              className="hero-logo"
            />
            <h1 className="display-4 fw-bold my-3">
              Your Money. Your Trust. <br /> Your Swift.
            </h1>
            <p className="lead mb-4">
              Join millions who trust us for fast, secure, and easy banking.
              Your financial freedom starts here. Send money, pay bills, and
              manage everything effortlessly.
            </p>
            <div className="d-grid gap-2 d-sm-flex my-3">
              <Button
                as="a"
                href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
                target="_blank"
                variant="primary"
                size="lg"
                className="me-sm-3 d-flex align-items-center justify-content-center"
              >
                <FaGooglePlay className="me-2" /> Google Play
              </Button>
              <Button
                as="a"
                href="https://apps.apple.com/us/app/swifttrust-mobile/id6753732841"
                target="_blank"
                variant="primary"
                size="lg"
                className="d-flex align-items-center justify-content-center"
              >
                <FaApple className="me-2" /> App Store
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
