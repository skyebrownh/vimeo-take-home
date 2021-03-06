import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

// import imageData from '../utlis/constants';
import '../styles/Slider.css';

const LeftArrow = ({ handleClick }) => {
  return (
    <div className="arrow left" onClick={handleClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}

const RightArrow = ({ handleClick }) => {
  return (
    <div className="arrow right" onClick={handleClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

const Slide = ({ image, title, desc }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
  return (
    <div className="slide" style={styles}>
      <div className="color-overlay" style={{ background: 'rgba(0, 0, 0, 0.5)' }}></div>
      <div className="content">
        <div className="content-img">
          <img src={image} alt={title}/>
        </div>
        <div className="content-text">
          <h3>{title}</h3>
          <p>{desc.length > 500 ? desc.substring(0, 100) + '...' : desc}</p>
          <div className="btn-group">
            <button id="buy-now">
              <FontAwesomeIcon icon={faPlayCircle} style={{color: 'white', fontSize: '1rem'}} />
              Buy Now
            </button>
            <button id="trailer">Watch Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Slider = ({ data }) => {
  const slides = data.map((image, i) => {
    return (
      <Slide 
        key={i}
        image={image.url}
        title={image.title}
        desc={image.desc}
      />
    );
  });

  // state
  const [currIndex, setCurrIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  // click handlers
  const prev = () => {
    if (currIndex === 0) return;
    setCurrIndex(currIndex - 1);
    setTranslateValue(translateValue + slideWidth());
  }

  const next = () => {
    if (currIndex === data.length - 1) return;
    setCurrIndex(currIndex + 1);
    setTranslateValue(translateValue + -(slideWidth()));
  }

  const slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  return (
    <div className="slider">
      <div 
        className="slide-wrapper"
        style={{ transform: `translateX(${translateValue}px)`, transition: 'transform ease-out 0.45s' }}
      >{slides}</div>
      <LeftArrow handleClick={prev} />
      <RightArrow handleClick={next} />
    </div>
  );
}

export default Slider;

/* Sources: 

- Article:https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4
- Codepen:
https://codepen.io/DZuz14/pen/XxKLVY?editors=0110

*/