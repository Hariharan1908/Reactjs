import React, { useRef } from "react";
import { ContextFunction } from "../Auth/ContextComp";

const UncontrolledComponent = () => {
  const emailRef = useRef(null);
  const userNameRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      emailRef.current.value,
      userNameRef.current.value,
      phoneNumberRef.current.value
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
      <input
        type="email"
        required
        placeholder="Email ID"
        ref={emailRef}
        className="p-2 border border-gray-200 bg-white text-black rounded"
      />
      <input
        type="text"
        required
        placeholder="Username"
        ref={userNameRef}
        className="p-2 border border-gray-200 bg-white text-black rounded"
      />
      <input
        type="number"
        required
        placeholder="Phone number"
        ref={phoneNumberRef}
        className="p-2 border border-gray-200 bg-white text-black rounded"
      />
      <button
        type="submit"
        className="px-4 py-1.5 bg-blue-500 rounded text-white "
      >
        Submit
      </button>
    </form>
  );
};

export default UncontrolledComponent;
