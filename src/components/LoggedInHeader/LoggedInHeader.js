import "./LoggedInHeader.scss";
import logo from "../../assets/logos/booksquirrel-logo.png";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Link } from "react-router-dom";

const LoggedInHeader = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const { logout } = useKindeAuth();

  return (
    <>
      <header className="header-in">
        <div className="header-in__container">
          <Link to="/">
            <div className="header-in__logo-container">
              <img src={logo} className="header-out__logo"></img>
            </div>
          </Link>
          <div
            className="header-in__menu-container--dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="header-in__button">Menu</button>
            {isDropdownVisible && <DropdownMenu />}
          </div>
          <div className="header-in__button-container--tablet">
            <Link to="/">
              <div className="header-in__buttons">
                <button className="header-in__button">Search</button>
              </div>
            </Link>
            <Link to="/reading-list">
              <div className="header-in__buttons">
                <button className="header-in__button">Reading List</button>
              </div>
            </Link>
            <div className="header-in__buttons">
              <button className="header-in__button">Read List</button>
            </div>
            <div className="header-in__buttons">
              <button className="header-in__button">About</button>
            </div>
            <div className="header-in__buttons">
              <button className="header-in__button" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LoggedInHeader;
