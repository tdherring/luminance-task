import React, { useEffect, useState } from "react";
import CrossfadeImage from "react-crossfade-image";
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
      {/* <img className="current-image" src={IMAGES[activeImage]} />
      <img className="next-image" src={IMAGES[activeImage > 0 ? activeImage - 1 : IMAGES.length - 1]} /> */}
      <CrossfadeImage className="image" src={IMAGES[activeImage]} duration="1000" />
      <header>$ Johnny Depp $</header>
    </div>
  );
};

export default HeaderGallery;
