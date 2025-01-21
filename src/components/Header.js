import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <>
        <header className="header">
          <div className="logo">
            <img
              src={LOGO_URL}
              alt="logo"
            />
          </div>
          <nav className="navbar">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/grocery">Grocery</Link></li>
              <li>Services</li>
            </ul>
          </nav>
        </header>
      </>
    );
  };

  export default Header;