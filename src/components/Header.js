import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = props => {
  return (
    <nav className="navbar">
       <Link className="link-header"to="/">
         <h4>AUTOFI POSTS</h4>
       </Link> 
      
    </nav>
  );
};

export default Header;