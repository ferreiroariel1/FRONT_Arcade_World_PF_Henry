import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
// import RatingAndReview from "../RatingAndReview/RatingAndReview";
import { deleteItemCart } from '../../redux/actions.js';


const Summary = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);
  const [selectedGames, setSelectedGames] = useState([]);
  
  useEffect(() => {
    const gameIds = JSON.parse(localStorage.getItem("gameIds"));
    const filteredGames = allGames?.filter((gm) =>
      gameIds?.includes(gm.id)
    );
    setSelectedGames(filteredGames)

    return () => {
      localStorage.removeItem("gameIds")
    }
  }, [allGames]);

    
  const handlerDelete = (id) => {
    const filtrado = selectedGames.filter((el) => el.id !== id);
     dispatch(deleteItemCart(filtrado));
     localStorage.setItem("cart", JSON.stringify(filtrado));
     setSelectedGames(filtrado);
    
  }

  return (
    <div>
      <h3>Pago completado con éxito</h3>
      <h4>Productos comprados:</h4>
      <Grid container spacing={2}>
        {selectedGames.map((gm) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={gm.id}>
            <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
              < CardMedia
                component="img"
                height="200"
                image={gm.image}
                alt={gm.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {gm.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>     
      <Button variant="contained"  onClick={handlerDelete}>
         Discover Products
      </Button>
       
    </div>
  );
};

export default Summary;
