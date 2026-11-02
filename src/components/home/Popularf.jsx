

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foods from "../../Data/food"
import FoodCard from '../FoodCard'

export default function Popularf() {

const Popularf = foods.slice(0,6)

  return (
    
        <Container className='contain'>
      <Row>
        <Col className='col1' md={3}><img src="homebanner.png" alt="" width="100%"/></Col>
         <Col md={9}>
         
        <section>
          <h6 className='ch6'> OUR SPECIALS</h6>
          <h2 className='ch2'>Popular dishes</h2>
          <p className='cp'>fresh ingrediant,authentic taste always</p>
        </section>
        

        <div className='foodcontainer'>
         {Popularf.map((food) =>(
          <FoodCard food={food} key={food.id}/>
         ))}
        </div>

         </Col>
      </Row>
    </Container>
    
  )
}


