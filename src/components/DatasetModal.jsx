import React, { Component } from 'react';
// import logo from './logo.svg';

class DatasetModal extends Component {
  render() {

    var datasetModalStyles = {
      display: this.props.isOpen ? "block" : "none"
    }

    return (
      <div style={ datasetModalStyles }>
        <div className="w3-modal" style = { datasetModalStyles }>
          <div className="w3-modal-content w3-animate-left">
            <div className="w3-center"><br/>
              <span onClick={ this.props.closeModal }
                  className="w3-button w3-xlarge w3-hover-red w3-display-topright"
                  title="Close">&times;
              </span>
            </div>

              <div className="w3-section w3-padding">
                <label><b>Dataset Name</b></label>
                <input className="w3-input w3-border w3-margin-bottom"
                         type="text"
                         placeholder="What would you like to call this dataset?"
                         required>
                </input>
                <button className="w3-button w3-block w3-purple w3-section w3-padding"
                          type="submit">Add
                </button>
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default DatasetModal;
