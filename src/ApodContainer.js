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
      imageWidth: DEFAULT_IMAGE_WIDTH,
      isFetching: true,
      apiError: false
    };
  }

  componentDidMount() {
    getNASAData(APOD_URL).then(jsonData => {
      this.setState({ apodData: jsonData, isFetching: false });
    }).catch(error => {
      this.setState({ apiError: true, isFetching: false });
    });
  }

  handleMediaWidthChange(e) {
    var imageWidth = parseInt(e.target.value) || DEFAULT_IMAGE_WIDTH;

    this.setState({ imageWidth });
  }

  render() {
    var apodProps = {
      title: this.state.apodData.title,
      explanation: this.state.apodData.explanation,
      copyright: this.state.apodData.copyright,
      url: this.state.apodData.url,
      hdurl: this.state.apodData.hdurl,
      mediaType: this.state.apodData.media_type,
      onMediaWidthChange: this.handleMediaWidthChange.bind(this),
      imageWidth: this.state.imageWidth,
      apiError: this.state.apiError,
      isFetching: this.state.isFetching
    };

    return (
      <Apod {...apodProps} />
    );
  }
}
