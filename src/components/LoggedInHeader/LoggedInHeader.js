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

  const { logout, user, getToken } = useKindeAuth();

  return (
    <>
      <header className="header-in">
        <div className="header-in__container">
          <Link to="">
            <div className="header-in__logo-container">
              <img src={logo} className="header-out__logo"></img>
            </div>
          </Link>
          <div
            className="header-in__menu-container--dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <button className="header-in__button">Menu</button>
              {isDropdownVisible && <DropdownMenu />}
            </div>
          </div>
          <div className="header-in__button-container--tablet">
            <div className="header-in__buttons">
              <button className="header-out__button">Search</button>
            </div>
            <div className="header-in__buttons">
              <button className="header-in__button">Reading List</button>
            </div>
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
