import React from 'react'
import Image from 'next/image'
import LineChartComp from '@/components/chart'

import { hskt_data, hskt_labels } from '../../../constants/chartConstants'

const Tangerang = () => {
  return (
    <>
      <div className='flex text-left justify-center bg-center py-10'>
        <div className='max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5 text-justify'>
          <div className='flex justify-center text-center font-white'>
            <h2 className="text-4xl font-semibold leading-relaxed">From Humble Beginnings to Meteoric Rise:<br/>A Brief Yet Rapid History!</h2>
          </div>
          <div className='flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-8'>
            <div className='relative max-w-sm md:max-w-md aspect-video h-52 sm:md:my-4 lg:ml-10'>
              <Image
                src="./images/factory-photo/HSKT_001.jpg"
                alt="people"
                fill
                style={{ objectFit: 'contain' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <p className="text-lg font-medium">Established in 2012, PT. Handal Sukses Karya Tangerang, based in Tangerang, Banten, has swiftly carved a niche for itself, becoming the top-tier EVA midsole producer in Indonesia's dynamic footwear industry. Our rapid expansion is evident as we've stretched our footprint to Central Java in a short span. Today, despite facing challenges, we successfully manage three factories situated in Tangerang, Jepara, and Rembang.</p>
          </div>
          <p className="text-lg font-medium mt-4">We possess all the necessary equipment to produce EVA components and bottom midsoles. Our commitment to growth and excellence positions us as a premier manufacturer in the industry. As we remain steadfast in our pursuit of excellence and expansion, we not only aim to elevate our production capacities but also embrace innovative technologies, ensuring we remain at the forefront of the footwear industry's evolution.</p>
          <h2 className='text-2xl font-semibold mt-4'>Growth</h2>
          
          <div className='flex flex-row flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-10'>
            <div className='relative aspect-[3/4] h-72 sm:md:my-4'>
              <Image
                src="./images/factory-photo/HSKT_Internal_001.jpg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center items-center'>
              <p className="text-lg font-medium">In the dynamic sphere of industry and manufacturing, PT. Handal Sukses Tangerang stands as a testament to adaptability, vision, and resilience. From its early days, the company surged forward, establishing a reputation for unparalleled quality and pioneering innovations. The narrative that follows delves into the trajectory of our company's production evolution over the past decade.</p>
              <p className="text-lg font-medium mt-4">True growth transcends mere statistics. It embodies the tenacity, devotion, and collective drive of every member associated with our esteemed organization. For PT. Handal Sukses Tangerang, this growth wasn't just about expanding but evolving with an eye towards market leadership and a heart set on sustainable, eco-conscious strategies.</p>
            </div>
          </div>
          <p className="text-lg font-medium mt-4">The evolution of our production capacity mirrors our unwavering commitment to catering to our clients' demands without sacrificing the hallmark quality we're celebrated for. In our zenith years, we continually funneled resources into our facilities, modern technology, and skilled workforce. However, recognizing the strategic benefits of Central Java, we took the significant step of relocating machines and transitioning to mass production there, leading to a sharp decrease in our Tangerang-based output.</p>
          <p className="text-lg font-medium mt-4">The subsequent section sketches our production journey over the years. It's a vivid encapsulation of our milestones, triumphs, and strategic pivots. As you engage with the data, let it stand as a testament to PT. Handal Sukses Tangerang's enduring commitment to industry excellence and our pledge to consistently serve the best.</p>
          <LineChartComp label={hskt_labels} dataset={hskt_data}/>
        </div>
      </div>
    </>
  )
}

export default Tangerang