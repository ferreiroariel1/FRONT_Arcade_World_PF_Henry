
import '../style/NewsStyle.css'

function News({name,image,price}) {
  return (
    <div className='card'>
      <img className='image' src={image} alt="" />
        <div className='TP'>
        <h5 className='title'>{name}</h5>
        <p className='price'>$/{price}</p>
        </div>
    </div>
  )
}

export default News