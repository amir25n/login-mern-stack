import React, { useState } from 'react'
import "./LoginForm.css"
function LoginForm() {
  const [userEmail , setUserEmail] = useState("")
  const [userPassword , setUserpassword] = useState("")
  const loginHandeling = (e) =>{
    e.preventDefault()
  }
  return (
    <div className='login-form-container'>
        <h2>Login Form</h2>
        <form method="post" onSubmit={loginHandeling}>
            <input type="text" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} placeholder='userEmail' className='login-input'/>
            <input type="text" onChange={(e) => setUserpassword(e.target.value)} value={userPassword} placeholder='userPassword' className='login-input'/>
            <input type="submit" value="Login" className='submit-btn'/>
        </form>
    </div>
  )
}

export default LoginForm