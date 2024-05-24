import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

import CaloriesGif from '../../../assets/Nutrition/calories.gif';
import MacroNutri from '../../../assets/Nutrition/salad.gif';
import Vitamins from '../../../assets/Nutrition/vitt.gif';
import Report from '../../../assets/Nutrition/report.gif';

const cardData = [
  {
    id: 1,
    title: 'Calories',
    imageSrc: CaloriesGif,
    description: "Know exactly how many calories you're consuming with each meal.",
  },
  {
    id: 2,
    title: 'Macronutrients',
    imageSrc: MacroNutri,
    description: "Know exactly how many calories you're consuming with each meal.",
  },
  {
    id: 3,
    title: 'Vitamins & Minerals',
    imageSrc: Vitamins,
    description: "Know exactly how many calories you're consuming with each meal.",
  },
  {
    id: 4,
    title: 'Customized Tracking',
    imageSrc: Report,
    description: "Know exactly how many calories you're consuming with each meal.",
  },
];

export default function Cards() {
  return (
    <Row className='cardsMain'>
      {cardData.map((card) => (
        <Col lg={3} className='cardsCol' key={card.id}>
          <Card style={{ width: '18rem' }} className='cardsNutrition'>
            <Card.Img variant="top" src={card.imageSrc} style={{ width: '100px', height: '100px' }} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
