import React, { useState } from 'react'
import "./LoginForm.css"
function LoginForm() {
  const [userEmail , setUserEmail] = useState("")
  const [userPassword , setUserpassword] = useState("")
  const [submitted , setIsSubmitted] = useState(false)
  const [status , setStatus] = useState("")
  const loginHandeling = (e) =>{
    e.preventDefault()
    setIsSubmitted(true)
    setStatus("pending")
    if(userEmail.includes('@') && userEmail.includes('.') && userPassword.length > 6){
      console.log("submited");
      setStatus("success")
    }
    else{
      setStatus("")
    }
  }
  return (
    <div className='login-form-container'>
        <h2>Login Form</h2>
        <form method="post" onSubmit={loginHandeling}>
            <input type="text" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} placeholder='userEmail' className='login-input'/>
            {(submitted && !userEmail.includes('@')) && (
                <p className="err">email should has @</p>
            )}
            {(submitted && !userEmail.includes('.')) && (
                <p className="err">email should has .</p>
            )}
            <input type="text" onChange={(e) => setUserpassword(e.target.value)} value={userPassword} placeholder='userPassword' className='login-input'/>
            {(submitted && userPassword.length < 5) && (
                <p className="err">user password should more than 6 charecters</p>
            )}
            <input type="submit" value="Login" className='submit-btn'/>
            {(submitted && status === "pending") && (
                <p className="status">Pending...</p>
            )}
            {(submitted && status === "success") && (
                <p className="success">Login SuccessFull ! redirecting...</p>
            )}
        </form>
    </div>
  )
}

export default LoginForm