import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const {loggeddInUser}=useContext(UserContext);
  console.log(loggeddInUser)
  //subscribing to store
  const cartItems=useSelector((store)=>store.cart.items);
  console.log(cartItems)
    return (
      <>
        <header className="header flex justify-between items-center">
          <div className="logo w-[150px]">
            <img
              src={LOGO_URL}
              alt="logo"
            />
          </div>
          <nav className="navbar">
            <ul className="nav-links flex list-none text-2xl gap-12 mr-">
              <li className=""><Link to="/app/body">Home</Link></li>
              <li><Link to="/app/about">About us</Link></li>
              <li><Link to="/app/contact">Contact us</Link></li>
              <li><Link to="/app/grocery">Grocery</Link></li>
              <li><Link to="/app/cart">Cart({cartItems.length})</Link></li>
              <li>{loggeddInUser}</li>
            </ul>
          </nav>
        </header>
      </>
    );
  };

  export default Header;