import React from 'react';
import styled from 'styled-components';
import styles from './styleDefaults';

const StyledHeader = styled.header`
  text-align: center;
  padding: 20px;
`;

const StyledH1 = styled.header`
  font-size: 20px;
  font-family: serif;
`;

const StyledP = styled.p`
  color: ${styles.colors.grey};
  font-size: 14px;
  font-family: serif;
  line-height: 1.4;
`;

const StyledSmall = styled.small`
  color: ${styles.colors.grey};
  text-transform: uppercase;
  display: block;
  font-family: 'Open Sans', sans-serif;
`;

const StyledApodImage = styled.div`
  text-align: center;
`;

const StyledInput = styled.input`
  display: block;
  margin: 10px auto;
  width: 100px;
  text-align: center;
`;

const StyledApodVideo = styled.iframe`
  border: 0;
`;

const ImageWidthController = ({ onChange, width }) => (
  <div>
    <small>Media Width:</small>
    <StyledInput type="number" min="0" max="1400" step="100" onChange={onChange} value={width} />
  </div>
);

const ApodHeader = ({ title, explanation }) => (
  <StyledHeader>
    <StyledSmall>APOD</StyledSmall>
    <StyledH1>{title}</StyledH1>
    <StyledP>{explanation}</StyledP>
  </StyledHeader>
);

const ApodImage = ({ onMediaWidthChange, src, copy, width }) => (
  <StyledApodImage>
    <ImageWidthController width={width} onChange={onMediaWidthChange} />
    <img src={src} width={width} />
    <StyledSmall>&copy; {copy}</StyledSmall>
  </StyledApodImage>
);

const ApodVideo = ({ src }) => (
  <StyledApodVideo src={src} />
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
