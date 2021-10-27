import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HttpRequestGet from './HttpRequestGet/HttpRequestGet';

function SliderNext2(props) {
  let { data, isLoaded } = HttpRequestGet(
    `http://127.0.0.1:8000/api/image-slider/`
  );
  return (
    <Carousel
      autoPlay={true}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
    >
      {data.map((item) => (
        <div>
          <img src={item.image} />
        </div>
      ))}
    </Carousel>
  );
}

export default SliderNext2;
