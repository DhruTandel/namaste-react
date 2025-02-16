import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { MdMenu } from "react-icons/md";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loggeddInUser } = useContext(UserContext);
  console.log(loggeddInUser);
  //subscribing to store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <header>
        <div className="w-full h-20 bg-blue-50 flex items-center justify-between fixed top-0 left-0 z-50">
          <div className=" m-6 w-[70px] md:w-[80px] lg:w-[80px]">
            <img src={LOGO_URL} alt="logo" />
          </div>
          <nav className="hidden  xl:flex  mr-10">
            <ul className="flex gap-12  ">
              <li className="text-xl cursor-pointer relative group">
              <Link to="/home/body">Home</Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-xl cursor-pointer relative group">
              <Link to="/home/about">About us</Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-xl cursor-pointer relative group">
              <Link to="/home/contact">Contact us</Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-xl cursor-pointer relative group">
              <Link to="/home/grocery">Grocery</Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-xl cursor-pointer relative group">
              <Link to="/home/cart">Cart({cartItems.length})</Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li>{loggeddInUser}</li>
            </ul>
          </nav>
            <span
              className="text-5xl mx-1.5 xl:hidden block cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MdMenu />
            </span>
          <div
            className={`absolute xl:hidden top-[5rem] w-full flex flex-col items-center overflow-hidden transition-all duration-1000
                ${
                  isOpen
                    ? "max-h-[500px] opacity-100"
                    : " max-h-0 opacity-0 pointer-events-none"
                }`}
          >
            <li className="list-none w-full p-4 text-center bg-slate-200 group relative">
            <Link to="/home/body">Home</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="list-none w-full p-4 text-center bg-slate-200 group relative">
            <Link to="/home/about">About us</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="list-none w-full p-4 text-center bg-slate-200 group relative">
            <Link to="/home/contact">Contact us</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="list-none w-full p-4 text-center bg-slate-200 group relative">
            <Link to="/home/grocery">Grocery</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="list-none w-full p-4 text-center bg-slate-200 group relative">
            <Link to="/home/cart">Cart({cartItems.length})</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
