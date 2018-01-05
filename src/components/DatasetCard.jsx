import React, { Component } from 'react';
// import logo from './logo.svg';

class DatasetCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var cardStyles = {
    }

    return (
      <div className="w3-purple w3-hover-shadow w3-padding-64 w3-center w3-margin"
        style={ cardStyles }>
        { this.props.title }
      </div>
    );
  }
}

export default DatasetCard;
