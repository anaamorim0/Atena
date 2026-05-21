import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/effect-coverflow'; 

function Carousel3D({ items }) {
  return (
    <div className="swiper-container-wrapper">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'} 
        initialSlide={1} 
        
        coverflowEffect={{
          rotate: 0,      
          stretch: 0,     
          depth: 100,   
          modifier: 2.5,  
          slideShadows: true, 
        }}
        modules={[EffectCoverflow]} 
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom">
            <div className="poster-container">
              <span>{item.title}</span>
              <img src={item.poster} alt={item.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel3D;