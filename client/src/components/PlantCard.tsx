import React from 'react';
import { Button, Card } from "react-bootstrap";
import { get } from "../helpers/fetchRequests";
// interface PlantCardProps {
//   plantImageData: string
//   name: string
//   isWatered: boolean
//   daysToWaterAgain: number
//   createdAt: string
//   updatedAt: string
//   userId: string
//   id: string
// }

type Plant = {
  plantImageData: string
  name: string
  isWatered: boolean
  daysToWaterAgain: number
  createdAt: string
  updatedAt: string
  userId: string
  id: string
}

export const PlantCard: React.FC <any> = (props) => {
  const { plantImageData, name, isWatered, daysToWaterAgain, userId,id,} = props


  console.log(isWatered, userId, id)

  const deletePlant = async (plantId : number) => {
    let deletedPlantId = {
      id : plantId
    }

    await fetch("/api/plant/delete", {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deletedPlantId)
    })
      .then(res => res.json())
      .then(() => {
        console.log("Plant successfully deleted!");

        // get updated array of all Plants of this users plants and pass that into props.onDelete
        getUpdatedPlantsList()
      })
      .catch(err => console.log({ errorMessage : err}))
  }

  const getUpdatedPlantsList = async () => {
    try {
      const data: Plant[] = await get(`/api/plant/${userId}`) 

      if (data) {
          let newPlantData = [...data]
          props.onDelete(newPlantData)      
      }
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <Card style={{ width: '15rem',objectFit: "cover", margin: '10px' }}>
      <Card.Img variant="top" src={plantImageData!} className="plant-card-image"/> 
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Days to water again : {daysToWaterAgain}
        </Card.Text>
        <div className="plant-buttons">
          <Button className="waterBtn" variant="primary" onClick={() => console.log(`isWater will equal true AND reset the daysToWaterAgain`)}>💧</Button>
          <Button className="deleteBtn" variant="warning" onClick={() => deletePlant(parseInt(id))}>🗑</Button>
        </div>
      </Card.Body>
    </Card>
  )
}