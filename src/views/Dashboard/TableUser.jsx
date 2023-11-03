import React from 'react'
 import { DataGridPro} from '@mui/x-data-grid-pro';
import { useSelector } from 'react-redux';
import { Box,Typography} from '@mui/material';

function TableUser() {
  const user=useSelector((U)=>U.user)

  const rows = user.map((u)=>{
    return{
      id:u.id,
      name: u.name,
      lastname:u.lastname ,
      nickname: u.nickname,
      Email: u.Email,
    }
  })
  const columns=
   [
    {field:'name', headerName: 'Name', width: 160, editable: true},{field:'lastname'},{field:'nickname'},{field:'Email'}
   ]
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
       Table  User
      </Typography>
    </Box>
    <DataGridPro style={styleTable} rows={rows} columns={columns}   pagination
        />
   </Box>
  )
}

export default TableUser

