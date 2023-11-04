import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Box, CardContent, Typography } from "@mui/material";


function Cart() {
  const stripePromise = loadStripe(
    "pk_test_51O72zZKp8iNlGuusO5lGEFDAfzKpuojwIZvbM1xQniQZX2QspLTI73wnQVNkMwJkw6wUt3UnHVbl3GlsyLvP5AX800p9mfzYYi"
  );
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
       
    const showAlert2 = () => {
      Swal.fire({
        toast: false,
        icon: "success",
        title: `Gracias por tu compra`,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "center",
      });
    };
    useEffect(() => {
      if (message === "succeeded") {
        showAlert2();
      }
    }, [message])

    const handleSubmit = async (e) => {
      e.preventDefault();

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (!error) {
        const { id } = paymentMethod; // id de la compra
        const valor = shoppingCart.map((e) => {
          return e.price * e.quantity;
        });
        
        const amount = valor.reduce(
          (a, b) => a + (typeof b === "number" ? b : 0),
          0
        );
        
        const productos = shoppingCart.map((e) => {
          const { id, price, name } = e;
          return { id, price, name };
        });

        try {
          const { data } = await axios.post(
            "https://tu-suenio-back.onrender.com/payment/newPayment",
            {
              amount,
              id,
            }
          );
                                 
         
        } catch (error) {
          console.error(error, "esto es el error");
        }
      }
    };
    return (
      <div >
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button >
            Comprar
          </button>
        </form>
      </div>
    );
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
}

export default Cart;