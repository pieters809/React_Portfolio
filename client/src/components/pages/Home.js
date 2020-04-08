import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

const Home = () => (
  <div>
    <Row>
      <Col className="text-center">
        <Jumbotron>
          <Container className="justify-content-md-center">
            <Row>
              <Col>
                <h1 class="text-center">Jose Pieters</h1>
                <img
                  src="https://www.w3schools.com/w3css/img_avatar3.png"
                  alt="image"
                ></img>
                <h4>Welcome to my portfolio</h4>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Col>
    </Row>
  </div>
);

export default Home;
