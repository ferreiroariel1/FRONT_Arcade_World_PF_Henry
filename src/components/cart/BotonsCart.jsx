

import { useDispatch } from "react-redux";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { deleteItemCart } from "../../redux/actions.js"
import PropTypes from "prop-types";


const BotonsCart = (props) => {
  const { id } = props.element;
 
  const dispatch = useDispatch();
  
  // let [index, setIndex] = useState()  
  const handleAddToCart = () => {
   
  };

  const handleRemoveFromCart = () => {
    const filtrado = Object.values(props.element).find((el) => el.id !== id);
    dispatch(deleteItemCart(filtrado));
       
    
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
