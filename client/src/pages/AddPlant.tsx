import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { PlantForm } from "../components/PlantForm";

export const AddPlant: React.FC = () => {
  const {user} = useAuth0()
  const [plantData, setPlantData] : any = useState({
    
    plantName: "",
    howLongToWaterAgain: null,
    userId: user.sub
  })
  const [isDisabled, setIsDisabled] = useState(true)

  // stores the plantName given to the plantData object state e.target.value.trim()
  const handlePlantName = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPlantData({ ...plantData, plantName: e.target.value.trim()})
  }

  const handleDaysLeftToWaterPlant = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPlantData({ ...plantData, howLongToWaterAgain: parseInt(e.target.value)})
  }

  // Sending plant data to the backend POST
  const submitPlantData = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    
    if (!localStorage.getItem("recent-image")) return;
    let finalizedPlantData = {
      plantImageData: localStorage.getItem("recent-image"),
      ...plantData
    }

    // console.log(finalizedPlantData);
    
    await fetch("/api/plant/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalizedPlantData)
    })
      .then((response) => {
        response.json()
        console.log("Hellllloooooooo");
        
        window.location.href="/member"}
      )
      .catch(err => console.log({ errorMessage: err})
      )
    
  }

  // useEffect used for checking if the submit button is ready to be on by checking if each Key has a value.
  useEffect(() => {
    // if (!plantData.plantImageData) return;
    if (!plantData.plantName) return;
    if (!plantData.howLongToWaterAgain) return;
    if (!plantData.userId) return;
    setIsDisabled(false)
}, [plantData]);

  return (
    <Container className="add-plant-container mt-4">
        <Row>
          <Col>
            <h2>This is the add plant page</h2>
          </Col>
        </Row>
        <hr/>
        <h2 style={{textAlign: "center"}}>Add Your Plant to Water "N" Go</h2>
        <Row className="add-plant-row">
          <Col >
            <PlantForm />
            <br/>
          </Col>
        </Row>
        <Row className="add-plant-row" style={{display:"flex", justifyContent:"center"}}>
            <Form className="mb-4">
              <Form.Group controlId="formBasicName">
                <Form.Label>What's Your Plants Name?</Form.Label>
                <Col xs="auto">
                  <Form.Control type="username" placeholder="Bob Moss" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handlePlantName(e)}} />
                </Col>
              </Form.Group>

              <Form.Group controlId="formBasicSelectDaysToWater" >
                <Form.Label>How Many Days Until Your Plant Should Be Watered Again?</Form.Label>
                <Form.Control as="select" style={{width:"20%"}} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleDaysLeftToWaterPlant(e)}}>
                  <option disabled>Choose:</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </Form.Control>
              </Form.Group>
              <Button variant="success" onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {submitPlantData(e)}} disabled={isDisabled}>
                Submit
              </Button>
            </Form>
        </Row>
    </Container>
  );
}
