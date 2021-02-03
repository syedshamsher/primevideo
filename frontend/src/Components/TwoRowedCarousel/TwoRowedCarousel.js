import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay, EffectFade} from 'swiper';
import './styles.css';
import './styles.scss';
import 'swiper/swiper-bundle.css';
import { useHistory } from 'react-router-dom';


export const TwoRowedCarousel = () => {
    const history = useHistory()
    SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade])

    const handleClick=()=>{
        history.push(`/media/601865e80528f5c0d430fa1e`)
    }

    return (
        <div className="prime">
            <Swiper
                spaceBetween={6}
                slidesPerView={4}
                slidesPerColumn={2}
                navigation
                speed={800}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                slidesPerColumnFill= {'row'}
                
            >
            <SwiperSlide>
                <div id="card-wrapper">
                    <img  src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
                    <div id="content">HELLOooooooooooooooooooooooo</div>
                </div>
                
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" onClick={()=>handleClick()} />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/89f512cebace67310ad38609e5dde3e4a07a8ae07d803d64177be6548f04a0e5._UR1920,1080_RI_SX356_FMjpg_.jpg" alt="banner" />
            </SwiperSlide>
        </Swiper>
        </div>
    )
}
