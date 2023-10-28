import React from 'react'
import '../style/RatingStyle.css'

function Rating({name,image,price}) {
  return (
    <div className='cardss'>
        <img className='imagess' src={image} alt=""/>
        <div className='TPSS'>
        <h5 className='titless'>{name}</h5>
        <p className='pricess'>{price}</p>
        </div>
    </div>
  )
}

export default Rating