import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {HeaderComponent} from './components/HeaderComponent';
import {ContentComponent} from './components/ContentComponent';
import {FootComponent} from './components/FootComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <ContentComponent/>
        <FootComponent/>
      </div>
    );
  }
}

export default App;
