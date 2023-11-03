import React from 'react'
import { Box, Typography } from '@mui/material'
// import { getGames } from '../../redux/actions'
import {useSelector } from 'react-redux'
import { DataGridPro } from '@mui/x-data-grid-pro';


function TableGames() {
 const games=useSelector((g)=>g.games)
 const rows = games.map((G)=>{
    return{
        id:G.id,
        name:G.name,
        price:G.price,
        plataforms:G.platforms[0],
        genres:G.genres[0]
    
    }
 })
 const styleTable={
  color:'black',
  width:'98%'
 }
 const BoxMain={
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    height: '100vh',
 }
  return (
   <Box sx={BoxMain}>
    <Box >
      <Typography variant='h2' component={'h2'}>
       Table Games
      </Typography>
    </Box>
    <DataGridPro style={styleTable} rows={rows} columns={[{field:'name'},{field:'price'},{field:'genres'},{field:'plataforms'}]}   pagination />
   </Box>
  )
}

export default TableGames