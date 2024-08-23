import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Homepage = () => {

  const data = "Outlet context data"
  return (
    <div className="w-full h-screen flex flex-col ">
      <Navbar />

      <div className="w-full flex-1 bg-yellow-100 flex justify-center items-center">
        <Outlet  context={data}/>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
