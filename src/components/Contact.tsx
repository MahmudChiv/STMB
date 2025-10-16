import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container className="mt-5">
        <h1 className="text-center text-success fs-1">Contact SwiftTrust</h1>
        <Row>
          <Col>
            <div>
              <p>Head Office</p>
              <p>No. 39 Gana Street, Maitama, Abuja, Nigeria</p>
            </div>
            <div>
              <p>Email</p>
              <p>
                <a href="mailto:lokrit.solomon@swifttrustmfb.com">
                  lokrit.solomon@swifttrustmfb.com
                </a>
              </p>
            </div>
            <div>
              <p>Phone</p>
              <p>
                <a href="tel:+234 805 929 6640">+234 805 929 6640</a>
              </p>
            </div>
            <div>
              <p>Working Hours</p>
              <p>Mon – Fri: 8:00 AM – 5:00 PM</p>
              <p>Sat: 9:00 AM – 1:00 PM</p>
            </div>
          </Col>

          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="success">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
