import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./imagesource"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image sourceLink="http://globalnerdy.com/wordpress/wp-content/uploads/2007/11/dilbert-xp02.gif"/>
      </div>
    );
  }
}

export default App;
