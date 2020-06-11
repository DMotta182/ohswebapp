import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemImage from '../../logo.svg'
import Button from 'react-bootstrap/Button'
import './style.item-card.css'
import { useHistory } from "react-router-dom";


const ImageCard = () => {
  const history = useHistory();
  const handleVer = () => {
    history.push('/item/show')
  }
  return (
    <Card className='card-width bg-light'>
      <Card.Img variant="top" src={ItemImage} />
      <Card.Body>
        <Card.Title>Sonic Boom</Card.Title>
        <Card.Title className='item-card-price'>Q 45.89</Card.Title>
        <Button onClick={handleVer} variant="outline-primary">Ver</Button>
      </Card.Body>
    </Card>
  )
}

export default ImageCard
