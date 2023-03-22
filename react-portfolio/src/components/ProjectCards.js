import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import github from './assets/github30x30.png';
import magGlass from './assets/magGlass30x30.png';

function ProjectCards(props) {
  return (
    <div style={{  display: 'flex', justifyContent:'space-around', marginTop: 30, color:'#FFFFF0' }} >
    <Card style={{ color:'#FFFFF0', background: '#6B8F71', width: '35rem', border: '#AAD2BA'}}>
      <Card.Body>
        <Card.Title style = {{display:'flex', justifyContent:'center'}}>{props.name}</Card.Title>
        <Card.Text style = {{display:'flex', justifyContent:'center'}}>
        {props.languages}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style = {{color:'#FFFFF0', background: '#6B8F71'}}>{props.description}</ListGroup.Item>
        
      </ListGroup>
      <Card.Body style = {{background: '#AAD2BA', display:'flex', justifyContent:'center',  borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
        <Card.Link href={props.github}><img src={github}></img></Card.Link>
        <Card.Link style= {{color:'#564E58'}} href={props.example}><img src={magGlass}></img></Card.Link>
      </Card.Body>

    </Card>
    <img style={{borderRadius: 10}} src={props.image} alt='port'></img>
    </div>
  );
}



export default ProjectCards;