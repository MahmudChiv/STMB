import { Card, Carousel, Container, Row, Col } from "react-bootstrap";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Swift Trust MFB has been a game-changer for my business. Their loan process is quick and easy.",
    },
    {
      name: "Jane Smith",
      text: "The customer service at Swift Trust MFB is exceptional. They are always willing to help.",
    },
    {
      name: "Peter Jones",
      text: "I have been banking with Swift Trust MFB for years and I am very satisfied with their services.",
    },
    {
      name: "Alice Brown",
      text: "The digital banking platform is incredibly user-friendly and secure. I can manage my finances on the go.",
    },
    {
      name: "David Green",
      text: "Their investment plans have helped me grow my wealth significantly. Highly recommended!",
    },
  ];

  return (
    <section id="testimonials" className="py-5 bg-primary text-white">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">
          What Our Customers Say
        </h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Carousel indicators={false} controls={true} interval={5000}>
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <Card className="text-center shadow-lg border-0 testimonial-card">
                    <Card.Body className="p-5">
                      <Card.Text className="lead mb-4">"{testimonial.text}"</Card.Text>
                      <footer className="blockquote-footer text-dark">
                        <cite title="Source Title" className="text-primary fw-bold">{testimonial.name}</cite>
                      </footer>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;