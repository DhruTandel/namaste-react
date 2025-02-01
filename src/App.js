import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Contact from "./components/pages/Contact";
import Restaurant from "./components/pages/Restaurant";
import Shimmer from "./components/pages/Shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/pages/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/pages/Cart";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import { toast,ToastContainer } from "react-toastify";
const Grocery = lazy(() => import("./components/pages/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    //api call
    const users=JSON.parse(localStorage.getItem("users"))|| [];

   
    const loggedInUser=users.find((val)=>{
      return val.email===localStorage.getItem("loggedInEmail")
    })

    if(loggedInUser){
      setUserName(loggedInUser.fullName)
    }
  }, []);
  return (
    <div className="app">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggeddInUser: userName, setUserName }}>
        <ToastContainer autoClose={2000} /> 
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin/" />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "body",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/app/body/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
