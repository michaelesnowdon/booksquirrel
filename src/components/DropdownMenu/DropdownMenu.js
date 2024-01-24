import "./DropdownMenu.scss";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="dropdownmenu">
      <ul className="dropdownmenu__list">
        <Link to="" className="dropdownmenu__list-link">
          <li className="dropdownmenu__list-item">Search</li>
        </Link>
        <Link to="" className="dropdownmenu__list-link">
          <li li className="dropdownmenu__list-item">
            Reading List
          </li>
        </Link>
        <Link to="" className="dropdownmenu__list-link">
          <li li className="dropdownmenu__list-item">
            Read List
          </li>
        </Link>
        <Link to="" className="dropdownmenu__list-link">
          <li li className="dropdownmenu__list-item">
            About
          </li>
        </Link>
        <li className="dropdownmenu__list-item">
          <button className="dropdownmenu__list-item--button">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
