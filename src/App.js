import React, { useState, useEffect } from 'react';
import './styles/App.css';

// components
import Monsoon from './components/Monsoon';
import Beams from './components/Beams';
import Slider from './components/Slider';

// vimeo api
import vimeo from 'vimeo';

import Img0 from './images/hunt-for-the-wilderpeople.jpg';
import Img1 from './images/nichts-passiert.jpeg';
import Img2 from './images/vice-versa-good-company.jpg';
import Img3 from './images/the-fourth-phase.jpg';
import Img4 from './images/full-moon.jpg';

const client_id = process.env.REACT_APP_CLIENT_ID2;
const client_secret = process.env.REACT_APP_CLIENT_SECRET2;
const token = process.env.REACT_APP_TOKEN2;
const Vimeo = vimeo.Vimeo;
const client = new Vimeo(`${client_id}`, `${client_secret}`,`${token}`);

const App = () => {
  const [sliderData, setSliderData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch Slider data from Vimeo API
  const fetchData = (endpoint, i) => {
    const images = [Img0, Img1, Img2, Img3, Img4];

    return new Promise((resolve, reject) => {
      client.request({
        method: 'GET',
        path: `/ondemand/pages/${endpoint}`
      }, function(error, body, status_code, headers) {
        if (error) reject(error);
        resolve({
          url: `${images[i]}`,
          title: body.name,
          desc: body.description
        });
      });
    });
  }

  useEffect(() => {
    // const endpoints = [
    //   'huntforthewilderpeople',
    //   'nichtspassiertadecentman', 
    //   'viceversafilm', 
    //   'thefourthphase', 
    //   'fullmoonsnowboard'
    // ];

    setIsLoading(true);

    fetchData('huntforthewilderpeople', 0)
      .then(res => {
        setSliderData(prev => [...prev, res]);
      })
      .catch(err => console.log(err))
      
    fetchData('nichtspassiertadecentman', 1)
      .then(res => {
        setSliderData(prev => [...prev, res]);
      })
      .catch(err => console.log(err))

    fetchData('viceversafilm', 2)
      .then(res => {
        setSliderData(prev => [...prev, res]);
      })
      .catch(err => console.log(err))

    fetchData('thefourthphase', 3)
      .then(res => {
        setSliderData(prev => [...prev, res]);
      })
      .catch(err => console.log(err))

    fetchData('fullmoonsnowboard', 4)
      .then(res => {
        setSliderData(prev => [...prev, res]);
      })
      .catch(err => console.log(err))

    setIsLoading(false);

  }, []);

  return (
    <main>
      <Monsoon />
      <Beams />
      {
        !isLoading ? <Slider data={sliderData} /> : <span>Loading...</span>
      }
    </main>
  );
}

export default App;
