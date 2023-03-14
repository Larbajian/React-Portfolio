import React from 'react';
import { useState, useEffect } from 'react';
import Portfolio from './Portfolio';

function ProjectsContainer() {

const [projects, setProjects] = useState([]);


const projects = [
    {
        name: 'WalkPerson',
        image: '',
        languages: 'HTML, CSS, JavaScript, Google Maps API, Spotify API',
        github: 'https://github.com/mhengerer/WalkPerson',
        example: '',
        id: 1

    },

    {
        name: 'Note Taker',
        image: '',
        languages: 'HTML, CSS, JavaScript, Express.js, Node.js',
        github: 'https://github.com/Larbajian/notetaker00',
        example: '',
        id: 2

    },
    {
        name: 'NoSQL - Thoughts Social Network',
        image: '',
        languages: 'Express.js, Node.js MongoDB, Mongoose',
        github: 'https://github.com/Larbajian/Social-Network-API',
        example: '',
        id:3

    },
    {
        name: 'E-Commerce',
        image: '',
        languages: 'Express.js, MySQL',
        github: 'https://github.com/Larbajian/E-Commerce-backend-',
        example: '',
        id:4

    },
    {
        name: 'Day Planner',
        image: '',
        languages: 'HTML, CSS, JavaScript, JQuery',
        github: 'https://github.com/Larbajian/Day-Planner',
        example: '',
        id:5

    },
    {
        name: 'Tech Blog',
        image: '',
        languages: 'MVC, Express.hbs',
        github: 'https://github.com/Larbajian/Day-Planner',
        example: '',
        id:6

    },
    {
        name: 'Password Generator',
        image: '',
        languages: 'JavaScript',
        github: 'https://github.com/Larbajian/ReadMeGenerator',
        example: '',
        id:6

    },

];



export default function Projects() {
    return(
        <div>
            <Portfolio 
            name= {projects.name}
            image = {projects.image}
            languages = {projects.languages}
            github = {projects.github}
            example = {projects.example}
             />
        </div>
    );
}


}