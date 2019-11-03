import React, { useState } from 'react';

import Img0 from '../images/hunt-for-the-wilderpeople.jpg';
import Img1 from '../images/nichts-passiert.jpeg';
import Img2 from '../images/vice-versa-good-company.jpg';
import Img3 from '../images/the-fourth-phase.jpg';
import Img4 from '../images/full-moon.jpg';

const Arrow = ({ direction, handleClick, icon }) => {
  return (
    <button className={`arrow ${direction}`} onClick={handleClick}>
      {icon}
    </button>
  );
}

const ImgSlide = () => {
  return (
    <div className="img-slide">
    
    </div>
  );
}

const Carousel = () => {
  const images = [Img0, Img1, Img2, Img3, Img4];
  const [currIndx, setcurrIndx] = useState(0);

  const prev = () => {
    const lastIndx = images.length - 1;
    const shouldReset = currIndx === 0;
    const indx = shouldReset ? lastIndx : currIndx - 1;
    setcurrIndx(indx);
  }

  const next = () => {
    const lastIndx = images.length - 1;
    const shouldReset = currIndx === lastIndx;
    const indx = shouldReset ? 0 : currIndx + 1;
    setcurrIndx(indx);
  }

  return (
    <section className="carousel">
      <Arrow direction={'left'} handleClick={prev} icon={/* FIXME: */} />
      <ImgSlide />
      <Arrow direction={'right'} handleClick={next} icon={/* FIXME: */} />
    </section>
  );
}

export default Carousel;