import React from 'react'
import Image from 'next/image'
const Sustainability = () => {
  return (
    <>
      <div className="hero h-[36rem]" style={{ backgroundImage: 'url(/images/stock/solar_plant.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Sustainability</h1>
          </div>
        </div>
      </div>

      <div className='flex flex-row-reverse text-justify justify-center bg-teal-950 h-fit'>
        <div className='max-w-6xl px-5 m-auto py-5'>
          <div className='flex flex-row flex-wrap lg:flex-nowrap space-x-5 lg:space-x-10 justify-center'>
            <div className='relative aspect-video lg:aspect-[3/4] h-36 md:h-56 lg:h-[36rem] sm:md:my-4'>
              <Image
                src="/images/stock/solar_panel_002.jpg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col sm:md:items-center justify-center leading-relaxed'>
              <blockquote className="text-gray-300 mt-4 text-left space-y-6">
                <div className='flex flex-row space-x-4 items-center'>
                  <hr className="h-20 w-1 my-4 bg-yellow-300 border-0 rounded" />
                  <h2 className='text-4xl font-semibold'>
                    Reducing Carbon Footprint<br />(Solar Panel)
                  </h2>
                </div>
                <p className='text-xl'>Steadfast in our commitment to lead the footwear industry in environmental stewardship, we are thrilled to announce a groundbreaking partnership with PT. Solarion to implement cutting-edge rooftop solar panels at our HSK Rembang and HSK Jepara facilities, boasting capacities of 1,400 KWp and 1,100 KWp, respectively.</p>
                <p className='text-xl'>More than mere power sources, these installations signify our dedication to a greener future and a significant reduction in our reliance on non-renewable energy. Set for completion by February 2024, this initiative goes beyond energy savings; it is a testament to our unwavering commitment to minimize the carbon footprint associated with midsole production.</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row-reverse text-justify justify-center bg-white-200 h-fit'>
        <div className='max-w-6xl px-5 m-auto py-5'>
          <div className='flex flex-row-reverse flex-wrap lg:flex-nowrap space-x-5 lg:space-x-10 justify-center'>
            <div className='relative aspect-video lg:aspect-square h-36 md:h-56 lg:h-[28rem] sm:md:my-4'>
              <Image
                src="/images/factory-materials/biocompound.jpg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col sm:md:items-center justify-center leading-relaxed'>
              <blockquote className=" mt-4 text-left space-y-6">
                <div className='flex flex-row space-x-4 items-center'>
                  <hr className="h-14 w-1 bg-green-500 border-0 rounded" />
                  <h2 className='text-4xl font-semibold'>
                  Bio-Based Material
                  </h2>
                </div>
                <p className='text-xl'>Beyond traditional recycling and waste reduction, our commitment to sustainability propels us into exploring innovative solutions like integrating bio-based materials into our compounds, with successes like the adoption of Braskem for mass production. </p>
                <p className='text-xl'>Our journey towards sustainability is dynamic, marked by ongoing research and development to uncover and implement new eco-friendly alternatives. We persistently challenge conventions, striving to redefine possibilities in sustainable materials for the footwear industry, weaving sustainability into the very fabric of our operations.</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row-reverse text-justify justify-center bg-green-200 h-fit'>
        <div className='max-w-6xl px-5 m-auto py-5'>
          <div className='flex flex-row flex-wrap lg:flex-nowrap space-x-5 lg:space-x-10 justify-center items-center'>
            <div className='relative aspect-video lg:aspect-square h-36 md:h-56 lg:h-[24rem] sm:md:my-4'>
              <Image
                src="/images/factory-machines/eva_recycle_001.jpeg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col sm:md:items-center justify-center leading-relaxed'>
              <blockquote className="mt-4 text-left space-y-6">
                <div className='flex flex-row space-x-4 items-center'>
                  <hr className="h-14 w-1 bg-teal-950 border-0 rounded" />
                  <h2 className='text-4xl font-semibold'>EVA Recycling</h2>
                </div>
                <p className='text-lg'>Our EVA recycling facility, conveniently located in the Kudus area (just a 30-minute drive from our HSK Jepara facility), is equipped to process rejected parts and EVA waste, transforming them into eco-friendly recycled EVA sheets. Choosing our recycled EVA sheets brings multiple advantages: they efficiently serve as valuable fillers in virgin EVA compounds, optimizing product performance; our recycling process ensures uniform distribution of materials within the compound, guaranteeing consistent quality; and our commitment to sustainability is evident through a dust-free and environmentally conscious recycling process.</p>
                <p className='text-lg'>Currently, we operate a single production line with a total capacity of 110 tons per month, ensuring a steady supply of high-quality recycled EVA sheets to meet your needs. We are dedicated to sustainability and actively work towards reducing and reusing the waste we generate, aligning with our mission for a greener tomorrow.</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sustainability