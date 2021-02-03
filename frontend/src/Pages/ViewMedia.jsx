import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { fetchMedia } from '../Redux/MediaRedux/actions'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import PlayArrowOutlined from '@material-ui/icons/PlayArrowOutlined'
import GetAppIcon from '@material-ui/icons/GetApp';

const ViewMedia = () => {
    const { id } = useParams()
    const isLoading = useSelector(state => state.medias.isLoading)
    const media = useSelector(state => state.medias.currmedia)
    console.log(id,isLoading,media)
    const dispatch = useDispatch()
    const history = useHistory()

    // const useMountEffect = (fun) => useEffect(fun, [])
    // useMountEffect(dispatch(fetchMedia(id)))
    
    React.useEffect(() => {
        console.log("Calling")
        dispatch(fetchMedia(id))
    }, [])

    const handleClick=()=>{
        history.push(`/player/song2`)        
    }

 
    

    if (isLoading ) return <div>Loading...</div> 
    else return (
        <>
       {media.media_type=="movie" && <div style={{backgroundColor:"#0F171E", width:"100%", height:"100%", marginTop:"5px", padding:"4%", color:"white"}}>
           <div style={{backgroundColor:"#0F171E", maxWidth:"80%", height:"100%"}}>
               <div style={{fontSize:"30px", color:"white"}}>{media.original_title}</div>
               <div style={{display:'flex', width:"300px", justifyContent:"space-between", marginTop:"15px",alignItems:"center"}}>
                   <div>IMDb {Number(media.vote_average).toFixed(1)}</div>
                   <div>1 h 42 min</div>
                   <div>2020</div>
                   <div style={{fontSize:"11px", border:"1px solid white", borderRadius:"2px", padding:"3px" }}>X-ray</div>
                   <div style={{fontSize:"11px", border:"1px solid white", borderRadius:"2px", padding:"3px" }}>7+</div>
               </div>
               <div style={{marginTop:"15px", width:"40%",fontSize:"17px"}}>
                   {media.overview}
               </div>
               <div style={{display:'flex', width:"40%", justifyContent:"space-between", marginTop:"15px",alignItems:"center", alignContent:"center", textAlign:"center"}}>
                   <div onClick={handleClick}><PlayCircleFilledWhiteIcon fontSize="large" />Continue Watching</div>
                   <div><PlayArrowOutlined fontSize="large" />See the Teaser</div>
                   <div>Add to Favourites</div>
                   <div><GetAppIcon fontSize="large" />Download</div>
                   {/* <div style={{background: "linear-gradient(to right, transparent, "#0F171E"),url(`${media.backdrop_path}`)"}}></div> */}
               </div>
               </div>
       </div>}
       </>
    )
}


export default ViewMedia
