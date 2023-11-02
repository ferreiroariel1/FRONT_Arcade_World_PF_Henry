
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useNavigate, useParams } from 'react-router-dom';
import ShopIcon from "@mui/icons-material/Shop";
import {Button} from "@mui/material";
import { addToCart } from '../../redux/actions.js';
import { useDispatch } from 'react-redux';

 const Pay = ()=> {

  const navigate = useNavigate();
  let userLocalDetail = localStorage.getItem("login");
  userLocalDetail = userLocalDetail ? JSON.parse(userLocalDetail) : null;
  const dispatch = useDispatch();
  const { UserId, id } = useParams();

  const handleButton = () => {
    if (userLocalDetail === null || userLocalDetail === "") {
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
      const payload = {
        UserId: UserId,
        videogameId: id,
      };
      dispatch(addToCart(payload))
      navigate('/cart');
    }
  };

   
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
Pay.propTypes= {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}
export default Pay;