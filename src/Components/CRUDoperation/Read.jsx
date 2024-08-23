import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Read = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getData = async () => {
    setLoader(true);
    await axios
      .get("http://localhost:4000/user")
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:4000/user/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success(res.data.message);
          setData((state) => {
            const filteredData = state.filter((val) => val._id !== id);
            return filteredData;
          });
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="w-full h-full p-20 flex flex-col gap-5">
      <div className="w-full flex justify-end items-center">
        <Link to={`/addform`}>
          <button className="px-4 py-1.5 bg-blue-500 rounded text-white ">
            Add Form
          </button>
        </Link>
      </div>
      {loader ? (
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-2xl font-semibold">Loading...</h1>
        </div>
      ) : (
        <>
          {data && data?.length >= 1 ? (
            <div className="w-full grid grid-cols-3 gap-10 h-full">
              {data?.map((val) => (
                <div className="bg-stone-100 rounded p-3" key={val._id}>
                  <div className="flex gap-2 justify-end items-center">
                    <Link to={`/editform/${val._id}`}>
                      <MdEdit className="text-blue-500 cursor-pointer h-5 w-5" />
                    </Link>
                    <MdDelete
                      className="text-red-500 cursor-pointer w-5 h-5"
                      onClick={() => handleDelete(val._id)}
                    />
                  </div>
                  <h1>Name: {val.userName}</h1>
                  <h1>Email ID: {val.email}</h1>
                  <h1>Mobile No: {val.mobileNo}</h1>
                </div>
              ))}
            </div>
          ) : (
            <h1 className="text-2xl font-semibold text-center">
              No data found
            </h1>
          )}
        </>
      )}
    </div>
  );
};

export default Read;
