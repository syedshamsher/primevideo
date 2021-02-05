
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade,Scrollbar } from 'swiper';
import styles from "./twoRowedCarousel.module.css"
import 'swiper/swiper-bundle.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchAllMedias } from '../../Redux/MediaRedux/actions'
import Paper from '@material-ui/core/Paper';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

export const TwoRowedCarousel = () => {
    const history = useHistory()
    const dispatch = useDispatch()

  

    SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade,Scrollbar])
    const media1 = useSelector(state => state.medias.media1)
    const isLoading = useSelector(state => state.medias.isLoading)
    const handleClick = (id) => {
        history.push(`/media/${id}`)
    }

    const handleClick1 = (id, e) => {
        history.push(`/player/song2`)
        e.stopPropagation()
    }

    if (isLoading) return <div>Loading...</div>
    return (
        <div className="prime">

            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                slidesPerColumn={2}
                navigation={{ nextEl: '.swiper-button3', prevEl:'.swiper-button3'}}
                navigation
                speed={800}
                scrollbar={{ draggable: true , hide:true,el: '.swiper-scrollbar'}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                slidesPerColumnFill={'row'}
                className={styles.container}
            >

                {
                    media1.length > 0 && media1.map((item) => (
                        <SwiperSlide className={styles.subContainer} >
                        <div className={styles.Slide} onMouseEnter={(item)=>console.log("asd",item._id)}
                            key={item._id}
                            
                            onClick={() => handleClick(item._id)} >
                            {/* <div style={{ padding: "10px", fontFamily: 'Nunito', fontSize: "30px", marginTop: "160px", letterSpacing: "2px" }} >
                                {item.original_title} </div>  */}
                                <img src={item.backdrop_path} width="100%" style={{ width: "100%", objectFit: "contain"}}></img>
                                <div className={styles.hidden} >
                                <button style={{ alignContent: "center", alignItems: "center", textAlign: "center" }} onClick={(e) => handleClick1(item._id, e)} >
                                    < PlayCircleFilledWhiteIcon fontSize="large" /> Continue Watching </button>
                                <div style={{ fontSize: "30px", color: "white" }} > {item.original_title} </div>
                                <div style={{ marginTop: "15px", fontSize: "17px" }} > {item.overview} </div>
                            </div >
                        </div>
                    </SwiperSlide >
                    ))
                }
            </Swiper>
        </div>
    )
}

