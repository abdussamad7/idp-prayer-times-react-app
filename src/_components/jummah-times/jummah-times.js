import React, { Component } from 'react';
import './jummah-times.css';
import moment from 'moment/moment';
import AppConfig from '../app-config/app-config';

class JummahTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _appConfig: new AppConfig()
    };
  }

  getDST() {
    return this.getNextFriday().isDST();
  }

  getNextFriday() {
    const dayINeed = 5;

    if (moment().isoWeekday() <= dayINeed) {
      return moment().isoWeekday(dayINeed);
    } else {
      return moment()
        .add(1, 'weeks')
        .isoWeekday(dayINeed);
    }
  }

  getJummahTimes() {
    var summerTimes = {
      slot_1: '1:00',
      slot_2: '1:30',
      slot_3: '2:00',
      slot_4: '2:15'
    };

    var winterTimes = {
      slot_1: '12:45',
      slot_2: '1:15',
      slot_3: '1:45',
      slot_4: '2:00'
    };
    return this.getDST() ? summerTimes : winterTimes;
  }

  render() {
    return (
      <table className="JummahTimesTable">
        <thead>
          <tr>
            <th />
            <th><strong>Khutbah</strong></th>
            <th><strong>Jama'ah</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st Jumu‘ah</td>
            <td>{this.getJummahTimes()['slot_1']}</td>
            <td>{this.getJummahTimes()['slot_2']}</td>
          </tr>
          <tr>
            <td>2nd Jumu‘ah</td>
            <td>{this.getJummahTimes()['slot_3']}</td>
            <td>{this.getJummahTimes()['slot_4']}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default JummahTimes;
