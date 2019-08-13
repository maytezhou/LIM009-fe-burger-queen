import React from "react";
import { Link } from "react-router-dom";

const Header = ({ logo }) => (
  <header>
    <Link to="/">
      {/* <img
        src="https://i.postimg.cc/dVpV87CJ/home.png"
        className="pb-1 pt-4"
      ></img> */}
      <img
        data-testid="imgLogo"
        className="center pb-2 pt-1 img-logo"
        src={logo}
        alt="logo"
      ></img>
    </Link>
  </header>
);
export default Header;
