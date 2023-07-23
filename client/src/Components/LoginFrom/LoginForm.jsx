import React from 'react'
import "./LoginForm.css"
function LoginForm() {
  return (
    <div className='login-form-container'>
        <h2>Login Form</h2>
        <form method="post">
            <input type="text" placeholder='userEmail'/>
            <input type="text" placeholder='userPassword'/>
            <input type="submit" value="Login"/>
        </form>
    </div>
  )
}

export default LoginForm