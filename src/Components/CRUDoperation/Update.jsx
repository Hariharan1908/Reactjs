import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();

  const initialState = {
    email: "",
    userName: "",
    mobileNo: "",
    age: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getById = async () => {
      await axios
        .get(`http://localhost:4000/user/${id}`)
        .then((res) => setFormData(res.data.data))
        .catch((err) => console.log(err));
    };
    getById();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoader(true);

    axios
      .put(`http://localhost:4000/user/${id}`, formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success(res.data.message);
          setFormData(initialState);
          navigate(`/`);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  const handleNavigate = () => {
    navigate(`/`);
  };

  return (
    <div className="w-[50%] mt-40 flex flex-col gap-5">
      <h1 className="text-center text-2xl font-semibold text-gray-600">
        Edit Form
      </h1>
      <form
        onSubmit={handleUpdate}
        onReset={handleReset}
        className="w-full flex flex-col gap-4 "
      >
        <input
          type="email"
          name="email"
          value={formData.email}
          required
          placeholder="Email ID"
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 bg-white text-black rounded"
        />
        <input
          type="text"
          name="userName"
          value={formData.userName}
          required
          placeholder="Username"
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 bg-white text-black rounded"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          required
          placeholder="Mobile number"
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 bg-white text-black rounded"
        />
        <input
          type="number"
          name="mobileNo"
          value={formData.mobileNo}
          required
          placeholder="Mobile number"
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 bg-white text-black rounded"
        />
        <div className="flex gap-2">
          <button
            type="reset"
            className="w-full px-4 py-1.5 bg-blue-500 rounded text-white "
          >
            Reset
          </button>
          <button
            type="submit"
            className="w-full px-4 py-1.5 bg-blue-500 rounded text-white "
          >
            {loader ? "updating..." : "Update"}
          </button>

          <button
            type="button"
            className="w-full px-4 py-1.5 bg-blue-500 rounded text-white "
            onClick={handleNavigate}
          >
            Go back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
