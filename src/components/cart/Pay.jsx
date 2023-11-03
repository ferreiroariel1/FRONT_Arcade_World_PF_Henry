
import Swal from "sweetalert2";
import { useNavigate, useParams } from 'react-router-dom';
import ShopIcon from "@mui/icons-material/Shop";
import {Button} from "@mui/material";
import { useSelector } from 'react-redux';

 const Pay = ()=> {

  const navigate = useNavigate();
  let userLocalPay = localStorage.getItem("login");
  userLocalPay = userLocalPay ? JSON.parse(userLocalPay) : null;
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const { id } = useParams();

  const handleButton = () => {
    if ((userLocalPay === null || userLocalPay === "")) {
       Swal.fire({
        toast: true,
        icon: "info",
        title: "Sorry, you can only buy if you register",
        showConfirmButton: true,
        position: "top-center",
        confirmButtonText: "Login",
        confirmButtonColor: "#F19E6E",
      }).then((willRedirect) => {
        if (willRedirect) {
            navigate("/auth");
        }
      });
    } else {
      const found = shoppingCart.find(el => el.id === id)
      if(!found) {
        localStorage.setItem("cart", JSON.stringify(found));
         navigate('/cart');
         Swal.fire({
          toast: true,
          icon: "success",
          title: "Product added to cart",
          timer: 1200,
          timerProgressBar: true,
          showConfirmButton: false,
          position: "top",
        });
      } else {
         Swal.fire({
          toast: true,
          icon: "warning",
          title: "The product is already in the cart",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
          position: "top",
        });
      }
     }
  }
   
     return (
    <div>
      <Button
                variant="contained"
                color="success"
                size="medium"
                endIcon={<ShopIcon />}
                sx={{ marginLeft: "150px", marginTop:"-58px" }}
                onClick={handleButton}
              >
                Buy
              </Button>
        {/* <button  onClick={handleButton}>Pay</button> */}
    </div>

  )
}
 

export default Pay;