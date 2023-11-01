import News from './components/News'
import MoreDownload from './components/MoreDownload'
import Rating from './components/Rating'
import {useDispatch,useSelector}from 'react-redux'
import { getGames } from "../../redux/actions"
import { useEffect } from "react"
import Carrusel from './components/Carrusel.jsx';
import { Box, Container, Typography } from '@mui/material';


const Home = () => {
  const dispatch = useDispatch()
  const game = useSelector((g)=>g?.games)
  
  useEffect(()=>{
   dispatch(getGames())
  },[dispatch])

  const NewsGame =game?.slice(0,5)
  const DownloadsGame=game?.slice(7,12)
  const RatingGame = game?.slice(14,19) 
  const IMGcarrusel=game?.slice(40,50)

  return (
    <Box bgcolor="#1a2a3b">
    <Container maxWidth="xl">
      <Box width="95%" margin="0 2em">
        <Carrusel imagenes={IMGcarrusel}  />
      </Box>
      <Typography variant="h3" component="h3" className="titulo" textAlign="center" color="beige" sx={{ margin: '1em 0em' }}>
         🎉NEWS🎉
      </Typography>
      <Box className="com" display="flex" justifyContent="space-around" flexWrap="wrap">
        {NewsGame?.map((games) => (
          <News
            key={games?.id}
            id={games?.id}
            name={games?.name}
            image={games?.image}
            price={games?.price}
          />
        ))}
      </Box>

      <Typography variant="h3" sx={{ margin: '1em 0em' }} component="h3" className="titulo" textAlign="center" color="beige">
        📥DOWNLOADS📥
      </Typography>
      <Box className="com" display="flex" justifyContent="space-around" flexWrap="wrap">
        {DownloadsGame?.map((games) => (
          <MoreDownload
            key={games?.id}
            id={games?.id}
            name={games?.name}
            image={games?.image}
            price={games?.price}
          />
        ))}
      </Box>

      <Typography variant="h3" sx={{ margin: '1em 0em' }} component="h3" className="titulo" textAlign="center" color="beige">
        🎮RATING🎮
      </Typography>
      <Box className="com" display="flex" justifyContent="space-around" flexWrap="wrap">
        {RatingGame?.map((games) => (
          <Rating
            key={games?.id}
            id={games?.id}
            name={games?.name}
            image={games?.image}
            price={games?.price}
          />
        ))}
      </Box>
    </Container>
  </Box>
  )
}

export default Home