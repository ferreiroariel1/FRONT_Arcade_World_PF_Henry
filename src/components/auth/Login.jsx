import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import { postLogin } from "../../redux/actions";
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import './auth.css'

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isDirty }, reset } = useForm();
  const onSubmit = handleSubmit((data) =>{
    dispatch(postLogin(data)).then((response) => {
      if(data.nick_email === response.data.user.nickname || data.nick_email === response.data.user.Email && data.password === response.data.user.password){
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Welcome back',
          showConfirmButton: false,
          timer: 1500
        })
        console.log('bienvendio')
      } else {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Sorry',
          showConfirmButton: false,
          timer: 1500
        })
        console.log('negativo')
      }
  })
    reset()   //limpiamos campos luego de mandar la data
  });

  return (
    <div>
      <div className='inputBox'>
        <div className='titleBox'>
          <p className='LoginTitle'>Sign in to Arcade World</p>
        </div>
        <div>
          <button className='btnAuth0'>
            <img className='googleIcon' src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
            Continue with Google
          </button>
        </div>
        <p>or</p>
        <form onSubmit={onSubmit}>
          <div>
                <input
                  type='text'
                  name='nick_email'
                  className='loginInput'
                  placeholder='Email o Username'
                  {...register('nick_email', {
                    required: {
                      value: true,
                      message: 'User o Email required'
                    },
                    maxLength: 20,
                    minLength: 3
                  })}
                />
            {
              errors.name?.type === "required" && <span className="error">Name is required</span>
            }
            {
              errors.name?.type === "maxLength" && <span className="error">Name is To logn</span>
            }
            {
              errors.name?.type === "minLength" && <span className="error">Name is to short</span>
            }
          </div>

          <div>
            <input
              type="password"
                className='loginInput'
                placeholder='Password'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required'
                  },
                  minLength: {
                  value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })}
              />
            {
            errors.password && <p className="error">{errors.password.message}</p>
            }
          </div>

          <button type="submit" className='btnLogin' disabled={!isDirty}>Log in</button>
        </form>
      </div>
    </div>
  );
};
export default Login;