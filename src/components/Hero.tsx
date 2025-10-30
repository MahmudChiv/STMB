import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero-section text-center py-5">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} md={10} className="hero-content-animated">
            <h1 className="display-3 fw-bold mb-3">Your Financial Journey, Elevated.</h1>
            <p className="lead mb-4">
              Experience banking that goes beyond transactions. Swift Trust MFB empowers your dreams with innovative, secure, and accessible financial solutions.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Button variant="primary" size="lg" className="btn-primary me-sm-3">Open an Account</Button>
              <Button variant="outline-light" size="lg" className="btn-accent">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;