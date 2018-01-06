import React, { Component } from 'react';

import './App.css';

import DatasetMenu from './DatasetMenu.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDataset: ''
    }
  }

  render() {
    return (
      <div className="App">
          <DatasetMenu currentDataset={ this.state.currentDataset }/>
      </div>
    );
  }
}

export default App;
