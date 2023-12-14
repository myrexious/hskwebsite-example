import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ImageOverlay = ({ item }: { item: servicesInterface }) => {
  return (
    <>
      <div className='aspect-square relative w-54 lg:w-72 md:w-64 bg-gray-900 group rounded-3xl overflow-hidden'>
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
              <div className="m-auto text-xl lg:text-2xl text-white font-bold break-words p-2">
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