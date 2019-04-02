import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <Link to="/">
              <Button>Search</Button>
            </Link>
            <Link to="/maps">
              <Button>Maps</Button>
            </Link>
            <Link to="/about">
              <Button>About</Button>
            </Link>
        </header>
    );
  }
}

export default Header;
