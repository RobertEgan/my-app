import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header/Header';
import Map from './Map/Map';
import LeftBar from './LeftBar/LeftBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LeftBar/>
        <Map/>
      </div>
    );
  }
}

export default connect()(App);
