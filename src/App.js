import "./App.scss";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoggedOutHeader from "./components/LoggedOutHeader/LoggedOutHeader";
import LoggedInHeader from "./components/LoggedInHeader/LoggedInHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookSearch from "./components/BookSearch/BookSearch";
import Login from "./components/Login/Login";
import ReadingList from "./pages/ReadingList/ReadingList";
import ReadList from "./pages/ReadList/Readlist";
import Discussion from "./pages/Discussion/Discussion";
import About from "./pages/About/About";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  const { isAuthenticated } = useKindeAuth();

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated ? <LoggedInHeader /> : <LoggedOutHeader />}
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <BookSearch /> : <Login />}
          ></Route>
          <Route
            path="/reading-list"
            element={isAuthenticated ? <ReadingList /> : <Login />}
          ></Route>
          <Route
            path="/read-list"
            element={isAuthenticated ? <ReadList /> : <Login />}
          ></Route>
          <Route
            path="/discussion/:bookId"
            element={isAuthenticated ? <Discussion /> : <Login />}
          ></Route>
          <Route
            path="/about"
            element={isAuthenticated ? <About /> : <Login />}
          ></Route>
          <Route
            path="*"
            element={isAuthenticated ? <PageNotFound /> : <Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
