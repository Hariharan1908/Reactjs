import React from "react";
import ButtonComp from "./ChildComp";
import { useOutletContext } from "react-router-dom";

const ParentComp2 = () => {

  const getuseContextValue = useOutletContext();

  
  const data = "Update";
  const color = "green";

  const handleClick = () => {
    console.log(`Parent comp 2 trigger the handleClick function`);
  };

  return (
    <div className="w-[200px] h-[200px] border border-green-500 grid place-content-center gap-2">
      <h1>Parent component 2 {getuseContextValue}</h1>
      {/* <ButtonComp data={data} /> */}
      {/* <ButtonComp data={{data, color}}/> */}

      <ButtonComp data={data} color={color} handleClick={handleClick} />
    </div>
  );
};

export default ParentComp2;


