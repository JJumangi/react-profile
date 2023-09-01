import React from 'react';
import { projects } from '../../projects';

export default function Portfolio(){
  return (
    <div>
      <h1 id="projects-head" className ="container fs-1 fw-bold">Portfolio</h1>
      <section id="projects" className ="container">
        <div className="examples">
          <p id="portP" className= "fs-5 mb-5">Here are some of the projects I have created! Click on the images to below to go to the working applications!</p>
          <div className = "row row-cols-2 text decoration-none">
            {projects.map((projects) => (
              <div style= {{paddingBottom: "90px"}}>
                <a 
                href={projects.link} key={projext.image} target='blank' className="col text decoration-none"
                >
                  <div id ="project-image" className = "col fadein">
                    <img alt="Projects" className="img-fluid" style = {{ width: "500px", height: "300px"}} src ={project.image}
                    />

                  </div>
                  <h1 id="projects-title" className = "col">
                {projects.image}
                  </h1>
                </a>
                <div className ="col">
                  <h2 className="col text-secondary fs-4">
                    {projects.subtitle}
                  </h2>
                  <p className= "col text-secondary">{projects.description}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>
    </div>
  )
}