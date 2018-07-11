import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {

    return (
      <header className="navbar">
        <div className="navbarContent">
          <Link to="/" className="navbarItem logo">
            D2D
          </Link>

          <div className="signInDiv">
            <p className="navbarItem signInNavItem">Have an account?</p>

            <Link to='auth/login' className="navbarItem signInNavItem">
              Sign in
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
