import React, { useEffect} from 'react'
import {Card,Box, CardContent,Typography }from '@mui/material'
import { getGames,GetUser } from '../../redux/actions'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import { useDispatch, useSelector } from 'react-redux'
// import Chart from 'chart.js/auto';

function ViewMain() {
    const dispatch=useDispatch()
    const game = useSelector((G)=>G?.games)
    const user = useSelector((U)=>U.user)
    // const chartRef = useRef(null);

    // useEffect(() => {
    //   const ctx = chartRef.current.getContext('2d');
  
    //   new Chart(ctx, {
    //     type: 'line', // Usamos el tipo de gráfico 'line' para crear un gráfico de área
    //     data: {
    //       labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    //       datasets: [{
    //         label: 'Dataset de Área',
    //         data: [10, 20, 30, 25, 35], // Tus datos aquí
    //         fill: true, // Rellenar área bajo la línea
    //         borderColor: 'rgba(75, 192, 192, 1)', // Color del borde de la línea
    //         backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color del área
    //         tension: 0.4, // Controla la curvatura de la línea
    //       }]
    //     },
    //     options: {
    //       responsive: true, // Permite que el gráfico sea responsive
  
    //     }
    //   });
    // }, []);
    useEffect(()=>{
        dispatch(getGames())
        dispatch(GetUser())
       },[dispatch])
       const UserLength = user.length
       const GamesLength = game.length
 
    const cardStyle = {
    width: '15em',
    height:'10em', 
    backgroundColor: '#37474f',
     color: 'white' ,
     display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    margin:'1em 0em 1em 0em ',

  }
  const BoxCard={
    display:'flex',
    width:'100%',
    flexWrap:'wrap',
    justifyContent:'space-evenly',
  }
    const estiloBox = {
      backdropFilter: 'blur(1px)', 
      borderRadius: '100%', 
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding:'1em' // Fondo semitransparente
 
    };
  return (
    <Box bgcolor='#546e7a' style={BoxCard} >
     {/*  //?Card Games ↓*/} 
     <Box >
      <Card style={cardStyle} >
        <CardContent>
        <Box style={estiloBox} >
            <SportsEsportsIcon sx={{ fontSize: 30 }} />
        </Box>
          <Typography variant='h6'>
          {GamesLength}
                    </Typography>
            <Typography variant='p' component={'p'} color={'#cfd8dc'}>
               Total Games
            </Typography>
                </CardContent>
            </Card>
        </Box>
          {/*  //?Card Usuers ↓*/} 
        <Box >
      <Card style={cardStyle} >
        <CardContent>
        <Box style={estiloBox} >
            <PersonIcon sx={{ fontSize: 30}}/>
        </Box>
          <Typography variant='h6'>
          {UserLength}
                    </Typography>
            <Typography variant='p' component={'p'} color={'#cfd8dc'}>
                Total Users
            </Typography>
                </CardContent>
            </Card>
        </Box>
                  {/*  //?Card Buys ↓*/} 
        <Box >
      <Card style={cardStyle} >
        <CardContent>
        <Box style={estiloBox} >
            <LocalMallSharpIcon sx={{ fontSize: 30}}/>
        </Box>
          <Typography variant='h6'>
          0
                    </Typography>
            <Typography variant='p' component={'p'} color={'#cfd8dc'}>
                Total Buys
            </Typography>
                </CardContent>
            </Card>
        </Box>
          {/*  //?Card Eyes ↓*/} 
        <Box >
      <Card style={cardStyle} >
        <CardContent>
        <Box style={estiloBox} >
            <VisibilityIcon sx={{ fontSize: 30}}/>
        </Box>
        <Box>
          <Typography variant='h6'>
        0
                    </Typography>
            <Typography variant='p' component={'p'} color={'#cfd8dc'}>
            Total Login
            </Typography>
        </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
  )
}

export default ViewMain