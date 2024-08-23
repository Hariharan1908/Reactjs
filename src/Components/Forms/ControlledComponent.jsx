import React, { useContext, useState } from "react";
import { ContextFunction, UseContextFunction } from "../Auth/ContextComp";

const ControlledComponent = () => {
  const { formData, setFormData, initialState } = UseContextFunction();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData, "formData");
    setFormData(initialState);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
      <input
        type="email"
        name="email"
        value={formData.email}
        required
        placeholder="Email ID"
        onChange={handleChange}
        className="p-2 border border-gray-200 bg-white text-black rounded"
      />
      <input
        type="text"
        name="userName"
        value={formData.userName}
        required
        placeholder="Username"
        onChange={handleChange}
        className="p-2 border border-gray-200 bg-white text-black rounded"
      />
      <input
        type="number"
        name="phoneNumber"
        value={formData.phoneNumber}
        required
        placeholder="Phone number"
        onChange={handleChange}
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

export default ControlledComponent;

// import React from "react";
// import { ContextFunction } from "../Auth/ContextComp";

// const ControlledComponent = () => {
//   return (
//     <ContextFunction.Consumer>
//       {({ formData, setFormData, initialState }) => {
//         const handleSubmit = (e) => {
//           e.preventDefault();
//           console.log(formData, "formData");
//           setFormData(initialState);
//         };

//         const handleChange = (e) => {
//           const { value, name } = e.target;
//           setFormData((state) => ({ ...state, [name]: value }));
//         };

//         return (
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               required
//               placeholder="Email ID"
//               onChange={handleChange}
//               className="p-2 border border-gray-200 bg-white text-black rounded"
//             />
//             <input
//               type="text"
//               name="userName"
//               value={formData.userName}
//               required
//               placeholder="Username"
//               onChange={handleChange}
//               className="p-2 border border-gray-200 bg-white text-black rounded"
//             />
//             <input
//               type="number"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               required
//               placeholder="Phone number"
//               onChange={handleChange}
//               className="p-2 border border-gray-200 bg-white text-black rounded"
//             />
//             <button
//               type="submit"
//               className="px-4 py-1.5 bg-blue-500 rounded text-white"
//             >
//               Submit
//             </button>
//           </form>
//         );
//       }}
//     </ContextFunction.Consumer>
//   );
// };

// export default ControlledComponent;
