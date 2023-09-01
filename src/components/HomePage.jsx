import React, {useState} from 'react';
import AboutMe from './pages/AboutMe';
import Footer from './Footer';
import Nav from './Nav';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';



export default function HomePage() {
  const [currentPage, setCurrentPage] = useState('About Me');
  const renderPage = () =>{
    if (currentPage === "About Me") {
      return <AboutMe/>
    }
    if (currentPage === "Portfolio") {
      return <Portfolio/>
    }
    if (currentPage === "Resume") {
      return <Resume/>
    }
    if (currentPage === "Contact Me") {
      return <ContactMe/>
    }
    return <AboutMe/>
};
const handlePageChange = (page) => setCurrentPage(page);

return (
  <>
  <div>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
    {renderPage()}
    <Footer/>
  </div></>
);

};