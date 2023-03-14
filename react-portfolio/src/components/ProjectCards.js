import React from 'react';
import Projects from './Projects';


function ProjectCards(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.image}</p>
        <p>{props.languages}</p>
        <p>{props.github}</p>
        <p>{props.example}</p>

      </div>
    );
}

export default ProjectCards;