import { useEffect, useState } from "react";
import { gameById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Grafico from "./Grafico";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Avatar
} from "@mui/material";
import ShopIcon from "@mui/icons-material/Shop";
import AddIcon from "@mui/icons-material/Add";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

const Details = () => {
  const [comments, setComments] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  let userLocalDetail = localStorage.getItem("login");
  userLocalDetail = userLocalDetail ? JSON.parse(userLocalDetail) : null;

  const handleButton = () => {
    if (userLocalDetail === null || userLocalDetail === "") {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Sorry you can only send if you are login",
        showConfirmButton: true,
        // showCloseButton: true,
        // allowOutsideClick: false,
        confirmButtonText: "Login",
        confirmButtonColor: "#F19E6E",
      }).then((willRedirect) => {
        if (willRedirect) {
          // Redirecciona a la URL deseada
          navigate("/auth");
        }
      });
    } else {
      setComments(message);
    }
  };

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
              <Stack sx={{ textAlign: "left", marginLeft: "8px" }}>
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
            <Grafico />
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
              <Button
                variant="outlined"
                color="success"
                size="medium"
                startIcon={<AddIcon />}
              >
                Adds
              </Button>
              <Button
                variant="contained"
                color="success"
                size="medium"
                endIcon={<ShopIcon />}
                sx={{ marginLeft: "3px" }}
              >
                Buy
              </Button>
            </div>
          </Stack>
        </Stack>
      ) : (
        <Skeleton variant="rectangular" width={450} height={500} />
      )}

      <Stack sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h6">Comments:</Typography>
        {/* {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))} */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            variant="outlined"
            label="Message"
            id="message"
            name="message"
            onChange={handleChange}
          ></TextField>
          <br />
          <Button onClick={handleButton} variant="outlined" color="info">
            Submit
          </Button>
        </Box>
      </Stack>
          <Grid container spacing={3} justifyContent='center' marginTop='30px'>
            <Stack textAlign='center' marginRight='20px'>
              <Card sx={{ minWidth: 275, marginBottom:'20px'}}>
                <CardContent sx={{textAlign: 'center', height:'200px', width:'400px'}}>
                <Stack alignItems='center'>
                  <Avatar src={userLocalDetail.user.image}/>
                  </Stack>
                  <Typography textAlign="center" marginBottom='10px'>{userLocalDetail.user.nickname}</Typography>
                  <Typography textAlign="center">{comments}</Typography>
                </CardContent>
              </Card>
            </Stack>
            <Stack textAlign='center' marginRight='20px'>
              <Card sx={{ minWidth: 275, marginBottom:'20px'}}>
                <CardContent sx={{textAlign: 'center', height:'200px', width:'400px'}}>
                  <Stack alignItems='center'>
                  <Avatar src={userLocalDetail.user.image}/>
                  </Stack>
                  <Typography textAlign="center" marginBottom='10px'>{userLocalDetail.user.nickname}</Typography>
                  <Typography textAlign="center">{comments}</Typography>
                </CardContent>
              </Card>
            </Stack>
            <Stack textAlign='center' marginRight='20px'>
              <Card sx={{ minWidth: 275, marginBottom:'20px'}}>
                <CardContent sx={{textAlign: 'center', height:'200px', width:'400px'}}>
                <Stack alignItems='center'>
                  <Avatar src={userLocalDetail.user.image}/>
                  </Stack>
                  <Typography textAlign="center" marginBottom='10px'>{userLocalDetail.user.nickname}</Typography>
                  <Typography textAlign="center">{comments}</Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
    </>
  );
};
export default Details;
