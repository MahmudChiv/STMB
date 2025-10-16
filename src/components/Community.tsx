import { Container, Row, Col } from "react-bootstrap";
import { assets } from "../assets/assets";

const Community = () => {
  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center text-success fs-1">
          SwiftTrust in the Community
        </h1>
        <Row>
          <Col lg={4} sm={12} className="p-3">
            <img
              src={assets.promo2}
              alt="Financial Literacy Training"
              width={350}
              height={200}
            />
            <h3>Financial Literacy</h3>
            <p>
              Empowering individuals and SMEs with knowledge to make smart
              financial decisions.
            </p>
          </Col>
          <Col lg={4} sm={12} className="p-3">
            <img
              src={assets.promo2}
              alt="Women Empowerment Programs"
              width={350}
              height={200}
            />
            <h3>Women Empowerment</h3>
            <p>
              Supporting women entrepreneurs through access to credit and
              mentorship.
            </p>
          </Col>
          <Col lg={4} sm={12} className="p-3">
            <img
              src={assets.promo2}
              alt="Supporting Local Businesses"
              width={350}
              height={200}
            />
            <h3>Supporting Businesses</h3>
            <p>
              Helping SMEs scale up with loans, POS terminals, and business
              advisory services.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={12} className="p-3">
            <img
              src={assets.promo2}
              alt="Youth Empowerment"
              width={350}
              height={200}
            />
            <h3>Youth Empowerment</h3>
            <p>
              Training and mentorship for young people to build careers in
              fintech and banking.
            </p>
          </Col>
          <Col lg={4} sm={12} className="p-3">
            <img
              src={assets.promo2}
              alt="Customer Trust"
              width={350}
              height={200}
            />
            <h3>Built on Trust</h3>
            <p>
              Your security and trust are our priority — insured by NDIC and
              licensed by CBN.
            </p>
          </Col>
          <Col lg={4} sm={12} className="p-3">
            <img
              src={assets.promo2}
              alt="Community Partnerships"
              width={350}
              height={200}
            />
            <h3>Community Partnerships</h3>
            <p>
              Partnering with NGOs and government to reach underserved
              communities.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Community;
