import React, { Component } from 'react';
// import logo from './logo.svg';

class DatasetCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var cardStyles = {
      minHeight: "50px"
    }

    return (
      <div className="w3-card-4 w3-purple w3-margin"
        style={ cardStyles }>
        <div className="w3-container w3-center">
          <h3>
            { this.props.title }
          </h3>
        </div>
      </div>
    );
  }
}

export default DatasetCard;
