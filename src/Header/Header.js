import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <Link to="/">
              <button>Search</button>
            </Link>
            <Link to="/maps">
              <button>Maps</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>
        </header>
    );
  }
}

export default Header;
