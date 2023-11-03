import React from 'react'
import { Box, Typography,Button,Alert } from '@mui/material'
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
  width:'98%',
  backgroundColor: '#cfd8dc'
 }
 const BoxMain={
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    height: '100vh',
    backgroundColor:'#546e7a'
 }
 const TitleBox={
   backgroundColor: '#37474f',
   borderRadius:'1em',
   padding:'1em',
   color:'white',
   margin:'1em'
 }
 const columns = [
   { field: 'name' },
   { field: 'price' },
   { field: 'genres' },
   { field: 'plataforms' },
   {field:'actions',
     headerName: 'Actions',
     renderCell: () => (
       <Button  variant="outlined" color="primary">
         Action
       </Button>
     )
   }
 ];
  return (
   <Box sx={BoxMain} gap={2}>
    <Box sx={TitleBox} >
      <Typography variant='h3' component={'h3'}>
       Table Games
      </Typography>
    </Box>
    <DataGridPro style={styleTable} rows={rows} columns={columns}   pagination />
   </Box>
  )
}

export default TableGames