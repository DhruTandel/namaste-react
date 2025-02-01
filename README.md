import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="h-screen bg-gray-200 w-full">
        <div className="flex justify-center items-center w-full h-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center gap-5 w-3/12 bg-white p-10 rounded-lg "
          >
            <h1 className="text-3xl mb-5">
              {isLoggedIn ? "Sign Up" : "Login Form"}
            </h1>

            <div className="flex w-full bg-gray-50 rounded-full">
              <button
                className={`w-1/2 py-3 rounded-full transition-all duration-500 ${
                  isLoggedIn
                    ? "bg-transparent text-black"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => setIsLoggedIn(false)}
              >
                Login
              </button>
              <button
                className={`w-1/2 py-3 rounded-full transition-all duration-500 ${
                  isLoggedIn
                    ? "bg-blue-500 text-white"
                    : "bg-transparent text-black"
                }`}
                onClick={() => setIsLoggedIn(true)}
              >
                Sign up
              </button>
            </div>

            {isLoggedIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-200 p-3 rounded-full w-full"
              />
            )}

            <input
              type="text"
              placeholder="Email Address"
              className="bg-gray-200 p-3 rounded-full w-full"
            />
            <div className="relative w-full">
              <input
                type={showPassword?"text":"password"}
                placeholder="Password"
                className="bg-gray-200 p-3 rounded-full w-full"
              />
              <button className="absolute right-4 top-2" onClick={()=>{
                
                setShowPassword(!showPassword)
              }}>
                {showPassword ? (
                  <FaEye className="text-3xl" />
                ) : (
                  <FaEyeSlash className="text-3xl" />
                )}
                
              </button>
            </div>
            {isLoggedIn && (
              <div className="relative w-full">
                <input
                  type={showConfirmPassword?"text":"password"}
                  placeholder="Confirm Password"
                  className="bg-gray-200 p-3 rounded-full w-full"
                />
                <button className="absolute right-4 top-2" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? (
                    <FaEye className="text-3xl" />
                  ) : (
                    <FaEyeSlash className="text-3xl" />
                  )}
                </button>
              </div>
            )}
            <button className="w-full bg-blue-700 text-white py-2 rounded-full">
              {isLoggedIn ? "Sign Up" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
