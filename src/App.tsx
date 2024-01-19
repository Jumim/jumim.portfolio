import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { Header, ScrollDown } from 'components'
import { MainPage, SkillPage, CareerPage, ProjectPage, IntroPage } from 'page'
import './App.scss'

const App = () => {
  const [lastPage, setLastPage] = useState(false)

  return (
    <div className="App">
      <Header />
      <Swiper
        className="ContentsSwiper"
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
          <SkillPage />
        </SwiperSlide>
        <SwiperSlide>
          <CareerPage />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectPage />
        </SwiperSlide>
      </Swiper>
      <ScrollDown className={!lastPage ? 'on' : 'off'} />
    </div>
  )
}

export default App
