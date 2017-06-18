import React, { Component } from 'react';
import Apod from './Apod';
import getNASAData from './apodFetcher';

const DEFAULT_IMAGE_WIDTH = 500;
const APOD_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd=true' + '&date=2017-06-01';

export default class ApodContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apodData: {},
      imageWidth: DEFAULT_IMAGE_WIDTH
    };
  }

  componentDidMount() {
    getNASAData(APOD_URL).then(jsonData => {
      this.setState({ apodData: jsonData });
    });
  }

  handleMediaWidthChange(e) {
    var imageWidth = parseInt(e.target.value) || DEFAULT_IMAGE_WIDTH;

    this.setState({ imageWidth });
  }

  render() {
    return (
      <Apod {...this.state.apodData} onMediaWidthChange={this.handleMediaWidthChange.bind(this)} imageWidth={this.state.imageWidth} />
    );
  }
}
