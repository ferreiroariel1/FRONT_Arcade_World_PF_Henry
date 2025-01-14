import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UploadImage from "../upload/UploadImage";
import { postRegister } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useAuth } from "../../context/AuthContext";
import { Button, Card, Stack, Typography, TextField } from "@mui/material";

const Create = ({ handleSign }) => {
  const dispatch = useDispatch();
  const { loginWithGoogle, resetPassword } = useAuth();
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    watch,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    data.image = image;
    dispatch(postRegister(data)).then((response) => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Welcome to arcade World",
        showConfirmButton: false,
        timer: 1500,
      });
      setImage("");
      reset();
      handleSign();
    });
  });
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/user/profile");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Card sx={{ height: "125vh", width: "400px" }}>
      <Stack
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Stack marginTop="20px" marginBottom="20px">
          <Typography variant="h5">Welcome to Arcade World</Typography>
        </Stack>
        <Stack>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#fff", color: "#000", width: "320px" }}
            onClick={handleGoogleLogin}
          >
            <img
              width="20px"
              height="20px"
              style={{ padding: "0.5rem" }}
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
            Log In with Google
          </Button>
        </Stack>
        <Typography variant="overline">or</Typography>
        <Stack sx={{display:'flex', flexDirection:'column'}}>
        <TextField
          sx={{ width: "320px", marginBottom: "30px" }}
          onSubmit={onSubmit}
          className="loginInput"
          type="text"
          placeholder="Name"
          name="name"
          label="Name"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
            maxLength: 20,
            minLength: 3,
          })}
        />
        {errors.name?.type === "required" && (
          <Typography marginTop="-25px" variant="overline" color='red'>
            Name is required
          </Typography>
        )}
        {errors.name?.type === "maxLength" && (
          <Typography marginTop="-25px" variant="overline" color='red'>
            Name is To long
          </Typography>
        )}
        {errors.name?.type === "minLength" && (
          <Typography marginTop="-25px" variant="overline" color='red'>
            Name is to short
          </Typography>
        )}
        </Stack>
        <Stack>
          <TextField
            sx={{ width: "320px", marginBottom: "30px" }}
            className="loginInput"
            type="text"
            placeholder="Last Name"
            name="lastname"
            label="last Name"
            {...register("lastname", {
              required: {
                value: true,
                message: "Last name is required",
              },
              maxLength: 20,
              minLength: 3,
            })}
          />
          {errors.lastname?.type === "required" && (
            <Typography marginTop="-25px" variant="overline" color='red'>
              Last name is required
            </Typography>
          )}
          {errors.lastname?.type === "maxLength" && (
            <Typography marginTop="-25px" variant="overline" color='red'>
              Last name is To long
            </Typography>
          )}
          {errors.lastname?.type === "minLength" && (
            <Typography marginTop="-25px" variant="overline" color='red'>
              Last name is to short
            </Typography>
          )}
        </Stack>
        <Stack sx={{display:'flex', flexDirection:'column'}}>
          <TextField
            sx={{ width: "320px", marginBottom: "30px" }}
            className="loginInput"
            type="text"
            placeholder="Usuario"
            name="nickname"
            label="User Name"
            {...register("nickname", {
              required: {
                value: true,
                message: "UserName is required",
              },
            })}
          />
          {errors.nickname?.type === "required" && (
            <Typography marginTop="-25px" variant="overline" color='red'>
              {errors.nickname.message}
            </Typography>
          )}
        </Stack>
        <Stack sx={{display:'flex', flexDirection:'column'}}>
          <TextField
            sx={{ width: "320px", marginBottom: "30px" }}
            className="loginInput"
            type="Email"
            name="Email"
            placeholder="Email"
            label="Email"
            {...register("Email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid Email",
              },
            })}
          />
          {errors?.Email && (
            <Typography marginTop="-25px" variant="overline" color='red'>
              {errors.Email.message}
            </Typography>
          )}
        </Stack>
        <Stack sx={{display:'flex', flexDirection:'column'}}>
          <TextField
            sx={{ width: "320px", marginBottom: "30px" }}
            className="loginInput"
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors?.password && (
            <Typography marginTop="-25px" variant="overline" color='red'>
              {errors.password.message}
            </Typography>
          )}
          <Stack sx={{display:'flex', flexDirection:'column'}}>
            <TextField
              sx={{ width: "320px", marginBottom: "30px" }}
              className="loginInput"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              label="Confirm password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm password is required",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                validate: (value) =>
                  value === watch("password") || "Passwords don't match",
              })}
            />
            {errors?.confirmPassword && (
              <Typography
                marginTop="-25px"
                variant="overline"
                color='red'
              >
                {errors.confirmPassword.message}
              </Typography>
            )}
            <UploadImage image={image} setImage={setImage} />
          </Stack>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#000", width: "320px" }}
            disabled={!isDirty}
            onClick={onSubmit}
          >
            Registrate
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Create;
