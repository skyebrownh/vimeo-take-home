import React from 'react';
import './styles/App.css';

const App = () => {
  return (
    <main>
      <section className="monsoon">
        <div className="content-wrapper">
          <div className="monsoon-text">
            <h2>Monsoon III</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita amet itaque nemo nesciunt aperiam blanditiis id sunt vitae ab dolore obcaecati, odit cumque voluptatem facilis ipsum maiores dolor magni veritatis eos iusto. Nulla, rerum?</p>
          </div>
          <img src="https://i.vimeocdn.com/video/595198868_505x160.jpg" alt="Monsoon III"/>
        </div>
      </section>
      <section className="beams">
        <div className="content-wrapper">
          <div className="beams-content">
            <div className="beams-content-text">
              <h2>Beams</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ut quibusdam veniam est perferendis commodi optio quod reiciendis sapiente veritatis, nesciunt quis dolor ad natus facilis. Voluptatum molestiae architecto praesentium nesciunt exercitationem deserunt expedita quasi voluptatibus, animi fugiat, ab inventore.</p>
            </div>
            <img src="https://i.vimeocdn.com/video/589972810_530x315.jpg" alt="Beams"/>
          </div>
          <div className="move2">
            <div className="move2-text">
              <h2>Move 2</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis voluptatibus pariatur aliquam maiores, quidem iste impedit repellat, quo incidunt facere labore. Porro voluptas optio earum ipsa ducimus cumque voluptatem?</p>
            </div>
            <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" alt="Move 2"/>
          </div>
        </div>
      </section>
      {/* <div className="carousel">

      </div> */}
    </main>
  );
}

export default App;
