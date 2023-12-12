import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ImageOverlay = ({ item }: { item: servicesInterface }) => {
  return (
    <>
      <div className='aspect-square relative bg-gray-900 group rounded-3xl overflow-hidden'>
        <Link href={item.link}>
          <Image
            src={item.image}
            alt={item.altImg}
            fill
            className='group-hover:opacity-25'
            style={{objectFit:"cover"}}
          />
          <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 h-full">
            <div className="flex h-full text-center">
              <div className="m-auto sm:text-sm md:text-lg lg:text-2xl text-white font-bold">
                {item.text}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ImageOverlay