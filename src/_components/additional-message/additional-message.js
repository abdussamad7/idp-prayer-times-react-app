import React, { Component } from 'react';
import './additional-message.css';
import Pdf from './../../timetable2020.pdf'

class AdditionalMessage extends Component {
  render() {
    return (
      <div className="AdditionalMessageWrapper">
        <div className="button">
           <a href={Pdf} target="_blank" rel="noopener noreferrer">View Full Timetable</a>
        </div>
      </div>
    );
  }
}

export default AdditionalMessage;
