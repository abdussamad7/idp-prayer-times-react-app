import React, { Component } from 'react';
import './prayer-times-single-view.css';
import PrayerData from '../prayer-data/prayer-data';
import nextJammahTime from '../next-jamah-time/next-jamah-time';

class PrayerTimesSingleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTimes: this.getPrayerTimes(),
      nextJammah: this.getNextJammah(),
      jammahCheckingInterval: 60000
    };
  }

  getPrayerTimes() {
    var _data = new PrayerData();
    return _data.getPrayerTimes();
  }

  getNextJammah() {
    var nextJammah = new nextJammahTime();
    return nextJammah.getNextJammahTime();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.setState(() => ({
        nextJammah: this.getNextJammah()
      }));
    }, this.state.jammahCheckingInterval);
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    this.stopInterval();
  }

  getAsrTime() {
    if (
      this.state.prayerTimes['Asr Mithl 1'] &&
      !this.state.prayerTimes['Asr Mithl 2']
    ) {
      return this.state.prayerTimes['Asr Mithl 1'];
    } else if (
      this.state.prayerTimes['Asr Mithl 2'] &&
      !this.state.prayerTimes['Asr Mithl 1']
    ) {
      return this.state.prayerTimes['Asr Mithl 2'];
    } else {
      return (
        <ul className="bullet-list--no-decorations">
          <li><span className="mithl-text">Mithl 1 </span>{this.state.prayerTimes['Asr Mithl 1']}</li>
          <li><span className="mithl-text">Mithl 2 </span>{this.state.prayerTimes['Asr Mithl 2']}</li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="PrayerTimeSingleViewWrapper">
        <table className="PrayerTimesSingleView">
          <thead>
            <tr className="no-bottom-border">
              <th />
              <th>Begins</th>
              <th>Jama'ah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Fajr</th>
              <td>{this.state.prayerTimes['Fajr Begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Fajr'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Fajr Jama‘ah']}
              </td>
            </tr>
            <tr>
              <th>Dhuhr</th>
              <td>{this.state.prayerTimes['Zuhr Begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Zuhr'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Zuhr Jama‘ah']}
              </td>
            </tr>
            <tr>
            <th>'Asr</th>
              <td>{this.getAsrTime()}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Asr'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Asr Jama‘ah']}
              </td>
            </tr>
            <tr>
              <th>Maghrib</th>
              <td>{this.state.prayerTimes['Maghrib Begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Maghrib'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Maghrib Jama‘ah']}
              </td>
            </tr>
            <tr className="no-bottom-border">
              <th>Isha</th>
              <td>{this.state.prayerTimes['Isha Begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Isha'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Isha Jama‘ah']}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrayerTimesSingleView;
