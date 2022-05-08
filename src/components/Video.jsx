import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
  return (
    <div className="tile video">
      <span className="title">
        <FontAwesomeIcon icon={faStar} />
        &nbsp;Best Moments
      </span>
      <div className="container">
        <iframe
          src="https://www.youtube.com/embed/M6lgEGA6Wek"
          title="Top 20 Johnny Depp Performances"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
