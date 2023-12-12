import Link from 'next/link'
import React from 'react'

const Card = ({ data }: { data: cardData }) => {
  return (
    <>
      <div className="card w-80 md:w-92 bg-base-100 shadow-xl">
        <figure>
          <img src={data.image} alt={data.altImg} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl md:text-2xl font-bold">{data.title}</h2>
          <p className="text-sm" style={{ whiteSpace: 'pre-line' }}>{data.desc}</p>
          <div className="card-actions justify-end">
            <Link href={data.link} className="btn btn-outline">
              <span className='px-2'>
                More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card