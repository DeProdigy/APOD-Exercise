import React from 'react';
import styled from 'styled-components';
import { ApodHeader, ApodImage, ApodVideo, ApodErrorMessage, ApodLoading } from './ApodComponents';
import styles from './styleDefaults';

const StyledApod = styled.div`
  margin: 50px auto;
  width: ${props => props.width + styles.sizes.padding * 2}px;
  background: #e7e9e8;
  padding: ${styles.sizes.padding}px ${styles.sizes.padding * 2}px;
  border-radius: 3px;
  font-family: 'Spectral', serif;
`;

const StyledApodWrapper = styled.div`
  background-color: white;
  padding: ${styles.sizes.padding}px;
  text-align: center;
  box-shadow: 4px 4px 8px 3px rgba(0,0,0,.15);
`;

const Apod = props => {
  var isVideo = props.mediaType === 'video';
  var mediaUrl = props.imageWidth > 999 && props.hdurl ? props.hdurl : props.url;
  var imageProps = {
    src: mediaUrl,
    copy: props.copyright,
    width: props.imageWidth,
    onMediaWidthChange: props.onMediaWidthChange
  };

  if (props.isFetching) {
    return <ApodLoading />;
  }

  if (props.apiError) {
    return <ApodErrorMessage />;
  }

  return (
    <StyledApod width={props.imageWidth}>
      <StyledApodWrapper>
        {isVideo ? <ApodVideo src={props.url} /> : <ApodImage {...imageProps} />}
        <ApodHeader title={props.title} explanation={props.explanation} />
      </StyledApodWrapper>
    </StyledApod>
  );
}

export default Apod;
