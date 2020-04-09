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
                  alt="image " height="250" width="250"></img>
                <h5>
                  Coming from a family that basically breathes technology, my
                  journey in the field started at 6 years old (at least that's
                  the earliest I remember).Over the years, I would spend my
                  summers on camps where I deveoped skills in hardware/software.
                </h5>

                <h5>
                  First time I ever coded was in high school using a version of
                  C called RobotC. During my college years I learned the basics
                  of programming languages such as Java, Python, DataBase
                  Management. I Graduated from Union County College with an
                  Associates Degree in Computer Science. Later after College, I
                  joined the Rutgers Coding Bootcamp where I gained many new
                  skills in web developement. This skills include HTML, CSS ,
                  JavaScript, M.E.R.N.,Git and many more skills which made me a
                  full stack developer.
                </h5>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Col>
    </Row>
  </div>
);

export default Home;
