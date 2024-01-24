import "./LoggedOutHeader.scss";

const LoggedOutHeader = () => {
  return (
    <>
      <header className="header-out">
        <div className="header-out__container">
          <div className="header-out__logo-container">
            <h3>LOGO</h3>
          </div>
          <div className="header-out__button-container">
            <div className="header-out__buttons">
              <button className="header-out__button">Sign In</button>
            </div>
            <div className="header-out__buttons">
              <button className="header-out__button">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LoggedOutHeader;
