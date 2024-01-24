import "./DropdownMenu.scss";
import { Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const DropdownMenu = () => {
  const { logout, user, getToken } = useKindeAuth();

  return (
    <div className="dropdownmenu">
      <div className="dropdownmenu__list">
        <Link to="" className="dropdownmenu__list-link">
          <p className="dropdownmenu__list-item">Search</p>
        </Link>
        <Link to="" className="dropdownmenu__list-link">
          <p li className="dropdownmenu__list-item">
            Reading List
          </p>
        </Link>
        <Link to="" className="dropdownmenu__list-link">
          <p li className="dropdownmenu__list-item">
            Read List
          </p>
        </Link>
        <Link to="" className="dropdownmenu__list-link">
          <p li className="dropdownmenu__list-item">
            About
          </p>
        </Link>
        <div className="dropdownmenu__list-button-container">
          <button className="dropdownmenu__list-item--button" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
