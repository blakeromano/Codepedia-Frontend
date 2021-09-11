import React, { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'

interface NavbarProps {
  
}
 
const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return (
    <>
      <nav className='navbar'>
        <div className='logo-div'>
          <Link to="/"><img src="CodepediaLogo.png" alt="Codepedia Logo" /></Link>
        </div>
        <div className='nav-items'>
          <Link to="/all">
            <h2>All Posts</h2>
          </Link>
          <Link to="/new">
            <h2>Write a New Post</h2>
          </Link>
        </div>
      </nav>
    </>
  );
}
 
export default Navbar;