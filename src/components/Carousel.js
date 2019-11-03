import React, { useState } from 'react';

import images from '../utlis/constants';

const Arrow = ({ direction, handleClick, icon }) => {
  return (
    <button className={`arrow ${direction}`} onClick={handleClick}>
      {icon}
    </button>
  );
}

const ImgSlide = ({ url, title, desc }) => {
  return (
    <div className="img-slide">
      <img src={url} />
      <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="btn-group">
          <button className="buy-now">
            {/* TODO: icon */}
            Buy Now
          </button>
          <button className="trailer">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
}

const Carousel = () => {
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
      <Arrow direction={'left'} handleClick={prev} icon={/* TODO: */} />
      <ImgSlide
        url={images[currIndx].url}
        title={images[currIndx].title}
        desc={images[currIndx].desc}
      />
      <Arrow direction={'right'} handleClick={next} icon={/* TODO: */} />
    </section>
  );
}

export default Carousel;