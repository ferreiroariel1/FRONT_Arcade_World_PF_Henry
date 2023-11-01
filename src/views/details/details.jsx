import { useEffect } from "react";
import { gameById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Grafico from "./Grafico";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import ShopIcon from '@mui/icons-material/Shop';
import AddIcon from '@mui/icons-material/Add';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Details = () => {
  const dispatch = useDispatch();
  const gameDetails = useSelector((state) => state.gameId);
  const { id } = useParams();

  useEffect(() => {
    dispatch(gameById(id));
  }, [dispatch, id]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      {gameDetails ? (
        <Stack sx={{ display: "flex" }} direction="row">
          <Stack>
            <Card sx={{ marginLeft: "3px", marginTop: "3px" }}>
              <CardMedia
                sx={{ height: 317, width: 450 }}
                image={gameDetails.image}
                title="prueba"
              />
              <Stack sx={{textAlign:'left', marginLeft:'8px'}}>
                <Typography variant="overline">
                  Score:{gameDetails?.score}
                </Typography>
                <Typography variant="overline">
                  Graphics: {gameDetails.graphics}
                </Typography>
                <Typography variant="overline">
                  Gameplay: {gameDetails.gameplay}
                </Typography>
                <Typography variant="overline">
                  Quality price: {gameDetails.qualityPrice}
                </Typography>
              </Stack>
            </Card>
                <Grafico/>
          </Stack>
          <Stack textAlign="left" marginLeft="20px">
            <Typography variant="h3">{gameDetails.name}</Typography>
            <Typography variant="body1">
              <Typography variant="h6">Platforms:</Typography>{" "}
              {gameDetails.platforms && gameDetails.platforms.join(", ")}
            </Typography>
            <Typography variant="body1">
              <Typography variant="h6">Genres:</Typography>{" "}
              {gameDetails.genres && gameDetails.genres.join(", ")}
            </Typography>
            <Typography variant="body1">
              <Typography variant="h6">About the game:</Typography>{" "}
              {gameDetails.description}
            </Typography>
            <Typography variant="body1">
              <Typography variant="h6">Release:</Typography>{" "}
              {gameDetails.released}
            </Typography>
            <Typography variant="body1">
              <Typography variant="h6">Price:</Typography> ${gameDetails.price}
            </Typography>
            <div>
              <Button variant="outlined" color="success" size="medium" startIcon={<AddIcon/>}>
                Adds
              </Button>
              <Button variant="contained" color="success" size="medium" endIcon={<ShopIcon/>} sx={{marginLeft: '3px'}}>
                Buy
              </Button>
            </div>
          </Stack>
        </Stack>
      ) : (
        <Skeleton variant="rectangular" width={450} height={500} />
      )}
     

      <Stack sx={{textAlign:'center', marginTop: '20px'}}>
        <Typography variant="h6">Comments:</Typography>
        {/* {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))} */}
        <Box 
        component='form'
        sx={{'& > :not(style)': { m: 1, width: '25ch' }, textAlign: 'center'}}
        noValidate
        autoComplete="off"
        >
          <TextField
            variant="outlined" 
            label='Message'
            id="message"
            name="message"
            onChange={handleChange}
          ></TextField>
          <br />
          <Button type="submit" variant="outlined" color="info">
            Submit
          </Button>
        </Box>
      </Stack>
    </>
  );
};
export default Details;
