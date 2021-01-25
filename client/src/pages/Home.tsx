import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style/styles.css";



export const Home: React.FC = () => {
    return (
        <Container >
            <Row>
                <Col xs={true} sm={true} md={true} lg={true} xl={true}>
                    <img className="home-top-image" src="https://images.squarespace-cdn.com/content/v1/5a206c4bdc2b4affa2b76f82/1568741259891-9OFLP0F4T91G7UWRLTUO/ke17ZwdGBToddI8pDm48kEF1__AY92MCJeQymbAUHhJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nQwvinDXPV4EYh2MRzm-RRTm402_R_vPTXSOZHbcJ5nm1N_lAfgkK06UWlOSXSPMw/image-asset.jpeg" alt="plants"/>
                    <div className="text-wrapper">
                        <h1 className="home-title">Water "N" Go</h1>
                    </div>
                </Col>
            </Row>
            <Row className="text-content">
                <Col>
                    <h2>This is the home page</h2>
                    <p>Please accept notification so that we can notify you when you need to water your plants!</p>
                </Col>
            </Row>
        </Container>
    )
}