import { useState } from "react";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";
import { deleteItemCart } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import { Button, Box, CardContent, Typography } from "@mui/material";
import CartCard from "./cartCard.jsx";
import style from "./cart.module.css";
import Purchased from "./Purchased.jsx";

const harcod =[
  {
    id: 4570,
    name: "Dead Space (2008)",
    image:
      "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
    price: (Math.random() * 10 + 40).toFixed(2),
  },
  {
    id: 4580,
    name: "Wallpaper Engine",
    image:
      "https://media.rawg.io/media/screenshots/5a7/5a72aed79451d8fbd6a7b82f784002bd.jpg",
    price: (Math.random() * 10 + 40).toFixed(2),
  },
  {
    id: 4670,
    name: "Darksiders II Deathinitive Edition",
    image:
      "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg",
    price: (Math.random() * 10 + 40).toFixed(2),
  },
]

const Cart = () => {
    const dispatch = useDispatch();
    
  let [index, setIndex] = useState(harcod?.map((item) =>
  !Object.prototype.hasOwnProperty.call(item, "quantity")
    ? { ...item, quantity: 1 }
    : item))
      
  const navigate = useNavigate();

   const handleDiscoverClick = () => {
    navigate("/store");
  };

  const handleClearClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to delete the items from your cart!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete.isConfirmed) {
        dispatch(deleteItemCart(index));
        setIndex([]); // Vaciar el carrito
         Swal.fire("Success!", "Your cart has been emptied.", "success");
      } else {
        Swal.fire("Cancelled", "Your cart is safe.", "info");
      }
    });
  };
  
     
    let totalSum = () => {
      let suma = 0;
  
      for (const item of index) {
        suma += parseFloat(item.price) * item.quantity;
      }
       return suma.toFixed(2);
    };

    const handlerReduce = (arr) => {
      const totalProducts = arr?.reduce((a, b) => a + b.quantity, 0);
      return totalProducts;
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
          gap: "30px",
        }}
        >
        {harcod.length > 0 ? (
          harcod.map((e) => (
            <CartCard key={e.id} element={e} />
          ))
        ) : (
          <div className={style.loading}>
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
                    display: "flex",
                    alignItems: "center",
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
              ({handlerReduce(index)})
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
              ${totalSum()}
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
          <Purchased carrPay={harcod}/>
          <Button
            onClick={handleClearClick}
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