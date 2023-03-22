import React from 'react';
import resume from './assets/LA-data-engineer-BE-dev-resume-react.png';

export default function Resume() {
    return(
        <div style={{display:'flex', justifyContent:'center'}}> 
            
            <img src={resume}></img>
            
        </div>
    );
}