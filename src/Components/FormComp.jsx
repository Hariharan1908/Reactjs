import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextFunction } from "./Auth/ContextComp";

const FormComp = () => {
  const { objectId } = useParams();

  const { formData } = useContext(ContextFunction);

  console.log(formData);

  return <div>FormComp {objectId}</div>;
};

export default FormComp;
