import React, { useState } from 'react'
import "./SignupForm.css"
function SignupForm() {

    const [userName , setUserName] = useState("")
    const [userEmail , setUserEmail] = useState("")
    const [userPassword , setUserpassword] = useState("")

    const submitHandeling = (event) =>{
        event.preventDefault()
    }


  return (
    <div className="sinup-form-contianer">
        <h2>Signup Form</h2>
        <form onSubmit={submitHandeling}>
            <input type="text" placeholder='User Name'  className='signup-input' value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <input type="email" placeholder='User Email' className='signup-input' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            <input type="password" placeholder='User Password' className='signup-input' value={userPassword} onChange={(e) => setUserpassword(e.target.value)}/>
            <input type='submit' className='submit-btn' value="signup" />
        </form>
    </div>
  )
}

export default SignupForm