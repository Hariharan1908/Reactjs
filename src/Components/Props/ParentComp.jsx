import React, { useState } from "react";
import ButtonComp from "./ChildComp";
import { Link } from "react-router-dom";

const ParentComp = () => {
  const data = "Submit";
  const color = "red";

  //   const [state, setState] = useState(data);

  const handleClick = () => {
    console.log(`parent comp 1 trigger the handleClick function`);
  };

  return (
    <div className="w-[200px] h-[200px] border border-red-500 grid place-content-center gap-2">
      <h1>Parent componnet 1</h1>

      {/* <ButtonComp data={data} /> */}

      {/* <ButtonComp data={{ data, color }} /> */}

      <ButtonComp data={data} color={color} handleClick={handleClick} />
      <Link to={`/addform`}>Add form</Link>
      <Link to={`/editform/${1234}`}>Edit form</Link>
    </div>
  );
};

export default ParentComp;
