import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PlantCard } from "../components/PlantCard";
import { Profile } from "../components/Profile";
import { get } from "../helpers/fetchRequests";
import "./style/styles.css";

type Plant = {
  plantImageData: string
  name: string
  numberOfTimesWatered: number
  daysToWaterAgain: number
  createdAt: string
  updatedAt: string
  userId: string
  id: string
}

export const Member: React.FC = () => {
    const [allPlants, setAllPlants] = useState<Plant[]>([])
    const { user } = useAuth0()
     
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
                      return <PlantCard key={plant.id} {...plant} onDelete={(value : any) => setAllPlants(value)}/>
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