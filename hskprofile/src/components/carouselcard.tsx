'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';

import Card from './card';

const CarouselCard = ({ data }: { data: cardData[] }) => {
  return (
    <>
      <Swiper
        navigation={true}
        centeredSlides={true}
        modules={[Navigation]}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='flex items-center align-center justify-center md:mb-8'>
              <Card data={item} key={index}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CarouselCard