import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardDeck, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck className="m-4">
              <Card border="dark">
                  <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/drdNmm-fp1phDvZEZ1wRpswgvNprFXHv89JAbZmK6RmqDPtjMenaP9AeRe8IWjKKkhSBUXSxsxi2eRZA-QFxQHgTiPQRWsbdoorwkI2x1rCHotAE9JkXsavVMFNrZWP0" />
                  <Card.Body>
                      <Card.Title>Huelopers</Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis consequatur velit asperiores! Sint?</Card.Text>
                      <Button variant="primary">About team</Button>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/drdNmm-fp1phDvZEZ1wRpswgvNprFXHv89JAbZmK6RmqDPtjMenaP9AeRe8IWjKKkhSBUXSxsxi2eRZA-QFxQHgTiPQRWsbdoorwkI2x1rCHotAE9JkXsavVMFNrZWP0" />
                  <Card.Body>
                      <Card.Title>Huelopers</Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis consequatur velit asperiores! Sint?</Card.Text>
                      <Button variant="primary">About team</Button>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/drdNmm-fp1phDvZEZ1wRpswgvNprFXHv89JAbZmK6RmqDPtjMenaP9AeRe8IWjKKkhSBUXSxsxi2eRZA-QFxQHgTiPQRWsbdoorwkI2x1rCHotAE9JkXsavVMFNrZWP0" />
                  <Card.Body>
                      <Card.Title>Huelopers</Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis consequatur velit asperiores! Sint?</Card.Text>
                      <Button variant="primary">About team</Button>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/drdNmm-fp1phDvZEZ1wRpswgvNprFXHv89JAbZmK6RmqDPtjMenaP9AeRe8IWjKKkhSBUXSxsxi2eRZA-QFxQHgTiPQRWsbdoorwkI2x1rCHotAE9JkXsavVMFNrZWP0" />
                  <Card.Body>
                      <Card.Title>Huelopers</Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis consequatur velit asperiores! Sint?</Card.Text>
                      <Button variant="primary">About team</Button>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/drdNmm-fp1phDvZEZ1wRpswgvNprFXHv89JAbZmK6RmqDPtjMenaP9AeRe8IWjKKkhSBUXSxsxi2eRZA-QFxQHgTiPQRWsbdoorwkI2x1rCHotAE9JkXsavVMFNrZWP0" />
                  <Card.Body>
                      <Card.Title>Huelopers</Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis consequatur velit asperiores! Sint?</Card.Text>
                      <Button variant="primary">About team</Button>
                  </Card.Body>
              </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}
