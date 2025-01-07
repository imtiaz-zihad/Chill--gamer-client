import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'


const Banner = () => {
    return (
      <div className='container  py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={'https://www.reviewtrackers.com/wp-content/uploads/blog-hero_game-review-sites-banner-1400x420.jpg'}
           
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={'https://bloximages.newyork1.vip.townnews.com/thedaonline.com/content/tncms/assets/v3/editorial/9/5e/95e9cd32-2d9f-11e9-b257-ef0a0b71cf32/5c60d561945d6.image.jpg'}
           
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={'https://i.ytimg.com/vi/7h1H5BWfVKk/sddefault.jpg'}
            
          />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;