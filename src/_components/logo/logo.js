import React, { Component } from 'react';
import './logo.css';
import IDP from './assets/idplogonew.png';
import AppConfig from '../app-config/app-config';

class Logo extends Component {
  constructor(props) {
    super(props);
    var _appConfig = new AppConfig();
    this.state = {
      logo: _appConfig.get('Logo_URL')
    };
  }

  render() {
    return (
      <div className="LogoWrapper">
        <img src={IDP} alt="IDP Logo" />
      </div>
    );
  }
}

export default Logo;
