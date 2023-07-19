import React, { useState } from 'react'
import "./SignupForm.css"
function SignupForm() {

    const [userName , setUserName] = useState("")
    const [userEmail , setUserEmail] = useState("")
    const [userPassword , setUserpassword] = useState("")
    const [submitted , setIsSubmitted] = useState(false)
    const [isAllOk , setIsAllOk] = useState(false)

    const submitHandeling = (event) =>{
        event.preventDefault()
        setIsSubmitted(true)
        if(userName.length > 5  && userEmail.includes('@') && userEmail.includes('.') && userPassword.length > 6){
            setIsAllOk(true)
        }
        else{
            setIsAllOk(false)
        }
    }


  return (
    <div className="sinup-form-contianer">
        <h2>Signup Form</h2>
        <form onSubmit={submitHandeling}>
            <input type="text" placeholder='User Name (more than 6chars)'  className='signup-input' value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <input type="email" placeholder='User Email' className='signup-input' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            <input type="password" placeholder='User Password (more than 6chars)' className='signup-input' value={userPassword} onChange={(e) => setUserpassword(e.target.value)}/>
            <input type='submit' className='submit-btn' value="signup" />
        </form>
    </div>
  )
}

export default SignupForm