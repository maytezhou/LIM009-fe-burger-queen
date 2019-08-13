import React from "react";
import { Link } from "react-router-dom";


const Header = ({ logo }) => (
  <header>
     <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
    <img data-testid="imgLogo" className="center pb-1 pt-1" src={logo} alt="logo"></img>
  </header>
);
export default Header;