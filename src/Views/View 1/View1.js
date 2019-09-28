import React, { Component } from 'react';
import './View1.css';
import Logo from '../../_components/logo/logo';
import Clock from '../../_components/clock/clock';
import PrayerTimes from '../../_components/prayer-times/prayer-times';
import Date from '../../_components/date/date';
import AppConfig from '../../_components/app-config/app-config';
import Branding from '../../_components/branding/branding';
import JummahTimes from '../../_components/jummah-times/jummah-times';

class View1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _appConfig: new AppConfig()
    };
  }

  componentWillUnmount() {
    this.setState(() => ({
      _appConfig: null
    }));
  }

  render() {
    return (
      <div className="View1">
        <div className="row">
          <Logo />
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row">
              <Clock />
            </div>
            <div className="row">
              <Date />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <PrayerTimes />
            </div>
          </div>
          <JummahTimes />
        </div>
        <Branding />
      </div>
    );
  }
}

export default View1;
