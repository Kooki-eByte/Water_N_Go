import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style/styles.css";

const showNotification = () => {
    const notification = new Notification("New Message from water 'N' go!", {
        body: "Hello there, you have a plant that needs watering!"
    })
}

// default (not yes or no), granted (yes), denied(no)
console.log(Notification.permission);

if (Notification.permission === "granted") {
    showNotification()
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            showNotification()
        }
    })
}


export const Member: React.FC = () => {
    return (
        <Container >
            <Row>
                <Col><h1 className="home-title">Water "N" Go</h1></Col>
            </Row>
            <Row>
                <Col>
                    <h2>This is the member page</h2>
                    <p>Please accept notification so that we can notify you when you need to water your plants!</p>
                </Col>
            </Row>
        </Container>
    )
}