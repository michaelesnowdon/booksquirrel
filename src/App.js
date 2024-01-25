import "./App.scss";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoggedOutHeader from "./components/LoggedOutHeader/LoggedOutHeader";
import LoggedInHeader from "./components/LoggedInHeader/LoggedInHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookSearch from "./components/BookSearch/BookSearch";
import Login from "./components/Login/Login";

function App() {
  const { isLoading, isAuthenticated } = useKindeAuth();

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated ? <LoggedInHeader /> : <LoggedOutHeader />}
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <BookSearch /> : <Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
