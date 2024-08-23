import { useEffect, useState } from "react";
import StateComp from "./StateComp";
import { Link } from "react-router-dom";


const ModComp = () => {

  const [state, setState] = useState([]);


  //component did mount syntax;

  useEffect(() => {
    console.log("component did mount")
  },[]);


  //component did update syntax;

  useEffect(() => {
    console.log("component did update")
  },[state]);


  //component will unmount syntax;

  useEffect(() => {
    return () => {
      console.log("component will unmount")
      
    }
  },[])


  return (
    <div>
        <h1>Hello world</h1>
        <button onClick={()=> setState([])}>Update</button>
        <Link to={"/statecomp"}>navigate</Link>
    </div>
  )
}

export default ModComp;


// export default function World(){
//     return (
//      <h1></h1>   
//     )
// }

// export const ModComp2 = () => {
//     return (
//       <div>ModComp</div>
//     )
//   }

//   export const ModComp3 = () => {
//     return (
//       <div>ModComp</div>
//     )
//   }
  




