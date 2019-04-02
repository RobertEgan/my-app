import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header/Header';
import Maps from './Map/Map';
import LeftBar from './LeftBar/LeftBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const About = () => (
  <div >
    About
  </div>
)

const Search = () => (
  <div >
    Search
  </div>
)

library.add(faStroopwafel);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="page" >
            <Route exact path="/" component={Search} />
            <Route exact path="/maps" component={Maps} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

/*
          <LeftBar/>
          <Map/>
*/

export default connect()(App);
