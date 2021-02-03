import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import './styles.css';
import './styles.scss';
import styles from "./Carousel.module.css"
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

    React.useEffect(() => {
        console.log("Calling")
        dispatch(fetchAllMedias())
    }, [])

    SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade])
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
                spaceBetween={25}
                slidesPerView={4}
                slidesPerColumn={2}
                navigation
                speed={800}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                slidesPerColumnFill={'row'}
                style={{ backgroundColor: "#0F171E", padding: "10px", height: "600px", zIndex:1 }}

            >

                {
                    media1.length > 0 && media1.map((item) => (
                        <SwiperSlide style={{ backgroundColor: "#0F171E" }}>
                            <div className={styles.Slide} key={item._id} style={{ backgroundImage: `linear-gradient(to top, #0f171e 15%, transparent 100%),url("${item.backdrop_path}")`,backgroundSize: "100% 100%", height: "200px", width: "90%", padding: "20px", borderRadius: "5px" }} onClick={() => handleClick(item._id)}>
                                <div style={{ padding: "10px", fontFamily: 'Nunito', fontSize: "30px", marginTop: "160px", letterSpacing: "2px" }}>{item.original_title}</div>
                                <div className={styles.hidden}>
                                    <button style={{ zIndex: 1000, alignContent: "center", alignItems: "center", textAlign: "center", lineHeight: "100%" }} onClick={(e) => handleClick1(item._id, e)}><PlayCircleFilledWhiteIcon fontSize="large" />Continue Watching</button>
                                    <div style={{ fontSize: "30px", color: "white" }}>{item.original_title}</div>
                                    <div style={{ marginTop: "15px", fontSize: "17px" }}>{item.overview}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

