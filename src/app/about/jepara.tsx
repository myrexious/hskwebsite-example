import React from 'react'
import Image from 'next/image'
import LineChartComp from '@/components/chart'

import { hskj_data, hskj_labels } from '../../../constants/chartConstants'

const Jepara = () => {
  return (
    <>
      <div className='flex text-left justify-center bg-center py-10'>
        <div className='max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5 text-justify'>
          <div className='flex justify-center text-center font-white'>
            <h2 className="text-4xl font-semibold leading-relaxed">Forging Ahead in Footwear:<br/>The Journey of PT Handal Sukses Jepara</h2>
          </div>
          <div className='flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-8'>
            <div className='relative max-w-sm md:max-w-md aspect-video h-48 sm:md:my-4 lg:ml-10'>
              <Image
                src="/images/factory-photo/HSKJ_001.jpg"
                alt="people"
                fill
                style={{ objectFit: 'contain' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <p className="text-lg font-medium">Established in 2017, PT Handal Sukses Jepara stands as a testament to our strategic expansion into the heart of Central Java, marking our first presence in the region as shoe manufacturing began to find its new hub in this locale. Situated in the renowned city of Jepara, our facility has rapidly become synonymous with mass production, playing a pivotal role in catering to the growing demands of the footwear industry.</p>
          </div>
          <p className="text-lg font-medium mt-4">Embarking on this journey, we were initially met with challenges in the form of a workforce unfamiliar with the intricacies of shoe manufacturing. The dearth of experienced workers in the area meant we had to invest substantially in training and skill development. Yet, with perseverance and the steadfast guidance of our exceptional management team, we triumphed over these hurdles. Today, we run the plant seamlessly, reflecting our commitment to excellence and adaptability.</p>
          <p className="text-lg font-medium mt-4">Distinctive from our other plants, PT Handal Sukses Jepara boasts a specialized in-house painting line dedicated exclusively for EVA footwear components. This unique feature not only emphasizes our commitment to innovation and excellence but also positions us at the forefront of delivering high-quality, aesthetically pleasing EVA footwear to our esteemed clients.</p>
          <h2 className='text-2xl font-semibold mt-4'>Growth</h2>
          
          <div className='flex flex-row flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-10'>
            <div className='relative aspect-[3/4] h-72 sm:md:my-4'>
              <Image
                src="/images/factory-photo/HSKJ_Internal_001.jpg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center items-center'>
              <p className="text-lg font-medium">HSK Jepara, nestled in the heart of Central Java, began its transformative journey in 2012. With just 14 IMEVA machines at its inception, the company set out with a vision to carve a niche for itself in the ever-evolving footwear industry. The commitment to quality and innovation is evident in how the company has expanded its production capabilities, steadily growing to reach an impressive production capacity of 3.4 million pairs per month.</p>
              <p className="text-lg font-medium mt-4">The graph below provides a visual representation of HSK Jepara's production capacity over the years. As the footwear industry's focus continues to shift towards the Central Java region, HSK Jepara stands as a testament to resilience, strategic growth, and the pursuit of excellence. The company's trajectory is not just a tale of numbers, but a story of passion, perseverance, and the spirit of enterprise.</p>
            </div>
          </div>
          <LineChartComp label={hskj_labels} dataset={hskj_data}/>
        </div>
      </div>
    </>
  )
}

export default Jepara