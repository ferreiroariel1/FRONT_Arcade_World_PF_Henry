import News from './components/News'
import MoreDownload from './components/MoreDownload'
import Rating from './components/Rating'
import {useDispatch,useSelector}from 'react-redux'
import { getGames } from "../../redux/actions"
import { useEffect } from "react"
import Carrusel from './components/Carrusel'
import Paginate from "../../components/paginate/Paginate";



const Home = () => {
  const dispatch = useDispatch()
  const game = useSelector((g)=>g.games)
  useEffect(()=>{
   dispatch(getGames())
  },[])
  const NewsGame =game.games.slice(0,6)
  const DownloadsGame=game.games.slice(7,13)
  const RatingGame = game.games.slice(14,20) 
  return (
    <div>
<div>
  <Carrusel/>
</div>
       <div className="News">
        <h2>NEWS</h2>
       {
        NewsGame.map((games)=>{
          
          return(
            <News 
              keys={games.id}
              name={games.name}
              image={games.image}
              price={games.price}
            />
          )
        })
       }
       </div>
       <div className="Downloads">
        <h2>DOWNLOADS</h2>
       {
        DownloadsGame.map((games)=>{
          return(
            <MoreDownload 
              keys={games.id}
              name={games.name}
              image={games.image}
              price={games.price}
            />
          )
        })
       }
       </div>
       <div className="Rating">
        <h2>RATING</h2>
       {
        RatingGame.map((games)=>{
          return(
            <Rating 
              keys={games.id}
              name={games.name}
              image={games.image}
              price={games.price}
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