import React from 'react';


function Portfolio(props) {
    return (
      <div>
        {props.projects.map((projects) => (
          <h1 key={projects.id}>
            {`${props.name}`}
          </h1>
  
        ))}

      </div>
    );
}

export default Portfolio;