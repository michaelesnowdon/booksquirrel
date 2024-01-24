import "./LoggedInHeader.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const LoggedInHeader = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <header className="header-in">
        <div className="header-in__container">
          <div className="header-in__logo-container">
            <h3>LOGO</h3>
          </div>
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
              <button className="header-in__button">Logout</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LoggedInHeader;
