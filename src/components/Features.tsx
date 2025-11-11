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
          <Col md={6} className="features-text-content">
            <h2 className="display-4 fw-bold mb-4">Amazing Features</h2>
            <p className="lead">
              Discover the amazing features that make our service stand out.
            </p>
            <p className="lead">Quick and easy Transfers</p>
            <p className="lead">Bill payment solutions</p>
            <p className="lead">Cheap Data and Airtime subscription</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;