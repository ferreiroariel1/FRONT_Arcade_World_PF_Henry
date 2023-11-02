import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import ViewMain from './ViewMain';
import TablePurchases from './TablePurchases'
import TableUser from './TableUser';

function App() {
  const [Component,setComponent]=useState(<ViewMain/>)
  const HandlersComponet=(Component)=>{
    setComponent(Component)
  }
  const StyleMenu={
    color:'white'
  }
    return(
      <Box display='flex'>
        <Box width={'20%'} height={'100vh'} bgcolor={'#333333'}>
      <List>
      <ListItem button onClick={() => HandlersComponet(<ViewMain />)}>
            <ListItemText style={StyleMenu} primary="View Main" />
          </ListItem>
      <ListItem button onClick={() => HandlersComponet(<TablePurchases />)}>
            <ListItemText style={StyleMenu} primary="Table Purchases" />
          </ListItem>
          <ListItem button onClick={() => HandlersComponet(<TableUser />)}>
            <ListItemText style={StyleMenu} primary="Table User" />
          </ListItem>
      </List>
        </Box>
        <Box width={'80%'}>
        {Component}
        </Box>
      </Box>
  )
}

export default App 