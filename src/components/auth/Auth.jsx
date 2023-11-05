import { useState } from 'react'
import Login from './Login'
import Create from './Create'
import { Stack } from '@mui/material'

export default function AuthLogin() {
  const [signUp, setSignUp] = useState(false)
  const [signIn, setSignIn] = useState(true)

  const handleSign = () => {
    setSignUp((elemento) => !elemento)
    setSignIn((elemento) => !elemento)
  }
  return (
    <Stack style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column', height:'100vh'}}>
      {
        signIn === true ? (<Login/>) : (<Create handleSign={handleSign}/>)
      }
      {
        signIn === true ? 
        ( 
          <div>
            <button className='btnPassW'>Forget Password</button>
              <p>No account? <button onClick={handleSign} className='btnCreate'>Create one</button></p>
          </div>
        )
        :
       ( 
        <div>
          <p>Already have account? <button onClick={handleSign}  className='btnCreate'>Sign in</button></p>
        </div>
      )
      }
      
      
    </Stack>
  )
}
