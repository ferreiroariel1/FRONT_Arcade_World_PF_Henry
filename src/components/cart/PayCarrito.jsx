
import { Button } from "@mui/material";
import PropTypes from "prop-types";


export default function PayCarrito(props) {
  // document.addEventListener("DOMContentLoaded", () => {
    
  // });
  const { params } = props;
  const handleOnclickcarrito = async () => {
    const payNowButton = document.getElementById("newButton");
    
    payNowButton.addEventListener("click", () => {
      params.map((product) => product.id);
      const redirectUrl = localStorage.getItem("videogameIds");
 
  if (redirectUrl) {
   
    window.location.href = 'http://localhost:5173/summary';
  } else {
    console.error("URL no válida");
  }
});
     
 };

     
  return (
    <div>
      <Button
       id="newButton"
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
PayCarrito.propTypes= {
  params: PropTypes.object.isRequired,
}
