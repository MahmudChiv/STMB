import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">Contact SwiftTrust</h2>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-lg border-0 p-4 contact-form-card">
              <Row>
                <Col md={6} className="mb-4 mb-md-0">
                  <h3 className="mb-4 text-primary">Get in Touch</h3>
                  <div className="d-flex align-items-start mb-3">
                    <FaMapMarkerAlt size={20} className="me-3 text-accent" />
                    <div>
                      <h5 className="fw-bold">Head Office</h5>
                      <p className="mb-0">No. 39 Gana Street, Maitama, Abuja, Nigeria</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <FaEnvelope size={20} className="me-3 text-accent" />
                    <div>
                      <h5 className="fw-bold">Email</h5>
                      <p className="mb-0">
                        <a href="mailto:lokrit.solomon@swifttrustmfb.com" className="text-decoration-none text-dark">
                          lokrit.solomon@swifttrustmfb.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <FaPhone size={20} className="me-3 text-accent" />
                    <div>
                      <h5 className="fw-bold">Phone</h5>
                      <p className="mb-0">
                        <a href="tel:+234 805 929 6640" className="text-decoration-none text-dark">
                          +234 805 929 6640
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <FaClock size={20} className="me-3 text-accent" />
                    <div>
                      <h5 className="fw-bold">Working Hours</h5>
                      <p className="mb-0">Mon – Fri: 8:00 AM – 5:00 PM</p>
                      <p className="mb-0">Sat: 9:00 AM – 1:00 PM</p>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <h3 className="mb-4 text-primary">Send Us a Message</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="contactFormFullName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your full name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contactFormEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contactFormMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Your message here..." />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-primary btn-lg mt-3">
                      Send Message
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;