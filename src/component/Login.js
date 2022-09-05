import React from 'react'
import './Login.css'

const Login = (props) => {
  const loginHandler = ()=>{
    props.login(true);
  } 

  return (
    <div>
        <center>

        <button className="login-btn" onClick={loginHandler}>Login</button>
        </center>
    </div>
  )
}

export default Login