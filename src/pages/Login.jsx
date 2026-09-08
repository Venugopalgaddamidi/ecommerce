import React, { useState } from 'react'
import '../css/Login.css'
function Login() {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
function SubmitForm(e){
  e.preventDefault()
  alert(`${email} ${password}`)
}
  return (
    <div>
        <form onSubmit={SubmitForm}>
           <h1>Login Page</h1>
            <div>
                <span>Email: </span>
            <input type="email"
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your Email'/>
            </div>
            <br/>
            <div>
                <span>Password: </span>
            <input type="password" name="password" placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type='submit'>Submit</button> 
      </form>
    </div>
  )
}

export default Login