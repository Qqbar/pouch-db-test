import React, { Component } from 'react';

import DatasetList from './DatasetList.jsx'
import DatasetModal from './DatasetModal.jsx'

class DatasetMenu extends Component {
  constructor(props){
    super(props);

    this.state = {
      isSidebarOpen: true,
      isModalOpen: false,
      datasetList: [],
      currentDataset: '',
      warningMessage: '',
      showWarningMessage: false
    }
  }

// UI OPEN CLOSE
  closeSidebar = () => {
    this.setState({ isSidebarOpen : false });
  }

  openSidebar = () => {
    this.setState({ isSidebarOpen : true });
  }

  closeDatasetModal = () => {
    this.setState({ isModalOpen : false });
  }

  openDatasetModal = () => {
    this.setState({ isModalOpen : true });
  }

  initDatasetList = () => {
    console.log("Retreive Dataset list from pouchDB");
    console.log("Set datasetList in state");
  }
// END UI OPEN CLOSE

// WARNINGS
  setWarningMessage = (warningMessage) => {
    this.setState({ warningMessage });
  }

  showWarningMessage = () => {
    console.log("Set showWarning to true");
  }

  hideWarningMessage = () => {
    console.log("Set showWarning to false");
  }
// WARNINGS

// DATASET
  setCurrentDataset = (currentDataset) => {
    this.setState({ currentDataset });
  }

  addToDatasetList = (datasetTitle) => (event) => {
    if (!(this.state.datasetList.includes(datasetTitle))) {
      this.setState({ datasetList: this.state.datasetList.concat([datasetTitle]) });
    }
  }
// END DATASET

  render() {
    var sideBarStyles = {
      display: this.state.isSidebarOpen ? "block" : "none"
    }

    var containerStyles = {
      height: "50px"
    }

    return (
      <div>
        <div className="w3-sidebar w3-bar-block w3-dark-grey w3-animate-left"
             style={ sideBarStyles }
             id="mySidebar">
          <button className="w3-bar-item w3-button w3-large"
                  onClick={ this.closeSidebar }>Close &times;
          </button>

        <DatasetList datasets={ this.state.datasetList } />

        <div className="w3-display-container"
             style={ containerStyles } >
          <div className="w3-display-bottomright w3-margin-right">
            <button className="w3-button w3-black"
                    onClick={ this.openDatasetModal }>+</button>
          </div>
        </div>

        </div>

        <div>
          <button className="w3-button w3-white w3-xxlarge"
                  onClick={ this.openSidebar }>&#9776;
          </button>
        </div>

        <DatasetModal isOpen={ this.state.isModalOpen }
                      closeModal={ this.closeDatasetModal }
                      addDataset={ this.addToDatasetList }/>

      </div>
    );
  }
}

export default DatasetMenu;
