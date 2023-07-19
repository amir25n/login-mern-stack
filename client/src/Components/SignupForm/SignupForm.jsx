import React from 'react'
import "./SignupForm.css"
function SignupForm() {
  return (
    <div className="sinup-form-contianer">
        <form>
            <input type="text" placeholder='User Name'  className='signup-input'/>
            <input type="email" placeholder='User Email' className='signup-input'/>
            <input type="password" placeholder='User Password' className='signup-input'/>
            <button className='submit-btn'>signup</button>
        </form>
    </div>
  )
}

export default SignupForm