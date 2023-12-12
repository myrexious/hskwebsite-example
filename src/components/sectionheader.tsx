import React from 'react'

const SectionHeader = ({text}:{text:string}) => {
  return (
    <>
      <div className='max-w-prose min-w-full mt-16 md:mt-20 lg:mt-28'>
        <div className='flex flex-row sm:space-x-3 lg:space-x-10 items-center justify-center'>
          <hr className="sm:w-6 md:w-16 lg:w-32 h-1 my-4 bg-yellow-300 border-0 rounded" />
          <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold">{text}</h3>
          <hr className="sm:w-6 md:w-16 lg:w-32 h-1 my-4 bg-yellow-300 border-0 rounded" />
        </div>
      </div>
    </>
  )
}

export default SectionHeader