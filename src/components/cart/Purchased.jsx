import axios from "axios";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";


export default function Purchased() {///prop:_ recive array de juegos

  const UserId = useSelector( s => s.userData.id )
  const shoppingCart = useSelector ( s => s.shoppingCart)
 
  const handleOnclickcarrito = async () => {
    try {
      const videogameIds = shoppingCart.map((game) => game.id);
  
      const response = await axios.post('http://localhost:3001/cart/purchased', {UserId , GamesIds: videogameIds})
      const url = response.data.session_url
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
    //localStorage.setItem("videogameIds", JSON.stringify(videogameIds));
  };
  return (
    <div>
      <Button
        variant="contained"
        color="success"
        fullWidth
        sx={{
          minWidth: "100%",
        }}
        onClick={handleOnclickcarrito}
      >
        Pay Now
      </Button>
    </div>
  );
}
Purchased.propTypes= {
  carrPay: PropTypes.array.isRequired
}