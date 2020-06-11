import React from 'react'
import CheckIcon from '../../images/check.svg'
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { linkRec } from '../../linkmsg'

const PaymentSuccess = () => {
  const history = useHistory();

  const handleVer = () => {
    history.push('show')
  }
  return (
    <Container className='my-5'>
      <Row>
        <Col className='mx-auto mb-4' xs={4}>
          <Image src={CheckIcon} rounded />
        </Col>
      </Row>
      <Row >
        <h3 className='mx-auto'>Gracias por tu compra</h3>
        <p>Tu compra está aportando a la educación en Guatemala</p>
        <Col xs={6}>
          <Button onClick={linkRec} className='mt-2' variant="outline-primary">Recomendar</Button>
        </Col>
        <Col  xs={6}>
          <Button onClick={handleVer} className='mt-2'variant="outline-primary">Ver más</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default PaymentSuccess