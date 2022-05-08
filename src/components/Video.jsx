import React from "react";

const Video = () => {
  return (
    <div className="tile video">
      <span className="title">Best Moments</span>
      <div className="container">
        <iframe
          src="https://www.youtube.com/embed/M6lgEGA6Wek"
          title="Top 20 Johnny Depp Performances"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
