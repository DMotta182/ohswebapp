import React from 'react'
import Container from 'react-bootstrap/Container'
import ItemCard from '../components/component-item-card/item-card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const SameVendor = () => {
  return (
    <Container fluid className='p-0 mt-4'>
      <h3 className='text-left'>Más de ACME Guatemala</h3>
      <Row>
        <Col className='p-0' xs={6} sm='true'><ItemCard/></Col>
        <Col className='p-0' xs={6} sm='true'><ItemCard/></Col>
        <Col className='p-0' xs={6} sm='true'><ItemCard/></Col>
        <Col className='p-0' xs={6} sm='true'><ItemCard/></Col>
        <Col className='p-0' xs={6} sm='true'><ItemCard/></Col>
        <Col className='p-0' xs={6} sm='true'><ItemCard/></Col>
      </Row>
      <h4 className='text-right'>Ver más...</h4>
    </Container>
  )
}

export default SameVendor