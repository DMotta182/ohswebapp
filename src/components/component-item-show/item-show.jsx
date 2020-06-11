import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import Image from 'react-bootstrap/Image'
import ItemImage from '../../logo.svg'
import './style.item-show.css'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom" 
import { linkRec } from '../../linkmsg'

const ItemDisplay = () => {
  const history = useHistory();
  const handleBuy = () => {
    history.push('/item/login')
  }

  return (
    <Container fluid className='bg-light'>
      <Row>
        <Col xs={10} sm={4} className='mx-auto'>
          <Image src={ItemImage} rounded />
        </Col>
        <Col xs={10} sm={8} className='mx-auto my-2' >
          <h1 className='item-name mb-3'>Atomic Boom</h1>
          <h5 className='text-left px-md-5'>ACME Guatemala</h5>
          <p className='text-justify px-md-5'>
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Tenetur inventore velit 
            reiciendis nisi ratione magni molestias 
            explicabo deserunt totam. Soluta ut 
            recusandae nam praesentium eos, 
            amet sequi magni quidem fugit!</p>
          <h2 className='item-price text-left px-md-5'>
            <span className='currency-symbol'>
              Q
            </span>
            45
            <span className='amount-cents'>
              89
            </span>
          </h2>
          <Row className='my-4'>
            <Col xs={6}>
              <Button onClick={handleBuy} variant="outline-primary">Comprar</Button>
            </Col>
            <Col  xs={6}>
              <Button onClick={linkRec} variant="outline-primary">Recomendar</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDisplay;