import React, { Component } from 'react';

class DatasetMenu extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      datasetList: [],
      currentDataset: '',
      newDataset: '',
      warningMessage: '',
      showWarningMessage: false
    }
  }

  closeSidebar = () => {
    this.setState({ isOpen : false });
  }

  openSidebar = () => {
    this.setState({ isOpen : true });
  }

  setDatasetList = () => {
    console.log("Retreive Dataset list from pouchDB");
    console.log("Set datasetList in state");
  }

  setCurrentDataset = (currentDataset) => {
    this.setState({ currentDataset });
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
      display: this.state.isOpen ? "block" : "none"
    }

    return (
      <div>
        <div className="w3-sidebar w3-bar-block w3-dark-grey w3-animate-left"
             style={ sideBarStyles }
             id="mySidebar">
          <button className="w3-bar-item w3-button w3-large"
                  onClick={ this.closeSidebar }>Close &times;
          </button>
        </div>

        <div>
          <button className="w3-button w3-white w3-xxlarge"
                  onClick={ this.openSidebar }>&#9776;
          </button>
        </div>
      </div>
    );
  }
}

export default DatasetMenu;
