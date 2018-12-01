import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import RouterComponent from './components/Route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RouterComponent />
      </div>
    );
  }
}

export default App;
