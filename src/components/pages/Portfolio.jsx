import React from 'react';
import { projects } from '../../projects.js';

export default function Portfolio(){
  return (
    <div>
      <h1 id="projects-head" className ="container fs-1 fw-bold">Portfolio</h1>
      <div id="projects" className ="container">
        <div className="examples">
          <p id="portP" className= "fs-5 mb-5">Here are some of the projects I have created! Click on the images to below to go to the working applications!</p>
          <div className = "row row-cols-2 text decoration-none">
            {projects.map((project) => (
              <div style= {{paddingBottom: "90px"}}>
                <a 
                href={project.link} key={project.image} target='blank' className="col text decoration-none"
                >
                  <div id ="project-image" className = "col fadein">
                    <img alt="Projects" className="img-fluid" style = {{ width: "500px", height: "300px"}} src ={project.image}
                    />

                  </div>
                  <h1 id="projects-title" className = "col">
                {project.image}
                  </h1>
                </a>
                <div className ="col">
                  <h2 className="col text-secondary fs-4">
                    {project.subtitle}
                  </h2>
                  <p className= "col text-secondary">{project.description}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}