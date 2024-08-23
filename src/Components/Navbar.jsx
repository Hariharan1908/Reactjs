import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex justify-center items-center gap-5 bg-gray-300">
      <Link
        to={`/homepage/parentcomp2`}
        className="px-4 py-2 rounded bg-white text-black"
      >
        parentcomp2
      </Link>
      <Link to={`/homepage/statecomp`} className="px-4 py-2 rounded bg-white text-black">
        Statecomp
      </Link>
    </div>
  );
};

export default Navbar;
