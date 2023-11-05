
import Swal from "sweetalert2";
import ShopIcon from "@mui/icons-material/Shop";
import {Button} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { shoppingCartId } from '../../redux/actions.js';

 const Pay = ()=> {
  const shoppingCart = useSelector((state) => state.shoppingCart);
 
  const dispatch = useDispatch();
  const showAlert = () => {
    Swal.fire({
      toast: true,
      icon: "success",
      title: "Product added to cart",
      timer: 1200,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
    });
  };

  const showAlert2 = () => {
    Swal.fire({
      toast: true,
      icon: "warning",
      title: "The product is already in the cart",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
    });
  };

  const { id } = useParams()
  const handleClick = () => {
    dispatch(shoppingCartId(id));
    const found = shoppingCart.find(el => el.id === id)
    if(!found) showAlert();
    else showAlert2()
  };

   
     return (
    <div>
      <Button
                variant="contained"
                color="success"
                size="medium"
                endIcon={<ShopIcon />}
                sx={{ marginLeft: "150px", marginTop:"-58px" }}
                onClick={handleClick}
              >
                Buy
              </Button>
        
    </div>

  )
}
 

export default Pay;