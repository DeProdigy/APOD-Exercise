import React from 'react';
import styled from 'styled-components';

const ImageWidthController = ({ onChange, width }) => (
  <div>
    <strong>Media Width: {width}px</strong>
    <input type="range" min="0" max="1500" step="100" onChange={onChange} value={width} />
  </div>
);

const ApodHeader = ({ title, explanation }) => (
  <header>
    <h1>{title}</h1>
    <p>{explanation}</p>
  </header>
);

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

const ApodErrorMessage = () => (
  <div>
    Could not load APOD data.
  </div>
);

const ApodLoading = () => (
  <div>Loading...</div>
);

export { ApodHeader, ApodImage, ApodVideo, ApodErrorMessage, ApodLoading }
