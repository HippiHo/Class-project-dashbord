import React from 'react';
import ReactPlayer from "react-player"


// TODO imporove the black parts and the sizing 
const Video = props => {
  return (
    <div className="splinter">
    {/* <h2>{props.data.title}</h2> */}
      <ReactPlayer
        width="100%"
        height="42vh"
        // onDuration={duration => props.setVideoDuration(duration)}
        // onEnded={props.endingHandler}
        url={`https://www.youtube.com/embed/DLX62G4lc44`}
        subtitles="true"
        playing
      />
    </div>
  );
};

export default Video;