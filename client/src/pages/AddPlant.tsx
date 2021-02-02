import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';

export const AddPlant: React.FC = () => {
  const {user} = useAuth0()
  const [plantData, setPlantData] : any = useState({
    plantImg:"https://i1.wp.com/www.flowersandcompany.net/wp-content/uploads/2014/06/insert-picture-here.jpg",
    plantName: "",
    howLongToWaterAgain: 0,
    maxDaysToWaterAgain: 0,
    userId: user.sub
  })
  const [daysToWater, setDaysToWater] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)

  const {plantImg} = plantData
  const imageHandler = (e : any) => {
    const reader = new FileReader()

    reader.onload = () => {
      if(reader.readyState === 2) {
        // console.log(reader.result)
        setPlantData({plantImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  function handlePlantName(e : React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setPlantData({...plantData,plantName: e.target.value, userId:user.sub})
  }

  function handleDays(e : React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if(daysToWater === 0) {
      return alert("Please select how many days you want to wait to water your plant please.")
    }

    let daysLeftToWater = daysToWater - parseInt(e.target.value)

    if (daysLeftToWater <= 0) {
      return alert("Cannot have days to water again less days than How long ago since plant had water.")
    }

    setPlantData({...plantData,howLongToWaterAgain: daysLeftToWater, maxDaysToWaterAgain: daysToWater, userId:user.sub})
    setIsDisabled(false)
  }

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
            <div className="img-holder">
              <Image src={plantImg} alt="plant" id="plant-image" className="plant-image" thumbnail/>
            </div>
            <input type="file" name="image-upload" id="input-plant-image" accept="image/*" onChange={(e) => imageHandler(e)}/>
            <div className="label">
              <label htmlFor="input-plant-image" className="image-upload">Choose a image</label>
            </div>
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
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicSelectDaysSinceWatered" >
                <Form.Label>How Many Days Ago Since You Last Watered Your Plant?</Form.Label>
                <Form.Control as="select" style={{width:"20%"}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleDays(event)}}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </Form.Control>
              </Form.Group>

              <Button variant="success" onClick={(e) => {console.log(plantData)}} disabled={isDisabled}>
                Submit
              </Button>
            </Form>
        </Row>
                
        
    </Container>
  );
}
