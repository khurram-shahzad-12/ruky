"use client";
import React, { Fragment, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import sliderone from "../../../public/assets/homeslider/sliderone.jpg";

const HomeSlider = () => {
    return (
        <Fragment>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src={sliderone}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={sliderone}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={sliderone}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </SwiperSlide>

            </Swiper>
        </Fragment>
    )
}

export default HomeSlider