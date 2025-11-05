import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { assets } from "../assets/assets";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={assets.featuresImage} fluid alt="Features" />
          </Col>
          <Col md={6}>
            <h2 className="display-4 fw-bold mb-4">Amazing Features</h2>
            <p className="lead">
              Discover the amazing features that make our service stand out.
            </p>
            <ul>
              <li className="lead">Quick and easy Transfers</li>
              <li className="lead">Bill payment solutions</li>
              <li className="lead">Cheap Data and Airtime subscription</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;