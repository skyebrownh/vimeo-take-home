import React from 'react';
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

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const token = process.env.REACT_APP_TOKEN;
const Vimeo = vimeo.Vimeo;
const client = new Vimeo(`${client_id}`, `${client_secret}`,`${token}`);

const endpoints = [
  'huntforthewilderpeople',
  'nichtspassiertadecentman', 
  'viceversafilm', 
  'thefourthphase', 
  'fullmoonsnowboard'
];
const images = [Img0, Img1, Img2, Img3, Img4];
const res = [];

endpoints.forEach((endpoint, i) => {
  client.request({
    method: 'GET',
    path: `/ondemand/pages/${endpoint}`
  }, function(error, body, status_code, headers) {
    if (error) console.log(error);
    res.push({
      url: `${images[i]}`,
      title: body.name,
      desc: body.description
    });
  });
});

const App = () => {
  return (
    <main>
      <Monsoon />
      <Beams />
      <Slider data={res} />
    </main>
  );
}

export default App;
