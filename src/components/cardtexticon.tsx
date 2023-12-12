import React from 'react'

const CardTextIcon = ({ title, text="null", children=null }: { title: string, text?: string, children?: React.ReactNode }) => {
  return (
    <>
      <div className="card w-72 h-48 bg-gray-50 shadow-xl justify-center">
        <div className="card-body text-center items-center">
          {children}
          <h2 className="card-title justify-center">{title}</h2>
          {text != "" && <p>{text}</p>}
        </div>
      </div>
    </>
  )
}

export default CardTextIcon