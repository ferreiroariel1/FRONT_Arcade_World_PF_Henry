import React from 'react'
import '../style/RatingStyle.css'

function Rating({name,image,price}) {
  return (
    <div>
        <img src={image} alt="" style={{width:'12em'}}/>
        <h5>{name}</h5>
        <p>{price}</p>
    </div>
  )
}

export default Rating