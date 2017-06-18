import 'whatwg-fetch';
import React, { Component } from 'react';
import styled from 'styled-components';


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

const ApodMedia = ({ isVideo, url, copy }) => {
  if (isVideo) {
    return <iframe src={url} />;
  } else {
    return (
      <div>
        <small>&copy; {copy}</small>
        <img src={url} />
      </div>
    );
  }
}

const Apod = ({ title, explanation, copyright, url, media_type }) => (
  <div>
    <ApodHeader title={title} explanation={explanation} />
    <ApodMedia isVideo={media_type === 'video'} url={url} copy={copyright} />
  </div>
);

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd=true' //+ '&date=2017-06-01';

function getNASAData() {
  return window.fetch(url).then(res => res.json());
}

export default class ApodWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    var promise = getNASAData(); // Make request to get data

    promise.then(jsonData => {
      this.setState({ data: jsonData }) // Store the data in component state
    });
  }

  render() {
    return (
      <div>
        <Apod {...this.state.data} />
      </div>
    );
  }
}
