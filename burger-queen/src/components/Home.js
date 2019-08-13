import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-5">
      
        <Link to="/cocinero" className="m-5">
          <img src="https://i.postimg.cc/0QfzjvbF/cocina.png" />
        </Link>
     
        <Link to="/mesero" className="m-5">
          <img src="https://i.postimg.cc/zvGVRQhB/mesa.png" />
        </Link>
      
    </div>
  );
};
export default Home;
