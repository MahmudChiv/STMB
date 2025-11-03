import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { assets } from "../assets/assets";

const Promotion = () => {
  const promotions = [
    {
      image: assets.promo1,
      title: "SwiftTrust Debit Card",
      text: "Enjoy secure payments worldwide with our Verve debit card.",
    },
    {
      image: assets.pos,
      title: "SwiftPay POS Terminals",
      text: "Fast and reliable POS solutions for your business.",
    },
    {
      image: assets.quickLoans,
      title: "Quick Loans",
      text: "Get instant loans with flexible repayment plans.",
    },
    {
      image: assets.savings,
      title: "Joint Savings Account",
      text: "Save together, achieve goals faster with our joint savings plan.",
    },
    {
      image: assets.posMerchant,
      title: "Become a POS Merchant",
      text: "Expand your earnings by becoming a SwiftPay POS agent.",
    },
  ];

  return (
    <section id="promotions" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">Our Promotions</h2>
        <Row className="justify-content-center">
          {promotions.map((promo, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="mb-4">
              <Card className="h-100 shadow-sm border-0 promotion-card">
                <Card.Img variant="top" src={promo.image} alt={promo.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 fw-bold">{promo.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{promo.text}</Card.Text>
                  <Button variant="primary" className="mt-3 btn-primary">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Promotion;
