import React, { Component } from 'react';
import PouchDB from 'pouchdb';
import { listAllDBs, getAllPouchDBs, createPouchDB } from '../utils/pouchUtils.js'

import DatasetList from './DatasetList.jsx'
import DatasetModal from './DatasetModal.jsx'

class DatasetMenu extends Component {
  constructor(props){
    super(props);

    this.state = {
      isSidebarOpen: true,
      isModalOpen: false,
      datasetList: [],
      warningMessage: '',
      showWarningMessage: false
    }
  }

  componentDidMount() {
    listAllDBs();
    this.initDBList();
  }

// DB
  initDBList = () => {
    // Get DB array from storage
    getAllPouchDBs()
    .then((dbs) => {
      this.setState({ datasetList: dbs})
    })
    .catch((err) => {
      console.log(err);
    });
  }

  addDB = (datasetTitle) => {
    if (!(this.state.datasetList.includes(datasetTitle))) {
      createPouchDB(datasetTitle)
      .then((response) => {
        console.log(response);
        this.initDBList();
      }).catch((err) => {
        console.log(err);
      });
    }
  }
// DB

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
                      addDB ={ this.addDB }/>

      </div>
    );
  }
}

export default DatasetMenu;
