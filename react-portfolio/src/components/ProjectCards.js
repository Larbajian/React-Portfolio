import React from 'react';
import Projects from './Projects';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectCards(props) {
  return (
    <div style={{  display: 'flex', justifyContent:'space-around', marginTop: 30, color:'#FFFFF0' }} >
    <Card style={{ color:'#FFFFF0', background: '#6B8F71', width: '35rem', border: '#AAD2BA'}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.languages}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style = {{color:'#FFFFF0', background: '#6B8F71'}}>{props.github}</ListGroup.Item>
        <ListGroup.Item style = {{color:'#FFFFF0', background: '#6B8F71'}}>{props.github}</ListGroup.Item>
      </ListGroup>
      <Card.Body style = {{background: '#AAD2BA'}}>
        <Card.Link style= {{color:'#564E58'}} href="#">{props.github}</Card.Link>
        <Card.Link style= {{color:'#564E58'}} href="#">{props.example}</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}



export default ProjectCards;