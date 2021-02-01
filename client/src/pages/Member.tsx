import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PlantCard } from "../components/PlantCard";
import { Profile } from "../components/Profile";
import { get } from "../helpers/fetchRequests";
import "./style/styles.css";

type Plant = {
    plantImage: string
    name: string
    isWatered: boolean
    daysToWaterAgain: number
    createdAt: string
    updatedAt: string
    userId: string
    id: string
}

const showNotification = () => {
    const notification = new Notification("New Message from water 'N' go!", {
        body: "Hello there, you have a plant that needs watering!"
    })

    console.log(notification);
    
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
    const [allPlants, setAllPlants] = useState<Plant[]>([])
    const { user } = useAuth0()
     console.log(user.sub);
     
    async function getPlants(userId : string) {
        try {
            const data: Plant[] = await get(`/api/plant/${userId}`) 

            if (data) {
                let plantData = [...data]
                setAllPlants(plantData)
            }
        } catch (err) {
            console.log("err", err);
        }
    }

    useEffect(() => {
        getPlants(user.sub)
    }, [])
    
    useEffect(() => {
        console.log(allPlants);
      }, [allPlants]);
    return (
        <Container >
            <Row>
                <Col><h1 className="home-title">Water "N" Go</h1></Col>
            </Row>
            <Row>
                <Col>
                    <h2>This is the member page</h2>
                    <Profile />
                </Col>
            </Row>
            <h2>Your plants</h2>
            <Row className="plant-card-row">
                {allPlants.length >= 1 ? (
                    allPlants.map((plant : Plant) => {
                        return <PlantCard key={plant.id} {...plant} />
                    })
                ) : (
                    <h3>
                        No plants to display, Go ahead and add some plants to water "n" go.
                    </h3>
                )}
            </Row>
        </Container>
    )
}