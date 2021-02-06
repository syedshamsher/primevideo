import React from 'react'
import { BannerCarousel } from '../../Components/BannerCarousel/BannerCarousel'
import { SimpleCarousel } from '../../Components/SimpleCarousel/SimpleCarousel'
import { TwoRowedCarousel } from '../../Components/TwoRowedCarousel/TwoRowedCarousel'
import { fetchAllMedias } from '../../Redux/MediaRedux/actions'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export const Movies = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.medias.isLoading)    
    const main = useSelector(state => state.medias.main)
    const media = useSelector(state => state.medias.medias)
    const media1 = useSelector(state => state.medias.media1)
    const tv = useSelector(state => state.medias.tv)
    const movie = useSelector(state => state.medias.movie)
    const anime = useSelector(state => state.medias.anime)
    const english = useSelector(state => state.medias.english)
    const regional = useSelector(state => state.medias.regional)
    console.log(media,tv,movie,anime,english,regional)

    React.useEffect(() => {
        console.log("Calling")
        dispatch(fetchAllMedias())
    }, [])

    const MV1=main.filter((item)=>item.media_type=="movie")
    const MVtrend=movie.filter((item)=>item.media_type=="movie")
    const MVtop=media1.filter((item)=>item.media_type=="movie")
    const MVen=english.filter((item)=>item.media_type=="movie")
    const MVreg=regional.filter((item)=>item.media_type=="movie")


    if(isLoading) return <div>Loading...</div> 

    return (
        <div style={{height:"max-content", background:"#0F171E", display:"flex", flexDirection:"column"}}>
            
            <div >
                <BannerCarousel
                media={MV1}
                />
            </div>
            <div style={{fontSize:"20px",fontWeight:700, color:"white", marginLeft:"40px" }}>Trending Now </div>
            <div><SimpleCarousel
                media={MVtrend}/></div>           
            <div style={{fontSize:"20px",fontWeight:700, color:"white", marginLeft:"40px" }}>Most Viewed</div>
            <div><TwoRowedCarousel
            media={MVtop}/></div>
            <div style={{fontSize:"20px",fontWeight:700, color:"white", marginLeft:"40px" }}>Top English Movies  </div>
            <div><SimpleCarousel
                media={MVen}/></div>
            <div style={{fontSize:"20px",fontWeight:700, color:"white", marginLeft:"40px" }}>Top Regional Movies </div>
            <div><SimpleCarousel
                media={MVreg}/></div>
           
        </div>
    )
}
