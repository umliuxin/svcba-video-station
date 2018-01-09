import React from 'react';

const VideoDetail = (props) => {

  const video_id = 'sjmz43HhXlc';
  const url =`https://www.youtube.com/embed/${video_id}`;

  return(
    <div className="c_video-detial">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
    </div>
  );
};

export default VideoDetail;
