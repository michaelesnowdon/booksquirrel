import "./App.scss";
import LoggedOutHeader from "./components/LoggedOutHeader/LoggedOutHeader";
import LoggedInHeader from "./components/LoggedInHeader/LoggedInHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoggedOutHeader />
        <LoggedInHeader />
      </BrowserRouter>
    </div>
  );
}

export default App;
