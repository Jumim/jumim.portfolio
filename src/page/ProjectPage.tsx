import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Project } from 'components';
import { MyProject } from 'etc';

export const ProjectPage = () => {
  return (
    <div className='ProjectPage'>
      <div className='ProjectPageTitle'>
        <h3>프로젝트</h3>
      </div>
      <Swiper
        className='ProjectArea'
        loop={true}
        centeredSlides={true}
        spaceBetween={10}
        breakpoints={{
          600: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1400: {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1780: {
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
          >
        {
        MyProject.map((data: any, i: number) =>
          <SwiperSlide key={'Project_' + i}>
            <Project projectData={data} />
          </SwiperSlide>
        )
      }
      </Swiper>
    </div >
  )
}
