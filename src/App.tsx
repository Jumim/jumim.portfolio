import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Header } from './components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Swiper>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
