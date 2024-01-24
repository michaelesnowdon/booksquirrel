import "./LoggedOutHeader.scss";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const LoggedOutHeader = () => {
  const { login, register } = useKindeAuth();
  return (
    <>
      <header className="header-out">
        <div className="header-out__container">
          <div className="header-out__logo-container">
            <h3>LOGO</h3>
          </div>
          <div className="header-out__button-container">
            <div className="header-out__buttons">
              <button className="header-out__button" onClick={login}>
                Sign In
              </button>
            </div>
            <div className="header-out__buttons">
              <button className="header-out__button" onClick={register}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LoggedOutHeader;
