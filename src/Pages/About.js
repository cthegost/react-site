import React, { Component } from "react";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import sova from "../assets/sova.jpg";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src={sova} />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit est nisi, nihil inventore hic ullam tempore
                    repudiandae repellat. Quasi dolorum ea enim necessitatibus
                    vel cupiditate.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg" />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit est nisi, nihil inventore hic ullam tempore
                    repudiandae repellat. Quasi dolorum ea enim necessitatibus
                    vel cupiditate.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src={sova} />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit est nisi, nihil inventore hic ullam tempore
                    repudiandae repellat. Quasi dolorum ea enim necessitatibus
                    vel cupiditate.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src={sova} />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit est nisi, nihil inventore hic ullam tempore
                    repudiandae repellat. Quasi dolorum ea enim necessitatibus
                    vel cupiditate.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src={sova} />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit est nisi, nihil inventore hic ullam tempore
                    repudiandae repellat. Quasi dolorum ea enim necessitatibus
                    vel cupiditate.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
