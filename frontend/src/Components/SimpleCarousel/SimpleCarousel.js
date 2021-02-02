import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay, EffectFade} from 'swiper';
import './styles.css';
import './styles.scss';
import 'swiper/swiper-bundle.css';

export const SimpleCarousel = () => {

    SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade])

    return (
        <div className="prime">
            <Swiper
                spaceBetween={6}
                slidesPerView={4}
                slidesPerColumn={1}
                navigation
                speed={800}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                slidesPerColumnFill= {'row'}
                
            >
            <SwiperSlide>
                <div id="card-wrapper">
                    <img  src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TANDAV/IN/en_US.hi_IN/COVER_ART/Shiva_Team._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
                    <div id="contents"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TANDAV/IN/en_US.hi_IN/COVER_ART/Shiva_Team._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TANDAV/IN/en_US.hi_IN/COVER_ART/Shiva_Team._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TANDAV/IN/en_US.hi_IN/COVER_ART/Shiva_Team._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TANDAV/IN/en_US.hi_IN/COVER_ART/Shiva_Team._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TANDAV/IN/en_US.hi_IN/COVER_ART/Shiva_Team._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TANDAV/IN/en_US.hi_IN/COVER_ART/Shiva_Team._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TANDAV/IN/en_US.hi_IN/COVER_ART/Shiva_Team._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TANDAV/IN/en_US.hi_IN/COVER_ART/Shiva_Team._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TANDAV/IN/en_US.hi_IN/COVER_ART/Shiva_Team._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
        </Swiper>
        </div>
    )
}
