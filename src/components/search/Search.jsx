import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { gameByName } from '../../redux/actions';



function Search() {
  const [valor,setValor]=useState('')
  const dispatch=useDispatch()
  const chageHandlers=(e)=>{
    setValor(e.target.value)
  }
  const onsearch=(Name)=>{
    dispatch(gameByName(Name))
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search Game"
        value={valor}
        onChange={chageHandlers}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onsearch(valor)}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </div>
  )
}

export default Search