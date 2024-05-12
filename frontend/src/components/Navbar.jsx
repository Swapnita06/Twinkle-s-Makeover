import React, { useState,useEffect} from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 998);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 998);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHamburgerClick = (e) => {
    e.preventDefault();
    setShowMediaIcons(!showMediaIcons);
  };
  
  return (
    <>
      <nav className="main-nav">
      <div className="logo">
  <Link to='/'>
    <h1>
      <span>T</span>winkle's 
      <span> M</span>akeover 
    </h1>
  </Link>
</div>


        {/* hamburget menu start  */}
        {isSmallScreen && (
          <div className="hamburger-menu">
            <a href="#" onClick={handleHamburgerClick}>
              <GiHamburgerMenu />
            </a>
          </div>
          )}
       
       
       
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul  className='usss'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            <li>
              <NavLink to="/testimonial">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
          
            
      
         
      </nav>
    </>
  );
};


export default Navbar
