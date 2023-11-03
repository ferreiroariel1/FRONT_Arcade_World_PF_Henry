import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PropTypes from "prop-types";
import {
  deleteItemCart, shoppingCartId
} from "../../redux/actions.js";

const BotonsCart = () => {
  const dispatch = useDispatch();
  const { id } = useParams;
  
  const handleAddToCart = (id) => {
   dispatch(shoppingCartId(id))
  };

  const handleRemoveFromCart = () => {
   dispatch(deleteItemCart(id));
 };

  return (
    <div>
        <CardContent
          sx={{
            height: 35,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Fab
            style={{ backgroundColor: "#A5CAA8" }}
            size="small"
            color="default"
            aria-label="add"
            onClick={handleRemoveFromCart}
          >
            <RemoveIcon />
          </Fab>
          <Fab
            size="small"
            color="success"
            aria-label="add"
            onClick={handleAddToCart}
          >
            <AddIcon />
          </Fab>
        </CardContent>
      
    </div>
  );
}
BotonsCart.propTypes= {
  element: PropTypes.object.isRequired,
}
export default BotonsCart;
