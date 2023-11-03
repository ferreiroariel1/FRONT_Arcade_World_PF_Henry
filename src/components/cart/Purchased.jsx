import axios from "axios";
import { Button } from "@mui/material";
import PropTypes from "prop-types";


export default function Purchased({carrPay}) {
 
  const handleOnclickcarrito = async () => {
    const videogameIds = carrPay.map((game) => game.id);

    const url = await axios.post(
      "http://localhost:3001/purchased",
      carrPay
    );
    window.location.href = url.data.url;
    localStorage.setItem("videogameIds", JSON.stringify(videogameIds));
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