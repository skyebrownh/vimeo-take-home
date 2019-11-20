import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import images from '../utlis/constants';

const Arrow = ({ direction, handleClick, icon }) => {
  return (
    <button className={`arrow ${direction}`} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

const ImgSlide = ({ url, title, desc }) => {
  const bgImgStyle = {
    // TODO: backgroundImage: `url(${url})`,
    // TODO: filter: 'blur(8px)', OPACITY INSTEAD???!!!!
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    background: 'slateblue',
    height: '500px'
  };

  return (
    <div className="img-slide">
      {/* <img src={url} /> */}
      <div 
        className="bg-image"
        style={bgImgStyle}
      ></div>
      <div className="content">
        <div className="content-img">
          <img src={url} alt={desc}/>
        </div>
        <div className="content-text">
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="btn-group">
            <button className="buy-now">
              <FontAwesomeIcon icon={faPlayCircle} />
              Buy Now
            </button>
            <button className="trailer">Watch Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Carousel = () => {
  const [currIndx, setcurrIndx] = useState(0);

  // TODO: sliding screen transition
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
      <Arrow direction={'left'} handleClick={prev} icon={faChevronLeft} />
      <ImgSlide
        url={images[currIndx].url}
        title={images[currIndx].title}
        desc={images[currIndx].desc}
      />
      <Arrow direction={'right'} handleClick={next} icon={faChevronRight} />
    </section>
  );
}

export default Carousel;