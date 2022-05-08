import React, { useEffect, useState } from "react";
import CrossfadeImage from "react-crossfade-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import depp_0 from "../assets/images/depp_0.webp";
import depp_1 from "../assets/images/depp_1.webp";
import depp_2 from "../assets/images/depp_2.webp";
import depp_3 from "../assets/images/depp_3.webp";
import depp_4 from "../assets/images/depp_4.webp";

const HeaderGallery = () => {
  const IMAGES = [depp_0, depp_1, depp_2, depp_3, depp_4];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setActiveImage(activeImage < IMAGES.length - 1 ? activeImage + 1 : 0);
    }, 5000);

    return () => clearTimeout(interval);
  }, [activeImage]);

  return (
    <div className="header-gallery">
      <CrossfadeImage className="image" src={IMAGES[activeImage]} duration={1000} />
      <header>$ Johnny Depp $</header>
      <span className="scroll-down">
        Scroll Down
        <br />
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </div>
  );
};

export default HeaderGallery;
