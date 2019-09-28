import React, { Component } from 'react';
import './Slider.css';
import View1 from '../Views/View 1/View1';
import SingleView from '../Views/SingleView/SingleView';
import GoogleSlides from '../GoogleSlides/GoogleSlides';
import config from '../config.json';
import AppConfig from '../_components/app-config/app-config';

class Slider extends Component {
  constructor(props) {
    super(props);
    var _appConfig = new AppConfig();
    var sliderMode = _appConfig.get('sliderMode');
    this.state = {
      currentSlide:
        sliderMode === 'single-view'
          ? this.getSingleView()
          : this.getInitialSlide(),
      slides: this.getSlides(),
      currentPosition: 0,
      sliderMode: sliderMode || 'slider',
      slideTimeout: _appConfig.get('sliderTimeout') || 8000,
      googleSlides: {
        slide: <GoogleSlides />,
        totalCount:
          config.googleSlides && config.googleSlides.numberOfSlides
            ? config.googleSlides.numberOfSlides
            : 0
      }
    };
  }

  getInitialSlide() {
    return <View1 />;
  }

  getSingleView() {
    return <SingleView />;
  }

  getSlides() {
    return [<View1 />];
  }

  showGoogleSlides() {
    this.setState(() => ({
      currentSlide: this.state.googleSlides.slide
    }));
    this.stopInterval();
    var slideCount = 0;
    var _gSlideInterval = setInterval(() => {
      slideCount++;
      if (slideCount >= this.state.googleSlides.totalCount - 1) {
        clearInterval(_gSlideInterval);
        this.startInterval();
      }
    }, this.state.slideTimeout);
  }

  startInterval() {
    this.interval = setInterval(() => this.next(), this.state.slideTimeout);
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

  render() {
    return this.state.currentSlide;
  }
}

export default Slider;
