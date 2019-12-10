import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/Slider.css';

import Img0 from '../images/hunt-for-the-wilderpeople.jpg';
import Img1 from '../images/nichts-passiert.jpeg';
import Img2 from '../images/vice-versa-good-company.jpg';
import Img3 from '../images/the-fourth-phase.jpg';
import Img4 from '../images/full-moon.jpg';

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

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  return <div className="slide" style={styles}></div>;
}

const Slider = () => {
  // constants
  const images = [Img0, Img1, Img2, Img3, Img4];

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
    if (currIndex === images.length - 1) return;
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
      >
        {images.map((image, i) => {
          return <Slide key={i} image={image} />;
        })}
      </div>
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