import PropTypes from "prop-types";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from "react-router-dom";
import { Card,Box, Button, CardContent, CardMedia, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../../redux/actions'
import { useState} from "react";

function News({id,name,image,price }) {
  const [isPressed, setIsPressed] = useState();
  const dispatch = useDispatch();
  const handleAddToFavorites = () => {
    // Almacena el nuevo estado en una variable
    const newIsPressed = !isPressed;
  
    if (newIsPressed) {
      dispatch(addToFavorites({id,name,image}));
    } else {
      dispatch(removeFromFavorites(id));
    }
  
    // Actualiza el estado con la nueva variable
    setIsPressed(newIsPressed);
  };

  const cardStyle = {
    cursor: 'pointer',
    flexwrap:'wrap',
    width: '15em',
    maxheight:'16em', // Establece una altura fija para las tarjetas
    overflow: 'hidden',
    backgroundColor: '#333',
     color: 'white' 
  }
  const priceStyle = {

    bottom: '0', 
    left: '0',
    backgroundColor: '#4caf50', 
    color: '#fff',
    padding:'0.4em',
    width:'3.7em'
  };
  return (
    <Card style={cardStyle}>
      <IconButton onClick={handleAddToFavorites} sx={{display:'grid', position:'absolute', marginLeft:'195px', color: isPressed ? 'red' : null}}><FavoriteIcon/></IconButton>
    <CardMedia component="img" height="140" image={image} alt={name} />
    <CardContent>
      <Typography variant="h5" component="div">
        {name}
      </Typography >
      <Box display='flex' gap={2}>
      <Typography style={priceStyle}>
        $/{price}
      </Typography>
      <Link to={`/detail/${id}`}>
        <Button variant="contained" endIcon={<InfoOutlinedIcon />}>
  Detail
</Button>
   </Link>
      </Box>
    </CardContent>
  </Card>
  )
}
News.propTypes= {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default News;