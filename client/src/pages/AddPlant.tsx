import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const AddPlant: React.FC = () => {
        return (
            <Container >
                <Row className="text-content">
                    <Col>
                        <h2>This is the add plant page</h2>
                        <p>Please accept notification so that we can notify you when you need to water your plants!</p>
                    </Col>
                </Row>
            </Container>
        );
}