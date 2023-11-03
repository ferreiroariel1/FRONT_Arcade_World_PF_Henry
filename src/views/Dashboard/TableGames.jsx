import React from 'react'
import { Box, Typography } from '@mui/material'
// import { getGames } from '../../redux/actions'
import { useDispatch,useSelector } from 'react-redux'
import { DataGridPro } from '@mui/x-data-grid-pro';


function TableGames() {
 const games=useSelector((g)=>g.games)
 const rows = games.map((G)=>{
    console.log(G.platforms[0])
    return{
        id:G.id,
        name:G.name,
        price:G.price,
        plataforms:G.platforms[0],
        genres:G.genres[0]
    
    }
 })
 console.log(rows)
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
    <DataGridPro style={styleTable} rows={rows} columns={[{field:'name'},{field:'price'},{field:'genres'},{field:'plataforms'}]}   pagination
        paginationRowsPerPageOptions={[100]} />
   </Box>
  )
}

export default TableGames