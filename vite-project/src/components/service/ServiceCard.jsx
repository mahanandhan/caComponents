import React from 'react'

const ServiceCard = ({title, dis}) => {
  return (
    <div className='card'>
        <div className='card-part'>
            <h1 className='title'>title: {title}</h1>
            <p className='dis'>discription: {dis}</p>
        </div>
    </div>
  )
}

export default ServiceCard
