import React, { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'

interface NavbarProps {
  
}
 
const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return (
    <>
      <nav>
        <div>
          <h1>Codepedia</h1>
        </div>
      </nav>
    </>
  );
}
 
export default Navbar;