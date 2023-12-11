'use client';

import React from 'react'
import Image from 'next/image';

// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CarouselHero = ({ contentImage, children }: { contentImage: string[], children: React.ReactNode }) => {
  // for (let i = 0; i < contentImage.length; i++) {
  //   console.log("CONTENT IMAGE: " + contentImage[i]);
  // }

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        {contentImage.map((item: string, index: number) => (
          <SwiperSlide key={index}>
            <Image src={item}
              alt={item}
              fill={true}
              key={index}
            />
            <img src={item} className='fullImage' style={{ objectFit: 'cover' }} />
          </SwiperSlide>
        ))}
      </Swiper>
      {children}
    </>
  );
}

export default CarouselHero