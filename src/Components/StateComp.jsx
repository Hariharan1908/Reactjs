import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const StateComp = () => {
  const getuseContextValue = useOutletContext();

  const [state, setState] = useState();

  console.log("consoling...");

  const fetchFunc = () => {
    let data = [{ name: "vicky" }, { name: "akash" }];
    setState(data);
  };

  useEffect(() => {
    console.log("component did mount");
  }, []);

  return (
    <div>
      <p>{getuseContextValue}</p>
      <h1>State Component</h1>
      <button onClick={fetchFunc} style={{ width: "200px" }}>
        Click
      </button>
    </div>
  );
};

export default StateComp;

//   const objData = {
//     name: "vignesh",
//     age: 10,
//     email: { email1: "hello@gmail.com", email2: "vicky@gmail.com" },
//   };

//   let {
//     name: vicky,
//     age,
//     email: { email1, email2 },
//   } = objData;

//   const arryData = [
//     "hello",
//     20,
//     { email1: "hello@gmail.com", email2: "vicky@gmail.com" },
//   ];

//   const [index10, _, index30] = arryData;

//   const { email1, email2 } = index30;

//   console.log(email1);

// const StateFunc = (initialState) => {
//     let state = initialState;

//     const setState = (GETdATA) => {
//         console.log(GETdATA, "data")
//       state = GETdATA;
//     };

//     console.log(state, "state")

//     return [state, setState];
//   };

//   const [state, setState] = StateFunc("hello");
