import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>This is Navbar </h1>
        <ul>
          <li><Link to='/profile'>My Page</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/mining'>Mining Your Date</Link></li>
          <li><Link to='/dates'>Your Date Chain</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
