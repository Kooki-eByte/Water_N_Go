import React from 'react';
import { Button, Card } from "react-bootstrap";

interface PlantCardProps {
  plantImageData: string
  name: string
  isWatered: boolean
  daysToWaterAgain: number
  createdAt: string
  updatedAt: string
  userId: string
  id: string
}

export const PlantCard: React.FC<PlantCardProps> = ({ plantImageData, name, isWatered, daysToWaterAgain, userId,id}) => {
  console.log(isWatered, userId, id)

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
          <Button className="deleteBtn" variant="warning" onClick={() => console.log(`Deleting plant ${id}`)
          }>🗑</Button>
        </div>
      </Card.Body>
    </Card>
  )
}