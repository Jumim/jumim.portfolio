import { Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Header, MainPage } from 'components';
import './App.scss';

function App() {


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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
