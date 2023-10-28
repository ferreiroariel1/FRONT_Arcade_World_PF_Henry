import React from 'react'
import '../style/DStyle.css'

function MoreDownload({name,image,price}) {
  return (
    <div className='cards'>
        <img className='images' src={image} alt="" />
    <div className='TPS'>
    <h5 className='titles'>{name}</h5>
    <p className='prices'>$/{price}</p>
    </div>
    </div>
  )
}

export default MoreDownload