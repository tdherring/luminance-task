import React from "react";
import depp_1 from "../assets/images/depp_1.webp";
import depp_2 from "../assets/images/depp_2.webp";
import depp_3 from "../assets/images/depp_3.webp";
import depp_4 from "../assets/images/depp_4.webp";
import depp_5 from "../assets/images/depp_5.webp";

const Gallery = () => {
  const IMAGES = [depp_1, depp_2, depp_3, depp_4, depp_5];

  const [activeImage, setActiveImage] = React.useState(0);

  return (
    <div>
      <div className="tile gallery">
        <span className="title">Gallery</span>
        <div className="images">
          <img src={IMAGES[activeImage]} alt="" />
        </div>
        <div className="buttons">
          <a
            href="/#"
            className="button prev"
            onClick={(event) => {
              event.preventDefault();
              setActiveImage(activeImage > 0 ? activeImage - 1 : IMAGES.length - 1);
              console.log(activeImage);
            }}
          >
            Previous
          </a>
          <a
            href="/#"
            className="button next"
            onClick={(event) => {
              event.preventDefault();
              setActiveImage(activeImage < IMAGES.length - 1 ? activeImage + 1 : 0);
              console.log(activeImage);
            }}
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
