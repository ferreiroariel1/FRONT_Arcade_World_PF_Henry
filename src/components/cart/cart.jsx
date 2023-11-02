import { useEffect } from "react";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import { shoppingCartId, deleteItemCart } from "../../redux/actions.js";
import { useDispatch, } from "react-redux";
import { Button, Box, CardContent, Typography } from "@mui/material";
import CartCard from "./cartCard.jsx";
import style from "./cart.module.css";
import PayCarrito from "./PayCarrito.jsx";

const harcod = [
  {
    id: 10449,
    name: "Darksiders II Deathinitive Edition",
    description:
      "The video game Darksiders II Deathinitive Edition is an exciting title that belongs to the Action and RPG genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "Xbox One", "Nintendo Switch", "PC"],
    image:
      "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg",
    released: "2015-11-05",
    rating: 3.78,
    origin: "API",
    genres: ["Action", "RPG"],
    price: (Math.random() * 10 + 40).toFixed(2),
  },
  {
    id: 2518,
    name: "Max Payne",
    description:
      "The video game Max Payne is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation, Xbox and Apple Macintosh. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation, Xbox and Apple Macintosh, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PC",
      "PlayStation 3",
      "Xbox",
      "Classic Macintosh",
      "PlayStation 2",
      "Xbox 360",
      "PlayStation 4",
    ],
    image:
      "https://media.rawg.io/media/games/2f5/2f5eb72fe45540e93ac2726877551a20.jpg",
    released: "2001-07-23",
    rating: 4.46,
    origin: "API",
    genres: ["Action", "Shooter"],
    price: (Math.random() * 10 + 40).toFixed(2)
  },
]


const Cart = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  // let shoppingCart = useSelector((state) => state?.shoppingCart);
 
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(shoppingCartId(id));
  }, [dispatch, id]);

  const handleDiscoverClick = () => {
    navigate("/store");
  };

  const showAlert = () => {
    Swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete the items from your cart!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // Vaciar el carrito aquí
        handleClearClick();
        Swal("Success!", "Your cart has been emptied.", "success");
      } else {
        Swal("Cancelled", "Your cart is safe.", "info");
      }
    });
  };

  const handleClearClick = () => {
    dispatch(deleteItemCart(id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "100px",
      }}
    >
      <Box
        sx={{
          paddingTop: "30px",
          paddingBottom: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#ffefcf",
          gap: "30px",
        }}
      >
        {harcod.length > 0 ? (
          harcod.map((e) => (
            <CartCard key={e.id} element={e} />
          ))
        ) : (
          <div className={style.loading}>
            {/* <Loading /> */}
            <Box
              sx={{
                backgroundColor: "#eddcb9",
                height: "300px",
                width: "400px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                padding: "50px",
                gap: "20px",
                boxShadow: "1px 1px 3px 1px black",
                position: "sticky",
                top: "32px",
              }}
            >
              <CardContent
                sx={{
                  width: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  gap: "60px",
                }}
              >
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    fontSize: 25,
                    // display: "flex",
                    // alignItems: "center",
                  }}
                >
                  Ups! You have no items in your cart
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    fontSize: 20,
                    display: "flex",
                    alignItems: "center",
                    opacity: "0.8",
                  }}
                >
                  Add something to your Shopping Cart !
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="success"
                onClick={handleDiscoverClick}
              >
                Discover Products
              </Button>
            </Box>
          </div>
        )}
      </Box>

      <Box
        sx={{
          marginTop: "30px",
          backgroundColor: "#eddcb9",
          height: "150px",
          width: "360px",
          borderRadius: "6px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "50px",
          gap: "20px",
          boxShadow: "1px 1px 3px 1px black",
          position: "sticky",
          top: "32px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "flex-starts",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-starts",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                opacity: "0.8",
              }}
            >
              Products:
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                opacity: "0.8",
              }}
            >
              ({harcod.quantity})
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-starts",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                fontSize: 30,
                display: "flex",
                alignItems: "center",
              }}
            >
              Total:
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{
                fontSize: 30,
                display: "flex",
                alignItems: "center",
              }}
            >
              ${harcod.totalPrice}
            </Typography>
          </Box>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <PayCarrito params={harcod}></PayCarrito>
          <Button
            onClick={showAlert}
            variant="outlined"
            sx={{
              color: "rgb(114, 8, 8)",
              borderColor: "rgb(114, 8, 8)",
              "&:hover": {
                borderColor: "rgb(114, 8, 8)",
                backgroundColor: "transparent",
              },
            }}
          >
            Empty Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
