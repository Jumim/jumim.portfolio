import { useState } from 'react';
import { Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Header, ScrollDown } from 'components';
import { MainPage, IntroPage } from 'page';
import './App.scss';

function App() {
  const [nextState, setNextState] = useState(false);

  return (
    <div className="App">
      <Header />
      <Swiper
        className='ContentsArea'
        modules={[Pagination, Mousewheel]}
        direction={'vertical'}
        slidesPerView={1}
        pagination={{ clickable: true }}
        mousewheel={true}
      >
        <SwiperSlide>
          <MainPage />
        </SwiperSlide>
        <SwiperSlide>
          <IntroPage />
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
      </Swiper>
      <ScrollDown />
    </div>
  );
}

export default App;
