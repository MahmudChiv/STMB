import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { assets } from "../assets/assets";

const newsArticles = [
  {
    image: assets.promo4, // Using promo4 for variety
    title: "SwiftTrust Launches New Digital Service",
    text: "Our latest service is designed to make your banking experience faster, easier, and more secure.",
    link: "#",
  },
  {
    image: assets.promo5, // Using promo5 for variety
    title: "Customer Reward Program Activated",
    text: "Loyal customers can now enjoy exclusive rewards when they bank with SwiftTrust.",
    link: "#",
  },
  {
    image: assets.promo3, // Using promo3 for variety
    title: "SwiftTrust Community Project Update",
    text: "Partnering with local organizations to support youth empowerment and financial inclusion.",
    link: "#",
  },
];

const News = () => {
  return (
    <section id="news" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">
          Latest News & Updates
        </h2>
        <Row className="justify-content-center">
          {newsArticles.map((article, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="mb-4">
              <Card className="h-100 shadow-sm border-0 news-card">
                <Card.Img variant="top" src={article.image} alt={article.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 fw-bold">{article.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{article.text}</Card.Text>
                  <Button variant="primary" href={article.link} className="mt-3 btn-primary">
                    Read More
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

export default News;