import React from "react";
import { Navbar, Routes, Footer } from "./components/index";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="theHeader" />
        <div className="theBody">
          <Routes />
        </div>
        <Footer className="theFooter" />
      </div>
    );
  }
}

export default App;
