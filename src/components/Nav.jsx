import React from 'react';

function Nav({ currentPage, handlePageChange}) {
  return (
    <>
    <section id= "nav" className= 'container=fluid border mb-5 pt-3 pb-3'>
      <header className= "row">
          <h1 id= "navbar" className = "col">Web Developer: Jon Armajani</h1>
          <ul className='nav nav-bar col d-flex justitfy-content-end'>
            <li id="nav-bar" className= "nav-bar">
              <a href="#aboutme"
              onClick={() => handlePageChange('About Me')}
              className={currentPage === "About" ? 'nav-link active' : 'nav-link'}>
                About Me
              </a>
            </li>

            <li id="nav-bar" className= "nav-bar">
              <a href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === "Portfolio" ? 'nav-link active' : 'nav-link'}>
                Portfolio
              </a>
            </li>

            <li id="nav-bar" className= "nav-bar">
              <a href="#contactme"
              onClick={() => handlePageChange('Contact Me')}
              className={currentPage === "Contact me" ? 'nav-link active' : 'nav-link'}>
                Contact Me
              </a>
            </li>

            <li id="nav-bar" className= "nav-bar">
              <a href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === "Resume" ? 'nav-link active' : 'nav-link'}>
                Resume
              </a>
            </li>
            
          </ul>
      </header>
    </section>
    </>

  );
}

export default Nav;