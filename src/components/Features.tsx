import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { assets } from "../assets/assets";
import "./Hero.css";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-5">
      <Container>
        <Row className="align-items-center features-row">
          <Col md={6}>
            <div className="features-image-container">
              <Image src={assets.featuresImage} fluid alt="Features" />
            </div>
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