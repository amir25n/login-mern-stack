import React from 'react'
import "./SignupForm.css"
function SignupForm() {
  return (
    <div className="sinup-form-contianer">
        <h2>Signup Form</h2>
        <form>
            <input type="text" placeholder='User Name'  className='signup-input'/>
            <input type="email" placeholder='User Email' className='signup-input'/>
            <input type="password" placeholder='User Password' className='signup-input'/>
            <input type='submit' className='submit-btn' value="signup" />
        </form>
    </div>
  )
}

export default SignupForm