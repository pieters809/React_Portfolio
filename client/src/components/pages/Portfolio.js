import React from "react";
import { Jumbotron, Container, Card, Button, Row, Col } from "react-bootstrap";

import "./pages.css";

const Portfolio = () => (
  <div>
    <Jumbotron>
      <h3 className="intro">Portfolio</h3>
      <Container>
        {/* Row of cards 1  */}
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="./" />
              <Card.Body>
                <Card.Title>Computer Quiz</Card.Title>
                <Card.Text>
                  Simple quiz app to put your computer hardware and software
                  knowledge to the test.
                </Card.Text>
                <a
                  href="https://github.com/pieters809/Code_Quiz"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Personal Dashboard</Card.Title>
                <Card.Text>
                  Allows you to quickly take a glance of your dy by uncluding
                  the basic gadgets as part of a dashboard to get your day
                  started.
                </Card.Text>
                <a
                  href="https://github.com/pieters809/personal-dashboard"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Budget Tracker</Card.Title>
                <Card.Text>
                  App that allows you to keep track of your expenses and income
                  using local storage from your computer.
                </Card.Text>
                <a
                  href="https://github.com/pieters809/Budget_Trackers"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Row of cards 2 */}
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a href="" class="btn btn-primary">
                  Github Link
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a href="" class="btn btn-primary">
                  Github Link
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a href="" class="btn btn-primary">
                  Github Link
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </div>
);

export default Portfolio;
