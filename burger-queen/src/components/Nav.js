import React from "react";

const Nav = ({ logo }) => (
  <header>
    <img data-testid="imgLogo" className="center pb-1 pt-1" src={logo} alt="logo"></img>
  </header>
);
export default Nav;
