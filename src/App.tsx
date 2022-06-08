import { useState } from 'react';
import { Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Header, ScrollDown } from 'components';
import { MainPage, IntroPage, CareerPage } from 'page';
import './App.scss';

function App() {
  const [lastPage, setLastPage] = useState(false);

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
        onSlidePrevTransitionEnd={() => setLastPage(false)}
        onReachEnd={() => setLastPage(true)}
      >
        <SwiperSlide>
          <MainPage />
        </SwiperSlide>
        <SwiperSlide>
          <IntroPage />
        </SwiperSlide>
        <SwiperSlide>
          <CareerPage />
        </SwiperSlide>
      </Swiper>
      <ScrollDown className={ !lastPage ? 'on' : 'off' } />
    </div>
  );
}

export default App;
