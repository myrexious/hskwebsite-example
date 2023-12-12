import React from 'react'
import Image from 'next/image'

const Rembang = () => {
  return (
    <>
      <div className='flex text-left justify-center bg-center py-10'>
        <div className='max-w-sm md:max-w-2xl lg:max-w-5xl lg:px-5 text-justify'>
          <div className='flex justify-center text-center font-white'>
            <h2 className="text-4xl font-semibold leading-relaxed">Our Journey in Rembang:<br/>Handal Sukses Karya's Newest Milestone</h2>
          </div>
          <div className='flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center mt-8'>
            <div className='relative max-w-sm md:max-w-md aspect-video h-48 sm:md:my-4 lg:ml-10'>
              <Image
                src="/images/factory-photo/HSKR_001.jpg"
                alt="people"
                fill
                style={{ objectFit: 'contain' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <p className="text-lg font-medium">In 2021, PT. Handal Sukses Karya embarked on a new chapter with the inauguration of our Rembang facility in Central Java. This newest addition to our legacy is strategically situated on a vast 16-hectare expanse. Interestingly, only 40% of this land is currently developed, offering us an expansive canvas to dream bigger, innovate further, and solidify our commitment to growth and excellence.</p>
          </div>
          <p className="text-lg font-medium mt-4">The journey in Rembang was not without its challenges. The region, while abundant in potential, lacked the infrastructure and skilled workforce that are often vital for such ambitious endeavors. However, with our steadfast determination and vision, we managed to rapidly ramp up operations. This swift progress is a testament to our team's resilience, adaptability, and relentless pursuit of our goals.</p>

          <div className='flex flex-row flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-10'>
            <div className='relative aspect-video h-40 sm:md:my-4'>
              <Image
                src="/images/factory-photo/HSKR_002.jpg"
                alt="people"
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-3xl shadow-xl'
              />
            </div>
            <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center items-center'>
              <p className="text-lg font-medium">Our ambitions for the Rembang facility don't just stop at increasing its physical footprint. We are already laying down the groundwork to introduce cutting-edge technologies. This forward-thinking approach aims to optimize our production processes, enabling us to deliver high-quality products at a more competitive cost to our clients.</p>
            </div>
          </div>
          <p className="text-lg font-medium mt-4">Remarkably, despite being the latest addition to our lineage, the Rembang plant has quickly risen to prominence. Today, it proudly stands as the highest producer among our three factories. This achievement, while significant, is just the beginning. With our eyes set on the future, we are driven by our passion for innovation, quality, and the promise of what lies ahead.</p>
          
        </div>
      </div>
    </>
  )
}

export default Rembang