import { Container, Row, Col, Card } from "react-bootstrap";
import { assets } from "../assets/assets";

const communityInitiatives = [
  {
    image: assets.promo1, // Using promo1 for variety
    title: "Financial Literacy",
    text: "Empowering individuals and SMEs with knowledge to make smart financial decisions.",
  },
  {
    image: assets.promo2, // Using promo2 for variety
    title: "Women Empowerment",
    text: "Supporting women entrepreneurs through access to credit and mentorship.",
  },
  {
    image: assets.promo3, // Using promo3 for variety
    title: "Supporting Businesses",
    text: "Helping SMEs scale up with loans, POS terminals, and business advisory services.",
  },
  {
    image: assets.promo4, // Using promo4 for variety
    title: "Youth Empowerment",
    text: "Training and mentorship for young people to build careers in fintech and banking.",
  },
  {
    image: assets.promo5, // Using promo5 for variety
    title: "Built on Trust",
    text: "Your security and trust are our priority — insured by NDIC and licensed by CBN.",
  },
  {
    image: assets.promo1, // Reusing promo1 for the 6th initiative
    title: "Community Partnerships",
    text: "Partnering with NGOs and government to reach underserved communities.",
  },
];

const Community = () => {
  return (
    <section id="community" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">
          SwiftTrust In The Community
        </h2>
        <Row className="justify-content-center">
          {communityInitiatives.map((initiative, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="mb-4">
              <Card className="h-100 shadow-sm border-0 community-card">
                <Card.Img variant="top" src={initiative.image} alt={initiative.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 fw-bold">{initiative.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{initiative.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Community;