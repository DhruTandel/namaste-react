import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Contact from "./components/pages/Contact";
import Restaurant from "./components/pages/Restaurant";
import Shimmer from "./components/pages/Shimmer";
// import Grocery from "./components/pages/Grocery";

const Grocery=lazy(()=>import("./components/pages/Grocery"))

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path:"/restaurant/:id",
        element:<Restaurant/>
      }
    ],
    errorElement:<Error/>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
