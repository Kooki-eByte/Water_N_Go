import React from 'react';
import { Button, Card } from "react-bootstrap";
import { get } from "../helpers/fetchRequests";
import { plantCountDown } from "../helpers/plantCountDown";
import { pushNotify } from "../helpers/pushNotify";

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
  const { plantImageData, name, daysToWaterAgain, userId,id, updatedAt} = props

  const updateDaysLeftToWaterPlant = async (plantId: number) => {
    // let updatedDate = new Date()
    // let formattedDate = `${updatedDate.getFullYear()}-${updatedDate.getMonth() + 1}-${updatedDate.getDate()} ${updatedDate.getHours()}:${updatedDate.getMinutes()}:${updatedDate.getSeconds()}`

    let updatedPlant = {
      id: plantId,
      updatedDate: Date.now()
    }

    console.table(updatedPlant);

    await fetch("/api/plant/update", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPlant)
    })
      .then(res => res.json())
      .then(() => {
        console.log("Plant successfully updated!");

        // get updated array of all Plants of this users plants and pass that into props.onDelete
        getUpdatedPlantsList()
      })
      .catch(err => console.log({ errorMessage : err}))
  }

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
  
  let daysLeftToWater = plantCountDown(daysToWaterAgain, updatedAt)
  // if daysLeftToWater = 0
  if (daysLeftToWater === 0) {
    // push notify to water X plant
    pushNotify(Notification.permission, name)
  }
   
  return (
    <Card style={{ width: '15rem',objectFit: "cover", margin: '10px' }}>
      <Card.Img variant="top" src={plantImageData!} className="plant-card-image"/> 
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Days to water again : {daysLeftToWater}
        </Card.Text>
        <div className="plant-buttons">
          <Button className="waterBtn" variant="primary" onClick={() => updateDaysLeftToWaterPlant(parseInt(id))}>💧</Button>
          <Button className="deleteBtn" variant="warning" onClick={() => deletePlant(parseInt(id))}>🗑</Button>
        </div>
      </Card.Body>
    </Card>
  )
}