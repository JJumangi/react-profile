import React from 'react';

export default function Footer() {

  return(
    <>
    <footer id="footer" className= "container-fluid d-flex justify-content-center fixed-bottom">
      <a href = "https://github.com/JJumangi"><img src= "./github-logo.png" alt = "Github Profile" className ="icon col"/></a>

      <a href = "https://stackoverflow.com/users/22115520/jon-jumangi"><img src= "https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" alt = "StackOverflow Profile" className ="icon col"/></a>

      <a href = "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"><img src= "./linkedin-logo-linkedin-icon-transparent-free-png.webp" alt = "LinkedIn Profile" className ="icon col"/></a>
      </footer>
    </>
    );
}