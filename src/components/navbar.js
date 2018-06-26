import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auth } from "./index";

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <div className="navbarContent">
          <h1>This is Navbar </h1>
          <ul>
            <li>
              <Link to="/profile">My Page</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alldates">Mining Your Date</Link>
            </li>
            <li>
              <Link to="/dates">Your Date Chain</Link>
            </li>
          </ul>

          <Auth />
        </div>
      </header>
    );
  }
}

export default Navbar;
