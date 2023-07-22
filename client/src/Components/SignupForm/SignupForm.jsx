import React, { useState } from 'react'
import "./SignupForm.css"
import axios from 'axios'
function SignupForm() {

    const [userName , setUserName] = useState("")
    const [userEmail , setUserEmail] = useState("")
    const [userPassword , setUserpassword] = useState("")
    const [submitted , setIsSubmitted] = useState(false)
    const [status , setStatus] = useState("")

    const submitHandeling = (event) =>{
        event.preventDefault()
        setIsSubmitted(true)
        setStatus("pending")
        if(userName.length > 5  && userEmail.includes('@') && userEmail.includes('.') && userPassword.length > 6){

            axios.post("https://login-form.iran.liara.run/signup" , {
                userName,
                userEmail,
                userPassword
            })
            .then(res => setStatus(res.data.message))
        }
    }


  return (
    <div className="signup-form-contianer">
        <h2>Signup Form</h2>
        <form method='post' onSubmit={submitHandeling}>
            <input type="text" placeholder='User Name (more than 6chars)'  className='signup-input' value={userName} onChange={(e) => setUserName(e.target.value)}/>
            {(submitted && userName.length < 5) && (
                <p className="err">user name length should be morethan 6 charecters</p>
            )}
            <input type="email" placeholder='User Email' className='signup-input' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            {(submitted && !userEmail.includes('@')) && (
                <p className="err">email should has @</p>
            )}
            {(submitted && !userEmail.includes('.')) && (
                <p className="err">email should has .</p>
            )}
            <input type="password" placeholder='User Password (more than 6chars)' className='signup-input' value={userPassword} onChange={(e) => setUserpassword(e.target.value)}/>
            {(submitted && userPassword.length < 5) && (
                <p className="err">user password should more than 6 charecters</p>
            )}
            <input type='submit' className='submit-btn' value="signup" />
            {(submitted && status === "pending") && (
                <p className="status">Pending...</p>
            )}
            {(submitted && status === "user-ok") && (
                <p className="success">Signup SuccessFull ! redirecting...</p>
            )}
            {(submitted && status === "email-error") && (
                <p className="err">Email is not valid</p>
            )}
        </form>
    </div>
  )
}

export default SignupForm