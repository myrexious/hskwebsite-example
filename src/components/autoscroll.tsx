import React from 'react'
import Image from 'next/image'

const AutoScroller = ({ images }: { images: string[] }) => {
  return (
    <div className="w-full h-44 overflow-hidden relative">
      <div className="wrapper absolute flex gap-x-50">
        <section className='autoscroller gap-x-50'>
          {images.map(( item:string, index:number ) => (
            <div key={index} className='w-auto h-44 p-8 relative aspect-square mx-12'>
              <Image
                src={item} 
                alt={item}
                fill
                style={{objectFit:"contain"}}
                className='self-center'
                />
            </div>
          ))}
        </section>
        <section className='autoscroller gap-x-50'>
          {images.map(( item:string, index:number ) => (
            <div key={index} className='w-auto h-44 p-8 relative aspect-square mx-12'>
              <Image
                src={item} 
                alt={item}
                fill
                style={{objectFit:"contain"}}
                className='self-center'
                />
            </div>
          ))}
        </section>
        <section className='autoscroller gap-x-50'>
          {images.map(( item:string, index:number ) => (
            <div key={index} className='w-auto h-44 p-8 relative aspect-square mx-12'>
              <Image
                src={item} 
                alt={item}
                fill
                style={{objectFit:"contain"}}
                className='self-center'
                />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AutoScroller
