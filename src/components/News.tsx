import { Container, Row, Col, Button } from "react-bootstrap";
import { assets } from "../assets/assets";

const News = () => {
  return (
    <div>
      <Container className="mt-5">
        <h1 className="text-center text-success fs-1">Latest News & Updates</h1>
        <Row>
          <Col lg={4} sm={12} className="p-3">
            <img
              src={assets.promo2}
              alt="SwiftTrust Launches New Service"
              width={350}
              height={200}
            />
            <h3>SwiftTrust Launches New Digital Service</h3>
            <p>
              Our latest service is designed to make your banking experience
              faster, easier, and more secure.
            </p>
            <Button variant="success">Read more</Button>
          </Col>
          <Col lg={4} sm={12} className="p-3">
            <img
              src={assets.promo2}
              alt="SwiftTrust Launches New Service"
              width={350}
              height={200}
            />
            <h3>SwiftTrust Launches New Digital Service</h3>
            <p>
              Our latest service is designed to make your banking experience
              faster, easier, and more secure.
            </p>
            <Button variant="success">Read more</Button>
          </Col>
          <Col lg={4} sm={12} className="p-3">
            <img
              src={assets.promo2}
              alt="SwiftTrust Launches New Service"
              width={350}
              height={200}
            />
            <h3>SwiftTrust Launches New Digital Service</h3>
            <p>
              Our latest service is designed to make your banking experience
              faster, easier, and more secure.
            </p>
            <Button variant="success">Read more</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default News;
