import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { PlantForm } from "../components/PlantForm";

export const AddPlant: React.FC = () => {
  const {user} = useAuth0()
  const [plantImage, setPlantImage] : any = useState("https://www.kindpng.com/picc/m/564-5640631_file-antu-insert-image-svg-insert-image-here.png")
  
  

  const [plantData, setPlantData] : any = useState({
    plantName: "",
    howLongToWaterAgain: 0,
    maxDaysToWaterAgain: 0,
    userId: user.sub
  })
  const [daysToWater, setDaysToWater] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)

  

  // Handles the image and turns the image into a DataUrl to be used in Local Storage

  const imageHandler = async (e : any) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    await reader.addEventListener("load", () => {
      setPlantImage(`${reader.result}`)
      
    })
  }

  // stores the plantName given to the plantData object state
  function handlePlantName(e : React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setPlantData({...plantData,plantName: e.target.value.trim(), userId:user.sub})
  }

  // Handles the max days and subtract it by how many days ago the user had watered their plants
  function handleDays(e : React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if(daysToWater === 0) {
      return alert("Please select how many days you want to wait to water your plant please.")
    }

    setPlantData({...plantData, maxDaysToWaterAgain: daysToWater, userId:user.sub})
    setIsDisabled(false)
  }

  // Sending plant data to the backend POST
  async function submitPlantData(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault()
    console.log(plantData)
    localStorage.setItem(`${plantData.plantName}`, `${plantImage}`)

    try {
      await fetch("/api/plant/add", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(plantData)
      })
        .then((response) => response.json())
        .then((data) => {console.log("message ", data)})
        .catch(err => {throw err})
    } catch(err) {
      console.log(err)
    }
    
  }

  // TODO: Have image be its own component so that we can deal with that data on its own and seperate it from the plant name and other data requested

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
                  <Form.Control type="username" placeholder="Bob Moss" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handlePlantName(event)}} />
                </Col>
              </Form.Group>

              <Form.Group controlId="formBasicSelectDaysToWater" >
                <Form.Label>How Many Days Until Your Plant Should Be Watered Again?</Form.Label>
                <Form.Control as="select" style={{width:"20%"}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDaysToWater(parseInt(event.target.value))}>
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
