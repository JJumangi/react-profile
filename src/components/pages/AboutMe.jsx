import React from 'react';

export default function AboutMe(){
  return(
    <>
    <section id="aboutMe" className= "container">
    <h1 id= "aboutHead" className = "mb-7 fw-bold fs-1">Web Developer</h1>
    
    <div className ="mb-4">
    <img alt = "Jon" className= "img-fluid" style={{width: "250px", height: "300px"}} src= "./unnamed.jpg" />

    <p id= "aboutmeP" className= "pt-5"> I am a recently certified full stack web developer from the University of Minnesota Coding Boot Camp.
    </p>
    </div>
    
  
    </section>
    </>
  )
}