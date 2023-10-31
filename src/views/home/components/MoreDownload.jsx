import PropTypes from "prop-types";
import SendIcon from '@mui/icons-material/Send';
import { Card,Box, Button,CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";

function MoreDownload({id,name,image,price}) {
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
    <CardMedia component="img" height="140" image={image} alt={name} />
    <CardContent >
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Box display='flex' gap={2}>
      <Typography  style={priceStyle}>
        $/{price}
      </Typography>
      <Link to={`/detail/${id}`}>
        <Button variant="contained" endIcon={<SendIcon />}>
  Detail
</Button>
   </Link>
      </Box>
    </CardContent>
  </Card>
  )
}
MoreDownload.propTypes= {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default MoreDownload