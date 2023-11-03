import React, { useEffect } from 'react'
import {Card,Box, Button, CardContent,Typography }from '@mui/material'
import { getGames,GetUser } from '../../redux/actions'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useDispatch, useSelector } from 'react-redux'

function ViewMain() {
    const dispatch=useDispatch()
    const game = useSelector((G)=>G?.games)
    const user = useSelector((U)=>U.user)
    console.log(user)
    useEffect(()=>{
        dispatch(getGames())
        dispatch(GetUser())
       },[dispatch])
       const UserLength = user.length
       const GamesLength = game.length
 
    const cardStyle = {
    width: '14em',
    height:'12em', 
    overflow: 'hidden',
    backgroundColor: '#333',
     color: 'white' ,
     display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    margin:'1em 0em 1em 1em ',

  }
  const BoxCard={
    display:'flex',
    width:'100%',
    flexWrap:'wrap'
  }
    const estiloBox = {
      backdropFilter: 'blur(1px)', 
      borderRadius: '100%', 
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo semitransparente
      padding: '20px 0px',
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
  return (
    <Box bgcolor='#334' style={BoxCard} gap={4}>
     {/*  //?Card Games ↓*/} 
     <Box >
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
          {/*  //?Card Usuers ↓*/} 
        <Box >
      <Card style={cardStyle} >
        <CardContent>
        <Box style={estiloBox} >
            <PersonIcon sx={{ fontSize: 36 }}/>
        </Box>
            <Typography variant='h5' component={'div'}>
                USERS
            </Typography>
          <Typography>
          {UserLength}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
                  {/*  //?Card Buys ↓*/} 
        <Box >
      <Card style={cardStyle} >
        <CardContent>
        <Box style={estiloBox} >
            <LocalMallIcon sx={{ fontSize: 35 }}/>
        </Box>
            <Typography variant='h5' component={'div'}>
                BUYS
            </Typography>
          <Typography>
          pendiente
                    </Typography>
                </CardContent>
            </Card>
        </Box>
          {/*  //?Card Eyes ↓*/} 
        <Box >
      <Card style={cardStyle} >
        <CardContent>
        <Box style={estiloBox} >
            <VisibilityIcon sx={{ fontSize: 35 }}/>
        </Box>
            <Typography variant='h5' component={'div'}>
            LOGIN
            </Typography>
          <Typography>
          pendiente
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </Box>
  )
}

export default ViewMain