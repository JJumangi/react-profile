import React from 'react';

export default function Resume (){



  return <section id ="resume" className="container">
    <h1 id="resume-head" className= "mb-4 fw-bold">Resume</h1>
    <p id="resume-link">View Resume</p> 
    {/* put resume link here */}

    <h1 id="profs=head" className="mt-4">Jons's Proficencies</h1>
    <ul id= "profs" className="mb-5">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>APIs</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>SQL</li>
      <li>Sequelize</li>
      <li>NoSQL</li>
      <li>PWAs</li>
      <li>MongoDB</li>
      <li>Mongoose</li>
      <li>React.js</li>
    </ul>
  </section>
}