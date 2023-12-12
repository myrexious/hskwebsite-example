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

const CarouselHero = ({ contentImage }: { contentImage: string[] }) => {

  return (
    <>
      <div className='min-w-full h-fit relative'>
        <div className='absolute z-30 w-full h-full flex justify-center text-center'>
          <div className="hero min-w-screen">
            <div className="hero-overlay bg-opacity-50">
            </div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-prose">
                <h1 className="mb-0 md:mb-5 lg:mb-8 text-3xl md:text-5xl lg:text-7xl font-bold">Quality Footwear Components</h1>
                <h2 className="mb-0 md:mb-3 lg:mb-5 text-lg md:text-3xl lg:text-4xl font-bold">Your Global Partner in Excellence</h2>
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-32 lg:w-64 h-1 my-1 md:my-4 bg-gray-200 border-0 rounded" />
                </div>
                <p className=" text-sm md:mt-3 lg:mt-5 lg:text-xl">Dedicated to Excellence, Sustainability, and Innovation: Pioneering the Future of Footwear Components Worldwide</p>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          className='mt-20 md:mt-0'
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
      </div>
    </>
  );
}

export default CarouselHero