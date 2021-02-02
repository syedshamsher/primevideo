import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay, EffectFade} from 'swiper';
import './styles.css';
import 'swiper/swiper-bundle.css';

export const BannerCarousel = () => {

    SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade])

    return (
        <Swiper
                // spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={true}
                speed={1500}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <img width="100%" src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheGreatEscapistsS1v2/e034ee83-ae32-4644-a99d-0f204ed959f2._UR3000,600_SX1500_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img width="100%" src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheGreatEscapistsS1v2/e034ee83-ae32-4644-a99d-0f204ed959f2._UR3000,600_SX1500_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img width="100%" src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheGreatEscapistsS1v2/e034ee83-ae32-4644-a99d-0f204ed959f2._UR3000,600_SX1500_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img width="100%" src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheGreatEscapistsS1v2/e034ee83-ae32-4644-a99d-0f204ed959f2._UR3000,600_SX1500_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img width="100%" src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheGreatEscapistsS1v2/e034ee83-ae32-4644-a99d-0f204ed959f2._UR3000,600_SX1500_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
        </Swiper>
    )
}
