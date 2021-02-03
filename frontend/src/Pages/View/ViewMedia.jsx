import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

import PlayArrowOutlined from '@material-ui/icons/PlayArrowOutlined'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ShareIcon from '@material-ui/icons/Share';
import CreateIcon from '@material-ui/icons/Create';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import GetAppIcon from '@material-ui/icons/GetApp';
import { fetchMedia } from '../../Redux/MediaRedux/actions'
import styles from './styles.module.css'


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
    }, [id])


    const handleClick=()=>{
        history.push(`/player/song2`)        
    }

    let bannerPath = media.media_type === "movie" && media?.backdrop_path.split("/")
    let bannerUrl = `https://image.tmdb.org/t/p/original/${bannerPath[bannerPath.length-1]}`


    if (isLoading ) return <div>Loading...</div> 
    else return (
        <>

         {/* for series */}
       { media.media_type=="series" && 
                <div>

                    <header
                        className={styles.banner}
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: `linear-gradient(to right, #0f171e 40%, transparent 100%),url("${bannerUrl}")`,
                            backdropPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height:'88vh'
                        }}
                        >
                        <div className={styles.container}>
                            <div >
                                <p className={styles.media_title}>{media.original_title}</p>
                                <div style={{display:'flex', width:"350px", justifyContent:"space-between", marginTop:"15px",alignItems:"center", color: "#8197a4", fontSize:'17px'}}>
                                    <div>IMDb {Number(media.vote_average).toFixed(1)}</div>
                                    <div>1 h 42 min</div>
                                    <div>2020</div>
                                    <div style={{fontSize:"11px", border:"1px solid #8197a4", fontWeight:"bold", borderRadius:"2px", padding:"3px" }}>X-ray</div>
                                    <div style={{fontSize:"11px", border:"1px solid #8197a4", fontWeight:"bold", borderRadius:"2px", padding:"3px" }}>7+</div>
                                    <SpeakerNotesIcon />
                                </div>
                                <div style={{marginTop:"15px", width:"62%",fontSize:"17px", }}>
                                    {media.overview}
                                </div>
                                <div style={{display:'flex', width:"42%", justifyContent:"space-between", marginTop:"15px",alignItems:"center", alignContent:"center", textAlign:"center"}}>
                                    <div onClick={handleClick} className={styles.banner_btn_active}>
                                        <PlayArrowOutlined fontSize="large" style={{color:'white'}} />
                                        <div>Play</div>
                                    </div>
                                    <div onClick={handleClick} className={styles.banner_btn}>
                                        <PlayArrowOutlined fontSize="large" />
                                        <div>Watch Trailer</div>
                                    </div>
                                    <div onClick={handleClick} className={styles.banner_btn_add}>
                                        <div>Add to Watchlist</div>
                                    </div>
                                    <div onClick={handleClick} className={styles.banner_btn_download}>
                                        <GetAppIcon fontSize="large" />
                                        <div>Download</div>
                                    </div>
                                </div>
                                <div className={styles.crew} >
                                    <div className={styles.crew_details} style={{ marginTop:'10px'}}>
                                        <p>Directors</p>
                                        <p style={{color:'#79b8f3'}}>XYZ</p>
                                    </div>
                                    <div className={styles.crew_details}>
                                        <p>Starring</p>
                                        <p style={{color:'#79b8f3'}}>XYZ</p>
                                    </div>
                                    <div className={styles.crew_details}>
                                        <p>Genres</p>
                                        <p style={{color:'#79b8f3'}}>XYZ</p>
                                    </div>
                                    <div className={styles.crew_details}>
                                        <p>Subtitles</p>
                                        <p style={{color:'#79b8f3'}}>XYZ</p>
                                    </div>
                                    <div className={styles.crew_details}>
                                        <p>Audio languages</p>
                                        <p style={{color:'#79b8f3'}}>XYZ</p>
                                    </div>
                                </div>
                            </div>
                            <div> {` `} </div>
                        </div>
                        <div  style={{display: 'flex', justifyContent: 'space-between', marginTop:'50px'}}>
                            <div style={{color: "#8197a4", fontSize:'15px', marginLeft:'60px'}}>
                                By clicking play, <span style={{color:'#79b8f3'}}>you agree to our Terms of Use.</span> 
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginRight:'20px', alignItems: 'center'}}>
                                <div style={{display:'flex', alignItems: 'center', fontSize:'15px', color:'white'}}>
                                    <ShareIcon fontSize="large" style={{color:'white'}} />
                                    <div style={{marginLeft:'10px'}} >Share</div>
                                </div>
                                <div  style={{display:'flex', alignItems: 'center', fontSize:'15px', color:'white'}}>
                                    <CreateIcon fontSize="large" style={{color:'white'}} />
                                    <div  style={{marginLeft:'10px'}}>Feedback</div>
                                </div>
                                <div style={{display:'flex', alignItems: 'center', fontSize:'15px', color:'white'}}>
                                    <HelpOutlineIcon fontSize="large" style={{color:'white'}} />
                                    <div  style={{marginLeft:'10px'}}>Help</div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div>
                        {/* episode list  */}
                        <div style={{width:'100%' }}>
                            <div style={{display: 'flex', width:'93%', height:'auto', margin:'auto', marginTop:'10px', backgroundColor:'#19232C'}}>
                                <div style={{flex:'1'}}>
                                    <img width="80%" src="https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png" alt="test" />
                                </div>
                                <div style={{display: 'flex', flexDirection:'column', flex:'2', marginLeft:'-50px' }}>
                                    <div style={{display: 'flex', color:'white', justifyContent: 'space-between', marginTop:"10px"}}>
                                        <div style={{display:'flex', alignItems: 'center', fontSize:'15px', color:'white'}} >
                                            <div style={{color:'white', backgroundColor:'#0f79af', borderRadius:"50%", height:'50px', width:'50px', display:'flex', alignItems:'center', justifyContent: 'center'}} >
                                                <PlayArrowOutlined fontSize="large" />
                                            </div>
                                            <div style={{fontSize:'17px', marginLeft:'10px'}}> 1. Episode Name... </div>
                                        </div>
                                        <GetAppIcon  fontSize="large" style={{margin:'10px'}} />
                                    </div>
                                    <div style={{display: 'flex',marginTop:'10px', color:"#8197a4", fontSize:'15px', justifyContent: 'space-between', maxWidth:'60%'}}>
                                        <div>
                                            Release Date...
                                        </div>
                                        <div>
                                            Duration...
                                        </div>
                                        <div style={{fontSize:"11px", border:"1px solid #8197a4", fontWeight:"bold", borderRadius:"2px", padding:"3px" }}>7+</div>
                                        <div>Subtitles</div>
                                        <div>Audio languages</div>
                                    </div>
                                    <div style={{display: 'flex',marginTop:'10px', color:"white", fontSize:'15px'}}>
                                        Description........................................................................
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* list card ends */}
                    </div>
                </div>
        }
        {
            media.media_type === 'movie' && 
                <div>
                    
                    <header
                        className={styles.banner}
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: `linear-gradient(to right, #0f171e 40%, transparent 100%),url("${bannerUrl}")`,
                            backdropPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height:'88vh'
                        }}
                        >
                        <div className={styles.container}>
                            <div >
                                <p className={styles.media_title}>{media.original_title}</p>
                                <div style={{display:'flex', width:"350px", justifyContent:"space-between", marginTop:"15px",alignItems:"center", color: "#8197a4", fontSize:'17px'}}>
                                    <div>IMDb {Number(media.vote_average).toFixed(1)}</div>
                                    <div>1 h 42 min</div>
                                    <div>2020</div>
                                    <div style={{fontSize:"11px", border:"1px solid #8197a4", fontWeight:"bold", borderRadius:"2px", padding:"3px" }}>X-ray</div>
                                    <div style={{fontSize:"11px", border:"1px solid #8197a4", fontWeight:"bold", borderRadius:"2px", padding:"3px" }}>7+</div>
                                    <SpeakerNotesIcon />
                                </div>
                                <div style={{marginTop:"15px", width:"62%",fontSize:"17px", }}>
                                    {media.overview}
                                </div>
                                <div style={{display:'flex', width:"42%", justifyContent:"space-between", marginTop:"15px",alignItems:"center", alignContent:"center", textAlign:"center"}}>
                                    <div onClick={handleClick} className={styles.banner_btn_active}>
                                        <PlayArrowOutlined fontSize="large" style={{color:'white'}} />
                                        <div>Play</div>
                                    </div>
                                    <div onClick={handleClick} className={styles.banner_btn}>
                                        <PlayArrowOutlined fontSize="large" />
                                        <div>Watch Trailer</div>
                                    </div>
                                    <div onClick={handleClick} className={styles.banner_btn_add}>
                                        <div>Add to Watchlist</div>
                                    </div>
                                    <div onClick={handleClick} className={styles.banner_btn_download}>
                                        <GetAppIcon fontSize="large" />
                                        <div>Download</div>
                                    </div>
                                </div>
                                <div className={styles.crew} >
                                    <div className={styles.crew_details} style={{ marginTop:'10px'}}>
                                        <p>Directors</p>
                                        <p style={{color:'#79b8f3'}}>XYZ</p>
                                    </div>
                                    <div className={styles.crew_details}>
                                        <p>Starring</p>
                                        <p style={{color:'#79b8f3'}}>XYZ</p>
                                    </div>
                                    <div className={styles.crew_details}>
                                        <p>Genres</p>
                                        <p style={{color:'#79b8f3'}}>XYZ</p>
                                    </div>
                                    <div className={styles.crew_details}>
                                        <p>Subtitles</p>
                                        <p style={{color:'#79b8f3'}}>XYZ</p>
                                    </div>
                                    <div className={styles.crew_details}>
                                        <p>Audio languages</p>
                                        <p style={{color:'#79b8f3'}}>XYZ</p>
                                    </div>
                                </div>
                            </div>
                            <div> {` `} </div>
                        </div>
                        <div  style={{display: 'flex', justifyContent: 'space-between', marginTop:'50px'}}>
                            <div style={{color: "#8197a4", fontSize:'15px', marginLeft:'60px'}}>
                                By clicking play, <span style={{color:'#79b8f3'}}>you agree to our Terms of Use.</span> 
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginRight:'20px', alignItems: 'center'}}>
                                <div style={{display:'flex', alignItems: 'center', fontSize:'15px', color:'white'}}>
                                    <ShareIcon fontSize="large" style={{color:'white'}} />
                                    <div style={{marginLeft:'10px'}} >Share</div>
                                </div>
                                <div  style={{display:'flex', alignItems: 'center', fontSize:'15px', color:'white'}}>
                                    <CreateIcon fontSize="large" style={{color:'white'}} />
                                    <div  style={{marginLeft:'10px'}}>Feedback</div>
                                </div>
                                <div style={{display:'flex', alignItems: 'center', fontSize:'15px', color:'white'}}>
                                    <HelpOutlineIcon fontSize="large" style={{color:'white'}} />
                                    <div  style={{marginLeft:'10px'}}>Help</div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div>
                        {/* carousel */}
                    </div>
                </div>
        }

       </>
    )
}


export default ViewMedia
