import React from 'react'


const Nav = ({logo}) => (
  <header>
    <img data-testid='imgLogo' className="center" src={logo} alt="logo" ></img>
  </header>
)
export default Nav;