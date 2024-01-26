import "./LoggedOutHeader.scss";
import logo from "../../assets/logos/booksquirrel-logo.png";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Link } from "react-router-dom";

const LoggedOutHeader = () => {
  const { login, register } = useKindeAuth();
  return (
    <>
      <header className="header-out">
        <div className="header-out__container">
          <Link to="/">
            <div className="header-out__logo-container">
              <img src={logo} className="header-out__logo"></img>
            </div>
          </Link>
          <div className="header-out__button-container">
            <div className="header-out__buttons">
              <button className="header-out__button" onClick={login}>
                Sign In
              </button>
            </div>
            {/* <div className="header-out__buttons">
              <button className="header-out__button" onClick={register}>
                Sign Up
              </button>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default LoggedOutHeader;
