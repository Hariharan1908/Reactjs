import React, { createContext, useContext, useState } from "react";

export const ContextFunction = createContext();

export const UseContextFunction = () => {
  const context = useContext(ContextFunction);
  if (!context)
    throw new Error(
      "useContext value is only available inside the context comp"
    );
  return useContext(ContextFunction);
};

const ContextComp = ({ children }) => {
  const initialState = {
    email: "",
    userName: "",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState(initialState);

  return (
    <ContextFunction.Provider value={{ formData, setFormData, initialState }}>
      {children}
    </ContextFunction.Provider>
  );
};

export default ContextComp;
