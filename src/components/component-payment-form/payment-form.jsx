import React from 'react'
import { Container, Form , Col , Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const PaymentForm = () => {
  const history = useHistory();
  const handlePay = () => {
    history.push('/item/success')
  }
  
  return (
    <Container className='my-4'>
      <h2 className='mb-4'>Formulario de Pago</h2>
      <Form>
        <Form.Group className='text-left' controlId="formCardNumber">
          <Form.Label>Numero de Tarjeta</Form.Label>
          <Form.Control placeholder="9999 9999 9999 9999" />
        </Form.Group>

        <Form.Group className='text-left' controlId="formCardName">
          <Form.Label>Nombre de dueño</Form.Label>
          <Form.Control placeholder="Diego Motta" />
        </Form.Group>
        
        <Form.Row>
          <Form.Group className='text-left' as={Col} controlId="formCardDate">
            <Form.Label>Fecha</Form.Label>
            <Form.Control placeholder="10/2021" />
          </Form.Group>

          <Form.Group className='text-left' as={Col} controlId="formCardCode">
            <Form.Label>CVV</Form.Label>
            <Form.Control placeholder="999" />
          </Form.Group>
        </Form.Row>

        <Form.Group className='text-left' controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="dmottabs@gmail.com" />
        </Form.Group>

        <Form.Group className='text-left' controlId="formAdress">
          <Form.Label>Dirección de envio</Form.Label>
          <Form.Control placeholder="24 calle 3-81 de la zona 1" />
        </Form.Group>

        <Button onClick={handlePay} variant="outline-primary" type="submit">
          Pagar
        </Button>
      </Form>
    </Container>
  )
}

export default PaymentForm