import React, { useEffect } from 'react'
import {Card,Box, Button, CardContent,Typography }from '@mui/material'
import { getGames } from '../../redux/actions'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useDispatch, useSelector } from 'react-redux'

function ViewMain() {
    const dispatch=useDispatch()
    const game = useSelector((G)=>G?.games)
    useEffect(()=>{
        dispatch(getGames())
       },[dispatch])
       const GamesLength = game.length
 
    const cardStyle = {
    width: '12em',
    maxheight:'16em', 
    overflow: 'hidden',
    backgroundColor: '#333',
     color: 'white' ,
     display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexdirection:'column'
  }
  const BoxCard={
    display:'flex',
    width:'80%'
  }
    const estiloBox = {
      backdropFilter: 'blur(5px)', 
      borderRadius: '100%', 
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo semitransparente
      padding: '20px 0px',
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
  return (
    <Box bgcolor='#334'>
     <Box style={BoxCard}>
      <Card style={cardStyle} >
        <CardContent>
        <Box style={estiloBox} >
            <SportsEsportsIcon sx={{ fontSize: 40 }}/>
        </Box>
            <Typography variant='h5' component={'div'}>
                GAMES 
            </Typography>
          <Typography>
          {GamesLength}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </Box>
  )
}

export default ViewMain