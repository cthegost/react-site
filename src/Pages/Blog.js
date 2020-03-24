import React, { Component } from "react";
import { Container, Row, Col, Media, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio harum nemo adipisci perferendis hic maxime
                  dignissimos sapiente quam non aspernatur quisquam voluptates
                  soluta eos corrupti, natus nobis sed quia. Provident?
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="mt-5 text-center">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/css</ListGroup.Item>
                <ListGroup.Item>js</ListGroup.Item>
                <ListGroup.Item>pithon</ListGroup.Item>
                <ListGroup.Item>java</ListGroup.Item>
                <ListGroup.Item>c++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Site widget</Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio harum nemo adipisci perferendis hic maxime
                    dignissimos sapiente quam non aspernatur quisquam voluptates
                    soluta eos corrupti, natus nobis sed quia. Provident?
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
