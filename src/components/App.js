import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';

import DatasetMenu from './DatasetMenu.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
          <DatasetMenu />
      </div>
    );
  }
}

export default App;
