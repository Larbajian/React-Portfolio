import React from "react";
import Projects from "./Projects";
import ProjectCards from "./ProjectCards";

const Portfolio = () => {

    return(
<div>
    {Projects.map((e) =>{
        return(
            <ProjectCards 
            name={e.name}
            image={e.image}
            languages={e.languages}
            github={e.github}
            example={e.example}
            />
        );
    })}

</div>
    );
}

export default Portfolio;