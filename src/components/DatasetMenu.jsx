import React, { Component } from 'react';

import DatasetList from './DatasetList.jsx'
import DatasetModal from './DatasetModal.jsx'

class DatasetMenu extends Component {
  constructor(props){
    super(props);

    this.state = {
      isSidebarOpen: true,
      isModalOpen: false,
      datasetList: [1,2,3],
      currentDataset: '',
      newDataset: '',
      warningMessage: '',
      showWarningMessage: false
    }
  }

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

  setDatasetList = () => {
    console.log("Retreive Dataset list from pouchDB");
    console.log("Set datasetList in state");
  }

  setCurrentDataset = (currentDataset) => {
    this.setState({ currentDataset });
  }

  onAddButtonClick = () => {
    console.log("Clicked Dataset Add")
  }

  setWarningMessage = (warningMessage) => {
    this.setState({ warningMessage });
  }

  showWarningMessage = () => {
    console.log("Set showWarning to true");
  }

  hideWarningMessage = () => {
    console.log("Set showWarning to false");
  }

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
                      closeModal={ this.closeDatasetModal } />

      </div>
    );
  }
}

export default DatasetMenu;
