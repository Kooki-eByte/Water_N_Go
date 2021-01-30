import React from 'react';
import { Col } from "react-bootstrap";

interface PlantCardProps {
  plantImage: string
  name: string
  isWatered: boolean
  daysToWaterAgain: number
  createdAt: string
  updatedAt: string
  userId: string
  id: string
}

export const PlantCard: React.FC<PlantCardProps> = ({plantImage, name, isWatered, daysToWaterAgain, userId,id}) => {
  return (
    <Col xs="12" sm="12" md="4" lg="2" xl="2">
      <ol>
        <li>{plantImage}</li>
        <li>{name}</li>
        <li>{`is watered : ${isWatered}`}</li>
        <li>{daysToWaterAgain}</li>
      </ol>
    </Col>
  )
}