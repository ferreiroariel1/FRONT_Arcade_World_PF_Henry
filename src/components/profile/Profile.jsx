import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Stack, Grid, Avatar, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import CreateIcon from "@mui/icons-material/Create";
import { styled } from '@mui/material/styles';

const Profile = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let userLocal = localStorage.getItem("login");
  userLocal = userLocal ? JSON.parse(userLocal) : null;

  useEffect(() => {
    if ((userLocal && !userLocal.login) || userLocal === null) {
      navigate("/");
    }
  }, []);
  const handleLogout = () => {
    if (userLocal) {
      userLocal.login = false;
      // localStorage.setItem('login', JSON.stringify(userLocal));
      localStorage.removeItem("login", JSON.stringify(userLocal));
      navigate("/");
      userLocal = "";
    }
  };
  const uploadImageN = async (e) => {
    const files = e.target.files;
    const data = new FormData();

    data.append("file", files[0]);
    data.append("upload_preset", "JesusBavaresco"); // el segundo campo varia dependiendo del nombre que utilices
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/du9kziyei/image/upload", // el url varia por cada usuario 'https://api.cloudinary.com/v1_1/tuUsuario/image/upload'
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card sx={{ width: "100%" }}>
            <Stack direction="column" alignItems="center">
              <Stack marginLeft="299px" marginTop="5px" marginBottom="-20px">
                <Button
                sx={{backgroundColor:'transparent', color:'#000'}}
                  component="label"
                  variant="text"
                  startIcon={<CreateIcon />}
                  onChange={uploadImageN}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Stack>
              <Avatar
                sx={{ width: 300, height: 300, marginTop: "4px" }}
                src={userLocal?.user?.image}
                alt="Profile image"
              />
              <Typography variant="h5" component="div">
                Name: {userLocal?.user?.name}
              </Typography>
              <Typography variant="h5">
                Lastname: {userLocal?.user?.lastname}
              </Typography>
              <Typography variant="h5">
                Nickname: {userLocal?.user?.nickname}
              </Typography>
              <Typography variant="h5">
                Email: {userLocal?.user?.Email}
              </Typography>
            </Stack>
          </Card>
          <Card>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5" component="div">
                  <ShoppingCartIcon />
                  Your Cart
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  src="https://m.media-amazon.com/images/I/81KUccM8azL._AC_UF1000,1000_QL80_.jpg"
                  alt="Profile image"
                />
                <Typography>Super Smash Bros Brawl</Typography>
                <Typography>$100</Typography>
              </AccordionDetails>
            </Accordion>
          </Card>
          <Card>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5" component="div">
                  <FavoriteIcon color="error" />
                  Favorites
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  src="https://m.media-amazon.com/images/I/81KUccM8azL._AC_UF1000,1000_QL80_.jpg"
                  alt="Profile image"
                />
                <Typography>Super Smash Bros Brawl</Typography>
                <Typography>$100</Typography>
              </AccordionDetails>
            </Accordion>
            <Button size="large" sx={{ color: "#000" }} onClick={handleLogout}>
              <LogoutIcon />
            </Button>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Typography variant="h2">Your Games</Typography>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={2} width="70">
                <Card sx={{ height: 500, width: 300 }}>
                  <div>
                    <CardMedia
                      sx={{ height: 350 }}
                      image="https://m.media-amazon.com/images/I/81KUccM8azL._AC_UF1000,1000_QL80_.jpg"
                      title="prueba"
                    />
                    <Typography variant="h6">Super Smash Bros Brawl</Typography>
                    <Typography variant="subtitle2">Plataforms:</Typography>
                    <Typography variant="overline">
                      Wii, Wii U, Nintendo Switch
                    </Typography>
                    <Typography variant="subtitle2">Genres:</Typography>
                    <Typography variant="overline">
                      Action, Adventure, Multiplayer
                    </Typography>
                  </div>
                </Card>
                <Card sx={{ height: 500, width: 300 }}>
                  <div>
                    <CardMedia
                      sx={{ height: 350 }}
                      image="https://m.media-amazon.com/images/I/81KUccM8azL._AC_UF1000,1000_QL80_.jpg"
                      title="prueba"
                    />
                    <Typography variant="h6">Super Smash Bros Brawl</Typography>
                    <Typography variant="subtitle2">Plataforms:</Typography>
                    <Typography variant="overline">
                      Wii, Wii U, Nintendo Switch
                    </Typography>
                    <Typography variant="subtitle2">Genres:</Typography>
                    <Typography variant="overline">
                      Action, Adventure, Multiplayer
                    </Typography>
                  </div>
                </Card>
                <Card sx={{ height: 500, width: 300 }}>
                  <div>
                    <CardMedia
                      sx={{ height: 350 }}
                      image="https://m.media-amazon.com/images/I/81KUccM8azL._AC_UF1000,1000_QL80_.jpg"
                      title="prueba"
                    />
                    <Typography variant="h6">Super Smash Bros Brawl</Typography>
                    <Typography variant="subtitle2">Plataforms:</Typography>
                    <Typography variant="overline">
                      Wii, Wii U, Nintendo Switch
                    </Typography>
                    <Typography variant="subtitle2">Genres:</Typography>
                    <Typography variant="overline">
                      Action, Adventure, Multiplayer
                    </Typography>
                  </div>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Box>
  );
};
export default Profile;
