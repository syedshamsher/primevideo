import React from 'react'
import { BannerCarousel } from '../../Components/BannerCarousel/BannerCarousel'
import { SimpleCarousel } from '../../Components/SimpleCarousel/SimpleCarousel'
import { TwoRowedCarousel } from '../../Components/TwoRowedCarousel/TwoRowedCarousel'

export const Feed = () => {
    return (
        <div>
            <div style={{marginBottom:'20px'}}>
                <BannerCarousel/>
            </div>
            <div style={{marginBottom:'20px'}}>
                <TwoRowedCarousel/>
            </div>
            <div style={{marginBottom:'20px'}}>
                <SimpleCarousel/>
            </div>
        </div>
    )
}
