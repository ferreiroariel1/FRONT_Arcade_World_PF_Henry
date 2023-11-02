import axios from "axios";
import { Button } from "@mui/material";
import PropTypes from "prop-types";


export default function PayCarrito(props) {
  const { params } = props;
  // const history = useHistory();

  const handleOnclickcarrito = async () => {
    const productIds = params.map((product) => product.id);

    const url = await axios.post(
      "",
      props.params
    );
    window.location.href = url.data.url;
    localStorage.setItem("productIds", JSON.stringify(productIds));
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
PayCarrito.propTypes= {
  params: PropTypes.object.isRequired,
}
