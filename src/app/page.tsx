import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/card'
import CarouselCard from '@/components/carouselcard'
import CarouselHero from '@/components/carouselhero'
import ImageOverlay from '@/components/imageoverlay'
import AutoScroller from '@/components/autoscroll'

import {
  locationsData,
  servicesData,
  partnersData,
  approvedBrands,
  materialPartners
} from '../../constants/homeConstants'
import SectionHeader from '@/components/sectionheader'


const Home = () => {
  const carouselImages: string[] = [
    '/images/factory-photo/HSKJ_001.jpg',
    '/images/factory-photo/HSKJ_004.jpg',
    '/images/factory-photo/HSKR_001.jpg',
    '/images/factory-photo/HSKR_005.JPG',
    '/images/factory-photo/HSKT_001.jpg',
    '/images/factory-photo/HSKT_Internal_001.jpg',
  ]

  return (
    <>
      <CarouselHero contentImage={carouselImages} />
      <SectionHeader text="Our Locations" />
      <div className='sm:mt-4 md:mt-6 lg:mt-12'>
        <div className='lg:flex flex-row space-x-4 items-center justify-center hidden'>
          {locationsData.map((item: cardData, index: number) => (
            <div key={index}>
              <Card data={item} />
            </div>
          ))}
        </div>
        <div className='flex lg:hidden md:px-52 items-center justify-center'>
          <CarouselCard data={locationsData} />
        </div>
      </div>
      <SectionHeader text="Our Services" />
      <div className='sm:mt-4 md:mt-6 lg:mt-12 mx-4'>
        <div className='flex items-center justify-center'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center'>
            {servicesData.map((item: servicesInterface, index: number) => (
              <div key={index}>
                <ImageOverlay item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionHeader text="Partnerships" />
      <div className='mt-8'>
        <div className="flex items-center justify-center">
          <span className='text-md lg:text-2xl font-semibold'>Business Partners</span>
        </div>
        <div className='mt-2'>
          <AutoScroller images={partnersData} />
        </div>
        <div className="flex items-center justify-center mt-12">
          <span className='text-md lg:text-2xl font-semibold'>Approved Brands</span>
        </div>
        <div className='mt-2'>
          <AutoScroller images={approvedBrands} />
        </div>
        <div className="flex items-center justify-center mt-12">
          <span className='text-md lg:text-2xl font-semibold'>Material Partners</span>
        </div>
        <div className='mt-2'>
          <AutoScroller images={materialPartners} />
        </div>
      </div>
      <SectionHeader text="Sustainability" />
      <div className='flex text-justify justify-center bg-auto mt-8'>
        <div className='max-w-sm md:max-w-md lg:max-w-5xl px-5'>
          <div className='flex flex-row relative text-center justify-center min-w-full space-x-10 lg:space-x-20'>
            <div className='relative aspect-square h-36 md:h-48 bg-white-200 rounded-full shadow-xl'>
              <Image
                src="./images/factory-photo/HSKJ_Solar.png"
                alt="HSKJ Solar"
                fill
                className='rounded-full'
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className='relative aspect-square h-36 md:h-48 bg-white-200 rounded-full shadow-xl'>
              <Image
                src="./images/factory-photo/HSKR_Solar.png"
                alt="HSKR Solar"
                fill
                className='rounded-full'
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <blockquote className='mt-8'>
            <p className="text-2xl italic font-medium text-gray-900">"Our commitment to sustainability is woven into our promise to the future generation and the environment. We prioritize eco-friendly initiatives and aim to surpass industry standards, setting new benchmarks for sustainable business practices."</p>
          </blockquote>
          <div className='flex text-justify justify-center mt-4'>
            <Link href="/sustainability" className='btn btn-warning '>Find Out More</Link>
          </div>
        </div>
      </div>
      <SectionHeader text="Contact Us" />
      <div className='flex text-justify justify-center bg-auto my-8'>
        <div className='max-w-5xl px-5'>
          <div className='flex flex-row lg:flex-row flex-wrap lg:flex-nowrap items-center justify-center'>
            <div className='relative aspect-square h-80 bg-white-200 rounded-3xl shadow-xl lg:mr-8 lg:mb-4'>
              <Image
                src="./images/factory-photo/HSKR_Internal_001.jpg"
                alt="HSKR Solar"
                fill
                className='rounded-3xl'
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className='text-left text-xl font-normal text-gray-900 mt-5 lg:mt-0'>
              <div className='px-4'>
                <p>At PT Handal Sukses Karya, collaboration is ingrained in our identity, extending beyond the confines of a traditional company. Whether you're exploring our diverse offerings, seeking information, or contemplating potential partnerships, we wholeheartedly invite you to connect. Our commitment to collaboration and open dialogue ensures that every inquiry, question, or suggestion becomes a valuable catalyst for improvement.</p>
                <p className='mt-4 font-medium'>Together, let's transform possibilities into impactful outcomes.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <Link href="/contact-us" className='mt-4 btn btn-warning'>
              Collaborate with us
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home