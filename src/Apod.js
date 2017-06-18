import React from 'react';
import { ApodHeader, ApodImage, ApodVideo } from './ApodComponents';
import getNASAData from './apodFetcher';

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

export default Apod;
