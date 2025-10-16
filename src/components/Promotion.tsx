import { Card, Container, Row, Col } from "react-bootstrap";
import { assets } from "../assets/assets";

const Promotion = () => {
  return (
    <div>
      <Container className="mt-5">
        <h1 className="text-center text-success fs-1">Our Promotions</h1>
        <Row>
          <Col lg={4} sm={12} className="p-3">
            <Card>
              <Card.Img variant="top" src={assets.promo1} />
              <Card.Body>
                <Card.Title>SwiftTrust Debit Card</Card.Title>
                <Card.Text>
                  Enjoy secure payments worldwide with our Verve debit card.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12} className="p-3">
            <Card>
              <Card.Img variant="top" src={assets.promo2} />
              <Card.Body>
                <Card.Title>SwiftPay POS Terminals</Card.Title>
                <Card.Text>
                  Fast and reliable POS solutions for your business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12} className="p-3">
            <Card>
              <Card.Img variant="top" src={assets.promo3} />
              <Card.Body>
                <Card.Title>Quick Loans</Card.Title>
                <Card.Text>
                  Get instant loans with flexible repayment plans.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={12} className="p-3">
            <Card>
              <Card.Img variant="top" src={assets.promo4} />
              <Card.Body>
                <Card.Title>Joint Savings Account</Card.Title>
                <Card.Text>
                  Save together, achieve goals faster with our joint savings
                  plan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12} className="p-3">
            <Card>
              <Card.Img variant="top" src={assets.promo5} />
              <Card.Body>
                <Card.Title>Become a POS Merchant</Card.Title>
                <Card.Text>
                  Expand your earnings by becoming a SwiftPay POS agent.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12} className="p-3">
            <Card>
              <Card.Img variant="top" src={assets.promo5} />
              <Card.Body>
                <Card.Title>Business Banking</Card.Title>
                <Card.Text>
                  Solutions tailored to help your business grow.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Promotion;
