import "./Login.scss";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Login = () => {
  const { register } = useKindeAuth();
  return (
    <>
      <h1>PLACEHOLDER FOR LOGIN PAGE</h1>
      <button onClick={register}>Get Started</button>
    </>
  );
};

export default Login;
