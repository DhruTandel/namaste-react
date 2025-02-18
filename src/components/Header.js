import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { MdMenu } from "react-icons/md";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loggeddInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation(); 

    useEffect(()=>{
      setIsOpen(false);
    },[location])
  return (
    <>
      <header>
        <div className="w-full h-20 bg-blue-50 flex items-center justify-between fixed top-0 left-0 z-50">
          <div className="m-6 md:m-14 w-[70px] md:w-[80px] lg:w-[80px]">
            <img src={LOGO_URL} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex mr-10">
            <ul className="flex gap-12">
              {[
                { name: "Home", path: "/home/body" },
                { name: "About us", path: "/home/about" },
                { name: "Contact us", path: "/home/contact" },
                { name: "Grocery", path: "/home/grocery" },
                { name: `Cart(${cartItems.length})`, path: "/home/cart" },
              ].map((item) => (
                <li key={item.path} className="text-xl cursor-pointer relative group">
                  <Link to={item.path}>
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300
                        ${location.pathname === item.path ? "w-full" : "w-0"} 
                        group-hover:w-full`}
                    ></span>
                  </Link>
                </li>
              ))}
              <li>{loggeddInUser}</li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <span
            className="text-5xl mx-1.5 xl:hidden block cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu />
          </span>

          {/* Mobile Menu */}
          <div
            className={`absolute xl:hidden top-[5rem] w-full flex flex-col items-center overflow-hidden transition-all duration-1000
                ${
                  isOpen
                    ? "max-h-[500px] opacity-100"
                    : " max-h-0 opacity-0 pointer-events-none"
                }`}
          >
            {[
              { name: "Home", path: "/home/body" },
              { name: "About us", path: "/home/about" },
              { name: "Contact us", path: "/home/contact" },
              { name: "Grocery", path: "/home/grocery" },
              { name: `Cart(${cartItems.length})`, path: "/home/cart" },
            ].map((item) => (
              <li key={item.path} className="list-none w-full p-4 text-center bg-slate-200 group relative">
                <Link to={item.path}>
                  {item.name}
                
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300
                      ${location.pathname === item.path ? "w-full" : "w-0"} 
                      group-hover:w-full`}
                  ></span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
