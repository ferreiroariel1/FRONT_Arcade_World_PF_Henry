import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Carrusel({imagenes}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 9000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: false,
    useTransform: true,
  };
  const images = imagenes?.map((h)=>{
    return{
      imagen:h.image,
      name:h.name
    }
  })
  return (
    <Slider {...settings}>
      {
        images?.map((i)=>{
          return(
            <div>
              <img src={i?.imagen} alt="" style={{width:'100%',height:'30em'}} />
            <h2>{i?.name}</h2>
            </div>
          )
        })
      }
    </Slider>
  )
}

export default Carrusel