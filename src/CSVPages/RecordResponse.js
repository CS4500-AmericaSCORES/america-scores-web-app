import React, { Component } from 'react';
import './CSVPages.css';

class CSVRecordResponse extends Component {
  render() {
    return (
      <div className='download-elements'>
        We Have Successfully Exported the CSV
        <br/>
        Would you like to wipe the data?
        <br/>
        <a href='/CsvPage'><button>Back</button></a>
        <a href='/CsvPage'><button>Wipe Data</button></a>
      </div>
    );
  }
}

export default CSVRecordResponse;