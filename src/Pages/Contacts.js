import React, { Component } from 'react';
import { Container, Button,  Form } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px'}}>
                <h1 className="text-center"> Contact us </h1>
                <Form>
                    <Form.Group controlid="formBasicEmail">
                        <Form.Label>
                            Email adress
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text>
                            MNE POEBAT NA TVOY EMAIL
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlid="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="4" />
                    </Form.Group>

                    <Form.Group controlid="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
};
