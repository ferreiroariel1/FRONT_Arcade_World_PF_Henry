import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import ViewMain from './ViewMain';
import TablePurchases from './TablePurchases'
import TableUser from './TableUser';
import TableGames from './TableGames.jsx'
import PublishGame from './PublishGame.jsx';

function App() {
  const [Component,setComponent]=useState(<ViewMain/>)
  const HandlersComponet=(Component)=>{
    setComponent(Component)
  }
  const StyleMenu={
    color:'white',
  }
  const Menu={
    width:'15%',
    minheight:'600px'
  }

    return(
      <Box display='flex'>
        <Box sx={Menu} bgcolor={'#263238'}>
      <List>
      <ListItem button onClick={() => HandlersComponet(<ViewMain />)}>
            <ListItemText style={StyleMenu} primary="View Main" />
          </ListItem>
      <ListItem button onClick={() => HandlersComponet(<TablePurchases />)}>
            <ListItemText style={StyleMenu} primary="Table Purchases" />
          </ListItem>
          <ListItem button onClick={() => HandlersComponet(<TableGames/>)}>
            <ListItemText style={StyleMenu} primary="Table Games" />
          </ListItem>
          <ListItem button onClick={() => HandlersComponet(<TableUser />)}>
            <ListItemText style={StyleMenu} primary="Table User" />
          </ListItem>
          <ListItem button onClick={() => HandlersComponet(<PublishGame />)}>
            <ListItemText style={StyleMenu} primary="Publish Game" />
          </ListItem>
      </List>
        </Box>
        <Box width={'85%'}  >
        {Component}
        </Box>
      </Box>
  )
}

export default App 