import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PropTypes from "prop-types";
import {
  addToCart,
  deleteItemCart,
} from "../../redux/actions.js";

const BotonsCart = ({element}) => {
  const roleUser = JSON.parse(window?.localStorage.getItem("login"));

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
   const userId = userData.id;
  const [quantity, setQuantity] = useState(1);
  // const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    const payload = {
      userId: userId,
      videogameId: element.id,
      quantity: newQuantity,
    };
    setQuantity(0);
    dispatch(addToCart(payload));
  };

  const handleRemoveFromCart = () => {
    const payload = {
      userId: userId,
      videogameId: element.id
    };
    
    dispatch(deleteItemCart(payload));
    
  };

  return (
    <div>
      {(roleUser?.role === "admin" ||
        roleUser?.role === "superAdmin" ||
        roleUser?.role == "user") && (
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
      )}
    </div>
  );
}
BotonsCart.propTypes= {
  element: PropTypes.object.isRequired,
}
export default BotonsCart;
