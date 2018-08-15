import React from "react";

const videoPlayerUrl = "https://www.youtube.com/embed/";

const Player = props => {
  return (
    <iframe
      title="Player"
      width="560"
      height="315"
      src={videoPlayerUrl + props.videoId}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
};

export default Player;
