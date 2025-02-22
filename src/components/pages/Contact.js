import React, { useState } from "react";
import { RiContactsBook3Line } from "react-icons/ri";

const Contact = () => {
  const [name,setName]=useState("");
  
  return (
    <>
      <div className="h-[calc(100vh-115px)] overflow-hidden mt-24">
        <div className="container h-4/5 w-1/3 mx-auto">
          <div className=" flex justify-center text-5xl">
            <RiContactsBook3Line className="mt-5" />
          </div>
          <div className="mt-4">
            <h1 className="text-4xl text-center uppercase">Contact Us</h1>
          </div>
          <form className="m-5 flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-100 rounded-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 bg-gray-100 rounded-full"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-full p-3 bg-gray-100 rounded-full"
            />
            <textarea
              placeholder="Message..."
              className="bg-gray-50 p-3"
            ></textarea>
            <button className="bg-yellow-600 p-2 text-xl text-white rounded-full hover:bg-yellow-500">
              SUBMIT
            </button>
           </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
