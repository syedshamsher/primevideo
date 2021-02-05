import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, } from "swiper";
import "swiper/swiper-bundle.css";
import styles from "./Carousel.module.css"
import { useHistory } from 'react-router-dom';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { useSelector } from "react-redux"
import { useResponsive } from 'react-hooks-responsive'


const breakpoints = { xs: 0, sm: 480, md: 640, lg:720, xl:2048 }

export const SimpleCarousel = (props) => {
    const { size, orientation, screenIsAtLeast, screenIsAtMost } = useResponsive(breakpoints)
    const [num,setNum]=React.useState(4)

    React.useEffect(() => {
        console.log(size)
        if(size=="xs")setNum(2)
        if(size=="lg")setNum(4)
        if(size=="xl")setNum(6)
        
    }, [size])

    SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
    const history = useHistory()
    console.log(props.media)
    const tv = useSelector(state => state.medias.tv)
    React.useEffect(() => {
        console.log(props)

    }, [props])

    const handleClick = (id) => {
        history.push(`/media/${id}`)
    }

    const handleClick1 = (id, e) => {
        history.push(`/player/song2`)
        e.stopPropagation()
    }

    return (<div className="prime" >

        <Swiper spaceBetween={10}
            slidesPerView={num}
            slidesPerColumn={1}
            navigation={{ nextEl: '.swiper-button2', prevEl:'.swiper-button2'}}
            navigation speed={800}
            scrollbar={{ draggable: true , hide:true, el: '.swiper-scrollbar'}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            slidesPerColumnFill={"row"}
            className={styles.container} >

            {
                props.media.length > 0 && props.media.map((item) => (
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
    );
};