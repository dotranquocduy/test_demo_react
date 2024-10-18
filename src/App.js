import "./App.scss";

import { Button } from "react-bootstrap";
import Header from "./components/Header/header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="body-cFontainer">
        <div className="sidebar-container"></div>

        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
