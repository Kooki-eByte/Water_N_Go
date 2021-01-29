import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LoginButton } from "../components/LoginButton";
import { LogoutButton } from "../components/LogoutButton";

export const Login: React.FC = () => {

    return (
        <Container>
            <Row className="text-content">
                <Col>
                    <h2>This is the login page</h2>
                    <p>🪴 Please login with your Google account to get started! 🪴</p>
                    <LoginButton />
                    <LogoutButton />
                </Col>
            </Row>
        </Container>
    )
}