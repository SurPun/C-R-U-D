import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="Nav">
      <li>
        <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
      </li>

      <li>
        <Link to="/about" style={{textDecoration: 'none'}}>About</Link>
      </li>
      
      <li>
        <Link to="/contact" style={{textDecoration: 'none'}}>Contact</Link>
      </li>
    </div>
  );
};

export default Navbar;
