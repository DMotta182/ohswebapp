import React from 'react'
import { Container } from 'react-bootstrap'
import { 
  FacebookLoginButton , 
  GoogleLoginButton , 
  TwitterLoginButton , 
  InstagramLoginButton } from 'react-social-login-buttons'
import { useHistory } from "react-router-dom";


const Login = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push('/item/pay')
  }
  return (
    <Container className='mt-4 mb-5'>
      <h1 className=' font-weight-bold'>Sign In With</h1>
      <InstagramLoginButton onClick={handleLogin} className='my-3 font-weight-bold'/>
      <FacebookLoginButton onClick={handleLogin} className='my-3 font-weight-bold'/>
      <TwitterLoginButton onClick={handleLogin} className='my-3 font-weight-bold'/>
      <GoogleLoginButton onClick={handleLogin} className='my-3 font-weight-bold'/>
    </Container>
  )
}

export default Login