import { useDispatch, useSelector } from "react-redux";
import CardContent from "@mui/material/CardContent";
// import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteItem } from "../../redux/actions.js";
import { IconButton } from "@mui/material";

const BotonsCart = ({shop}) => {
  const dispatch = useDispatch();
  // const shoppingCart = useSelector((state) => state.shoppingCart);
  // console.log(shop);
  const handleRemoveCart = () => {
    dispatch(deleteItem(shop));
    // localStorage.setItem("cart", JSON.stringify(shop));
  };

  return (
    <div>
      <CardContent
        sx={{
          display: "Grid",
          position:'absolute',
          marginLeft:'105px',
          gap: "20px",
        }}
      >
        {/* <Fab
          style={{ backgroundColor: "#A5CAA8" }}
          size="medium"
          color="default"
          aria-label="add"
          onClick={handleRemoveCart}
        > */}
        <IconButton sx={{backgroundColor:'#fff', padding:'2px', borderRadius: '0% 0% 0% 50%'}} color="error" size="medium"
        onClick={handleRemoveCart}><DeleteIcon /></IconButton>
        {/* </Fab> */}
      </CardContent>
    </div>
  );
};

export default BotonsCart;
