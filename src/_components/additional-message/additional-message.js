import React, { Component } from 'react';
import './additional-message.css';

class AdditionalMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AdditionalMessageWrapper">
        <div className="button">
          <a href="https://alneharmosque.files.wordpress.com/2019/09/c58e6c48-53e4-4bcb-a8c0-0196e9559896.jpeg?w=1512" target="_blank">View Timetable</a>
        </div>
      </div>
    );
  }
}

export default AdditionalMessage;
