import News from './components/News'
import MoreDownload from './components/MoreDownload'
import Rating from './components/Rating'
import {useDispatch,useSelector}from 'react-redux'
import { getGames } from "../../redux/actions"
import { useEffect } from "react"
import Carrusel from './components/Carrusel'
import Paginate from "../../components/paginate/Paginate";
import './style/StyleHome.css'



const Home = () => {
  const dispatch = useDispatch()
  const game = useSelector((g)=>g?.games)
  useEffect(()=>{
   dispatch(getGames())
  },[])
  const NewsGame =game?.games?.slice(0,5)
  const DownloadsGame=game?.games?.slice(7,12)
  const RatingGame = game?.games?.slice(14,19) 
  const IMGcarrusel=game?.games?.slice(23,29)
  return (
    <div className='Home'>
<div>
  <Carrusel imagenes={IMGcarrusel}/>
</div>
        <h2 style={{margin:'2em'}}>NEWS</h2>
       <div className="News com">
       {
        NewsGame?.map((games)=>{
          
          return(
            <News 
              keys={games?.id}
              name={games?.name}
              image={games?.image}
              price={games?.price}
            />
          )
        })
       }
       </div>
        <h2 style={{margin:'2em'}}>DOWNLOADS</h2>
       <div className="Downloads com">
       {
        DownloadsGame?.map((games)=>{
          return(
            <MoreDownload 
              keys={games?.id}
              name={games?.name}
              image={games?.image}
              price={games?.price}
            />
          )
        })
       }
       </div>
        <h2 style={{margin:'2em'}}>RATING</h2>
       <div className="Rating com">
       {
        RatingGame?.map((games)=>{
          return(
            <Rating 
              keys={games?.id}
              name={games?.name}
              image={games?.image}
              price={games?.price}
            />
          )
        })
       }
       <div>
         <Paginate/>

       </div>
    </div>
  </div>
  )
}

export default Home