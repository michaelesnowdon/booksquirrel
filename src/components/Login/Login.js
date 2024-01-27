import "./Login.scss";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import logo from "../../assets/logos/booksquirrel-logo.png";

const Login = () => {
  const { register } = useKindeAuth();
  return (
    <>
      <div className="login">
        <div className="login__logo-container">
          <img src={logo} className="login__logo"></img>
        </div>
        <h1 className="login__slogan">Are You Nuts About Books? So Are We!</h1>
        <div className="login__button-container">
          <button className="login__button" onClick={register}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
