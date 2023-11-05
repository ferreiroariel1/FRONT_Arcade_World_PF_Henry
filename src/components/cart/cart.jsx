import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
//import { loadStripe } from "@stripe/stripe-js";
//import { CardElement, Elements } from "@stripe/react-stripe-js";
//import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Box, CardContent, Typography } from "@mui/material";
import CartCard from './cartCard'
import Purchased from './Purchased'
import { NavLink } from 'react-router-dom'



function Cart() {
  // const stripePromise = loadStripe(
  //   "pk_test_51O72zZKp8iNlGuusO5lGEFDAfzKpuojwIZvbM1xQniQZX2QspLTI73wnQVNkMwJkw6wUt3UnHVbl3GlsyLvP5AX800p9mfzYYi"
  // );
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);//[...gameIds]
  const gamesIds = !shoppingCart.length? [] : shoppingCart.map( vg => vg.id)
  const UserId = useSelector( state => state.userData.id )
  const handleDiscoverClick =  () => {

  }
       
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
        {shoppingCart.length? (
          shoppingCart.map((vg, i) => (
            <CartCard key={i} element={vg} />
          ))
        ) : (
          <div >
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
              <NavLink to='/store'>
                <Button
                  variant="contained"
                  color="success"
                >
                    Discover Products
                </Button>
              </NavLink>
              
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
              ({gamesIds.length})
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
              ${`suma para codear`}
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
          <Purchased />
          <Button
            // onClick={handleClearClick}
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
}

export default Cart;