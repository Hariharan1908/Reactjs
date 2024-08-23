import React from "react";


//single data receiving way

// const ButtonComp = ({ data }) => {

//     console.log(data, "data");

//     return (
//       <button
//         className={`px-4 py-2 rounded-md  text-white bg-blue-500`}
//       >
//         {data}
//       </button>
//     );
//   };

//   export default ButtonComp;


// multiple data receiving way

//   const ButtonComp = ({data}) => {
//     //   const { data: buttonName, color } = data;

//     console.log(data, color);

//     return (
//       <button
//         className={`px-4 py-2 rounded-md  text-white`}
//         style={{ backgroundColor: color }}
//       >
//         {buttonName}
//       </button>
//     );
//   };

//   export default ButtonComp;


// multiple but not using destructing 

const ButtonComp = ({ data, color, handleClick }) => {
  //   const { data: buttonName, color } = data;

  console.log(data, color);

  return (
    <button
      className={`px-4 py-2 rounded-md  text-white`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {data}
    </button>
  );
};

export default ButtonComp;
