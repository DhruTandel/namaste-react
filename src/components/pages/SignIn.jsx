import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const validEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!value || !emailRegex.test(value)) {
      setError((prev) => ({
        ...prev,
        email: "Enter valid email",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }
  };

  const validPasword = (value) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!value || !passwordRegex.test(value)) {
      setError((prev) => ({
        ...prev,
        password:
          "Password must be at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        password: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validEmail(email);
    validPasword(password);

    if (email && password) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((val) => {
        return val.email === email && val.password === password;
      });
      if (user) {
        localStorage.setItem("loggedInEmail", user.email);
        toast.success("Login Successful!", { position: "top-center" });
        navigate("/home/body");
      } else {
        setError((prev) => ({
          ...prev,
          password: "Incorrect Email or password",
        }));
      }
    }
  };

  return (
    <>
      <div className="h-screen  w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.postimg.cc/pdL2vfK9/bg.gif')",
            transform: "scaleX(-1)",
          }}
        ></div>
        <div className="flex justify-center items-center w-full h-full relative z-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-5 w-3/12 bg-white p-10 rounded-lg max-w-md sm:w-3/4 md:w-2/4 lg:w-1/3 "
          >
            <h1 className="text-3xl font-bold mb-5 text-[#8E2AE0] text-shadow-lg">
              SIGN IN
            </h1>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Email Address"
                className={` p-3 outline-none rounded-full shadow-[2px_6px_18px_rgba(66,57,238,0.3)] w-full ${
                  error.email ? "border-2 border-red-500" : ""
                }`}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validEmail(e.target.value);
                }}
              />
              {error.email && (
                <p className="text-red-500 text-sm ml-3">{error.email}</p>
              )}
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={` p-3 outline-none rounded-full w-full shadow-[2px_6px_18px_rgba(66,57,238,0.3)] ${
                  error.password ? "border-2 border-red-500" : ""
                }`}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validPasword(e.target.value);
                }}
              />
              <button
                className="absolute right-4 top-2"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                type="button"
              >
                {showPassword ? (
                  <FaEye className="text-3xl" />
                ) : (
                  <FaEyeSlash className="text-3xl" />
                )}
              </button>
              {error.password && (
                <p className="text-red-500 text-sm ml-3">{error.password}</p>
              )}
            </div>
            <p className="mr-3">
              Not have an account?
              <span
                className="text-blue-500 cursor-pointer font-semibold ml-1 hover:text-blue-400"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>
            <button class="w-full bg-gradient-to-r from-[#3B02ED] to-[#8E2AE0] 
               hover:from-[#8E2AE0] hover:to-[#3B02ED] 
               text-white py-2 rounded-full transition-colors duration-300 font-bold">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
