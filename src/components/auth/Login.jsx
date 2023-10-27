import React from 'react'
import { useForm } from 'react-hook-form';
import './auth.css'

const Login = () => {
    
  const { register, handleSubmit, formState: { errors, isDirty }, reset } = useForm();

  const onSubmit = handleSubmit((data) =>{
    console.log('data', data);
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