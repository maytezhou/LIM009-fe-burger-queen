import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Link to="/cocinero">Cocinero</Link>
      </div>
      <div>
        <Link to="/mesero">Mesero</Link>
      </div>
    </>
  );
};
export default Home;
