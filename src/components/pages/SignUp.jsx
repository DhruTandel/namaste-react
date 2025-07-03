import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const validFullName = (value) => {
    if (!value || value.split(" ").length < 2) {
      setError((prev) => ({
        ...prev,
        fullName: "Full Name is required",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        fullName: "",
      }));
    }
  };

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

  const validPassword = (value) => {
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

  const validConfirmPassword = (value) => {
    if (value !== password) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        confirmPassword: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validFullName(fullName);
    validEmail(email);
    validPassword(password);
    validConfirmPassword(confirmPassword);

    const nameParts = fullName.trim().split(" ");
    const first_name = nameParts[0];
    const last_name = nameParts.slice(1).join(" ");

    const newUser = {
      first_name,
      last_name,
      email,
      password,
      confirm_password: confirmPassword
    };

    try {
      const response = await fetch("http://localhost:8000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json()
      if (response.ok) {
        // toast.success("User registered succesfully");
        navigate("/signin");
      } else {
        toast.error(data.message || "Registration Failed");
      }
    } catch (error) {
      console.error("Error : ", error)
      toast.error("something went wrong!");
    }

    console.log(fullName);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };
  return (
    <>
      <div className="h-screen  w-full">
        <div
          className=" flex justify-center items-center w-full h-full bg-cover"
          style={{
            backgroundImage: "url('https://i.postimg.cc/pdL2vfK9/bg.gif')",
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-5 w-3/12  p-10 rounded-lg max-w-md sm:w-3/4 md:w-2/4 lg:w-1/3 "
          >
            <h1 className="text-3xl font-bold mb-5 text-[#8E2AE0] text-shadow-lg">
              SIGN UP
            </h1>

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Full Name"
                className={` p-3 outline-none rounded-full shadow-[2px_6px_18px_rgba(66,57,238,0.3)] w-full ${error.fullName ? "border-2 border-red-500" : ""
                  }`}
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  validFullName(e.target.value);
                }}
              />
              {error.fullName && (
                <p className="text-red-600 text-sm ml-2">{error.fullName}</p>
              )}
            </div>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Email Address"
                className={` p-3 outline-none  rounded-full shadow-[2px_6px_18px_rgba(66,57,238,0.3)] w-full ${error.email ? "border-2 border-red-500" : ""
                  }`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validEmail(e.target.value);
                }}
              />
              {error.email && (
                <p className="text-red-600 text-sm ml-2">{error.email}</p>
              )}
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className=" p-3 outline-none  rounded-full shadow-[2px_6px_18px_rgba(66,57,238,0.3)] w-full"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validPassword(e.target.value);
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
                <p className="text-red-600 text-sm ml-2">{error.password}</p>
              )}
            </div>
            <div className="relative w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={` p-3 outline-none  rounded-full shadow-[2px_6px_18px_rgba(66,57,238,0.3)] w-full ${error.confirmPassword ? "border-2 border-red-500" : ""
                  }`}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validConfirmPassword(e.target.value);
                }}
              />
              <button
                className="absolute right-4 top-2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                type="button"
              >
                {showConfirmPassword ? (
                  <FaEye className="text-3xl" />
                ) : (
                  <FaEyeSlash className="text-3xl" />
                )}
              </button>
              {error.confirmPassword && (
                <p className=" text-red-600 text-sm ml-2">
                  {error.confirmPassword}
                </p>
              )}
            </div>
            <p className="mr-3">
              Already have an account?
              <span
                className="text-blue-500 cursor-pointer font-semibold ml-1 hover:text-blue-400 "
                onClick={() => navigate("/signin")}
              >
                Sign In
              </span>
            </p>
            {/* <button className="w-full bg-[linear-gradient(-30deg,#3B02ED,#8E2AE0_55%)] text-white py-2 rounded-full">
              Sign Up
            </button> */}
            <button class="w-full bg-gradient-to-r from-[#3B02ED] to-[#8E2AE0] 
               hover:from-[#8E2AE0] hover:to-[#3B02ED] 
               text-white py-2 rounded-full transition-colors duration-300 font-bold">
              Sign Up
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
