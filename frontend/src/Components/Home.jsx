import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchAllProducts } from '../Redux/ProductsRedux/actions'

import 'antd/dist/antd.css';
import { Carousel } from 'antd';

import { useHistory } from 'react-router-dom';
import { Rate } from 'antd';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const Home = () => {


    const products = useSelector(state => state.products.products)
    const bestoffers = useSelector(state => state.products.bestoffers)
    const moreoffers = useSelector(state => state.products.moreoffers)
    const isLoading = useSelector(state => state.products.isLoading)
    const history = useHistory()
    const [offers, setOffers] = useState(null)
    const [currSong, setCurrSong] = useState("song2")
    const [offers2, setOffers2] = useState(null)
    const dispatch = useDispatch()
    console.log(isLoading, products)

    React.useEffect(() => {
        if (products.length == 0) dispatch(fetchAllProducts())
    }, [products])



    const contentStyle = {
        height: '250px',
        color: '#ffffff',
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        margin: "auto",
        background: ' linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        
    };
    const contentStyle2 = {
        borderRadius: "10px",
        maxWidth: "350px",    
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        margin:"auto"
        
    };

    const handleCClick = (id) => {
        history.push(`/products/${id}`)
    }

    if (isLoading)
        return <div>Loading...  </div>
    return (
        <div>

            <button onClick={()=>setCurrSong("song1")}>Song1</button>
            <button onClick={()=>setCurrSong("song2")}>Song2</button>
            <button onClick={()=>setCurrSong("song3")}>Song3</button>
            
            <Carousel autoplay>
                    {
                        bestoffers.length > 0 && bestoffers.map((item) => (
                            <div>
                                <div key={item._id} style={{width:"800px",margin:"auto",height:"400px",backgroundImage:`url(${item.backdrop_path})`, backgroundSize: "cover" }} onClick={() => handleCClick(item._id)}>
                                    <img src={item.poster_path} alt="" width="150px" style={{ borderRadius: "70px", margin:"auto" }} />
                                    <div style={{ display: "flex", flexDirection: "column", margin: "50px" }}>
                                        <div style={{ fontSize: "40px", fontFamily: "Alegreya", color:"whitesmoke" }}>{item.original_title}</div>                                        
                                    </div>
                                 

                                </div></div>
                        ))
                    }
            </Carousel>

            <video width="500px" controls autoPlay >
                <source src={`http://localhost:8001/video/${currSong}`} type="video/mp4"/>
            </video>

           

        </div>
    )
}


export default Home
