import React from 'react';

const Projects = [
    {
        name: 'WalkPerson',
        image: '',
        languages: 'HTML, CSS, JavaScript, Google Maps API, Spotify API',
        github: 'https://github.com/mhengerer/WalkPerson',
        example: 'https://mhengerer.github.io/WalkPerson/',
        description: 'WalkPerson allows the user to map their route and download a playlist based on their preferences. This playlist will match the time it takes the user to get from point A to point B.',
        id: 1

    },

    {
        name: 'Note Taker',
        image: './src/assets/notetaker1000.png',
        languages: 'HTML, CSS, JavaScript, Express.js, Node.js',
        github: 'https://github.com/Larbajian/notetaker00',
        description: 'Note Taker is a clean way to take personal notes, save them and delete them once they are no longer relevant.',
        example: 'https://notetaker00.herokuapp.com/',
        id: 2

    },
    {
        name: 'NoSQL - Thoughts Social Network',
        image: '',
        languages: 'Express.js, Node.js, MongoDB, Mongoose',
        github: 'https://github.com/Larbajian/Social-Network-API',
        example: '',
        description:'This backend project exhibits GET, POST, UPDATE and DELETE capabilities for thoughts and their associated comments.',
        id:3

    },
    {
        name: 'E-Commerce',
        image: '',
        languages: 'Express.js, MySQL',
        github: 'https://github.com/Larbajian/E-Commerce-backend-',
        example: '',
        description:'This backend project allows users to find products within a database based on category, product and associated tags using insomnia.',
        id:4

    },
    {
        name: 'Day Planner',
        image: '',
        languages: 'HTML, CSS, JavaScript, JQuery',
        github: 'https://github.com/Larbajian/Day-Planner',
        example: 'https://larbajian.github.io/Day-Planner/',
        description:'This hourly planner allows users to explicitly map out their day. Items can be saved and edited. It also highlights the current hour.',
        id:5

    },
    {
        name: 'Tech Blog',
        image: '',
        languages: 'RESTful API, MVC, Express.hbs',
        github: 'https://github.com/Larbajian/Tech-Blog',
        example: '',
        description:'This application allows users to blog about all their techy interests. Each session is saved after the user logs in or creates a new account. They are able to write their own blogs and save them under their accounts. (front-end coming soon)',
        id:6

    },
    {
        name: 'Password Generator',
        image: '',
        languages: 'JavaScript',
        github: 'https://github.com/Larbajian/Password-Generator',
        example: 'https://larbajian.github.io/Password-Generator/',
        description:'This site creates a random password for you based on parameters that you choose.',
        id:6

    },

];

export default Projects;