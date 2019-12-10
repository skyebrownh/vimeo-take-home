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

const ImgSlide = ({ url, title, desc, prev, next }) => {
  const bgImgStyle = {
    // backgroundImage: `url(${url})`,
    // // filter: 'blur(8px)',
    // // opacity: '0.4',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    background: 'slateblue',
    height: '500px'
  };

  return (
    <div className="img-slide">
      <Arrow direction={'left'} handleClick={prev} icon={faChevronLeft} />
      <div 
        className="bg-image"
        style={bgImgStyle}
      ></div>
      <div className="content">
        <div className="content-img">
          <img src={url} alt={title}/>
        </div>
        <div className="content-text">
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="btn-group">
            <button id="buy-now">
              <FontAwesomeIcon icon={faPlayCircle} style={{color: 'white', fontSize: '1rem'}} />
              Buy Now
            </button>
            <button id="trailer">Watch Trailer</button>
          </div>
        </div>
      </div>
      <Arrow direction={'right'} handleClick={next} icon={faChevronRight} />
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
      <ImgSlide
        url={images[currIndx].url}
        title={images[currIndx].title}
        desc={images[currIndx].desc}
        prev={prev}
        next={next}
      />
    </section>
  );
}

export default Carousel;