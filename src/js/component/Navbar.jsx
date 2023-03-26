import React from 'react'

const Navbar = () => {
  return (

    <div className="navbar">
        <div className="navbar-logo">SaveMe</div>
        <div className="navbar-links">
            <p><a href="#">How it Works</a></p>
            <p><a href="#">FAQ</a></p>
            <p><a href="#">Contact Us</a></p>
            <p><a href="#">Sign In</a></p>
          <div className="navbar-button">
               <button type="button">Sign Up </button>
          </div>
        </div>
    </div>
	);
};


export default Navbar;