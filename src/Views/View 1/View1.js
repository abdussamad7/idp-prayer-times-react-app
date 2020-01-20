import React, { Component } from 'react';
import './View1.css';
import Logo from '../../_components/logo/logo';
import Clock from '../../_components/clock/clock';
import PrayerTimes from '../../_components/prayer-times-single-view/prayer-times-single-view';
import Date from '../../_components/date/date';
import AppConfig from '../../_components/app-config/app-config';
import JummahTimes from '../../_components/jummah-times/jummah-times';
import AdditionalMessage from '../../_components/additional-message/additional-message';
import SunriseAndZawwal from '../../_components/sunrise-and-zawwal/sunrise-and-zawwal';

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
          <div className="col-12 col-md-6">
            <div className="row">
              <Clock />
            </div>
            <div className="row">
              <Date />
            </div>
            <div className="row">
              <Logo />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <PrayerTimes />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <JummahTimes />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <SunriseAndZawwal />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <AdditionalMessage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default View1;
