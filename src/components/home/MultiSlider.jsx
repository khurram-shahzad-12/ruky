"use client";
import React, { Fragment, useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

import sliderthree from "../../../public/assets/homeslider/slidertwo.jpg";
import Heading from '../Heading';

const MultiSlider = ({heading}) => {
    const slides = [sliderthree, sliderthree, sliderthree, sliderthree, sliderthree, sliderthree, sliderthree, sliderthree, sliderthree];



    return (
        <Fragment>
            <Heading heading={heading}/>
            
            <Swiper
            className='mt-6 container'
                // spaceBetween={30}
                modules={[Virtual, Navigation, Pagination]}
                // onSwiper={setSwiperRef}
                slidesPerView={4}
                loop={true}
                centeredSlides={false}
                
                navigation={true}
                // virtual
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={index} style={{width:"320px", height:"200px"}}>
                        <Image
                            src={slideContent}
                            fill
                            alt="Picture of the author"
                            style={{borderRadius:"5px"}}
                            
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    )
}

export default MultiSlider







