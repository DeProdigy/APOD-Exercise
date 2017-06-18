import React from 'react';
import { ApodHeader, ApodImage, ApodVideo, ApodErrorMessage, ApodLoading } from './ApodComponents';
import getNASAData from './apodFetcher';

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
    <div>
      <ApodHeader title={props.title} explanation={props.explanation} />
      {isVideo ? <ApodVideo src={props.url} /> : <ApodImage {...imageProps} />}
    </div>
  );
}

export default Apod;
