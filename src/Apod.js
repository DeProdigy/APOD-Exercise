import 'whatwg-fetch';
import React, { Component } from 'react';
import styled from 'styled-components';

const DEFAULT_IMAGE_WIDTH = 500;

const Throwaway = styled.p`
  text-align: center;
  font-size: 32px;
  color: #2A9BD6;
`;

const ApodHeader = ({ title, explanation }) => (
  <header>
    <h1>{title}</h1>
    <p>{explanation}</p>
  </header>
)

const ApodImage = ({ onMediaWidthChange, src, copy, width }) => (
  <div>
    <ImageWidthController width={width} onChange={onMediaWidthChange} />
    <small>&copy; {copy}</small>
    <img src={src} width={width} />
  </div>
);

const ApodVideo = ({ src }) => (
  <iframe src={src} />
);

const ImageWidthController = ({ onChange, width }) => (
  <div>
    <strong>Media Width: {width}px</strong>
    <input type="range" min="0" max="1500" step="100" onChange={onChange} value={width} />
  </div>
);

const Apod = ({ title, explanation, copyright, url, hdurl, media_type, onMediaWidthChange, imageWidth }) => {
  var isVideo = media_type === 'video';
  var mediaUrl = imageWidth > 999 && hdurl ? hdurl : url;
  var imageProps = {
    src: mediaUrl,
    copy: copyright,
    width: imageWidth,
    onMediaWidthChange: onMediaWidthChange
  };

  return (
    <div>
      <ApodHeader title={title} explanation={explanation} />
      {isVideo ? <ApodVideo src={url} /> : <ApodImage {...imageProps} />}
    </div>
  );
}

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd=true' + '&date=2017-06-01';

function getNASAData() {
  return window.fetch(url).then(res => res.json());
}

export default class ApodContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      apodData: {},
      imageWidth: DEFAULT_IMAGE_WIDTH
    };
  }

  componentDidMount() {
    getNASAData().then(jsonData => {
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
