import React, { Component } from 'react';
// import logo from './logo.svg';
import DatasetCard from './DatasetCard.jsx';

class DatasetList extends Component {
  constructor(props) {
    super(props);
  }

  renderDatasetCard = (dataset) => {
    console.log(dataset);
  }

  render() {
    const cards = this.props.datasets.map((dataset) => {
      return (
        <DatasetCard key={ dataset }
                     title={ dataset } />
      );
    });

    return (
      <div>
        { cards }
      </div>
    );
  }
}

export default DatasetList;
