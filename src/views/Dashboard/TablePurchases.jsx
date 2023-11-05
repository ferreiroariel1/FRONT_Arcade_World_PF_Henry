import React from 'react'
import { DataGridPro} from '@mui/x-data-grid-pro';
import { useSelector } from 'react-redux';
import { Box,Typography,Button} from '@mui/material';

function TablePurchases() {
  const user=useSelector((U)=>U.user)
  const rows = user.map((u)=>{

  })
  const columns=
   []
   const BoxMain={
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#546e7a',
      flexDirection:'column',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      height: '100vh',
   }
 
  return (
    <Box sx={BoxMain} gap={2}>
    
   </Box>
  )
}

export default TablePurchases