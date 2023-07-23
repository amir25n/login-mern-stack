import React from 'react'
import "./LoginForm.css"
function LoginForm() {
  return (
    <div className='login-form-container'>
        <h2>Login Form</h2>
        <form method="post">
            <input type="text" placeholder='userEmail' className='login-input'/>
            <input type="text" placeholder='userPassword' className='login-input'/>
            <input type="submit" value="Login" className='submit-btn'/>
        </form>
    </div>
  )
}

export default LoginForm