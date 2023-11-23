import React, { useEffect,useState } from 'react';
import { Link,useNavigate} from "react-router-dom"
import './css/login.css'
const Login=()=>{
const [email,setEmail]=React.useState('');
const [password,setPassword]=React.useState('');
const navigate= useNavigate();
useEffect(()=>{//to ensure by writting in url /login it not redirect after logged in
    const auth= localStorage.getItem('user');
    if(auth){
        navigate('/');
    }
})

const handleLogin=async()=>{
    console.warn("email,password",email,password);
    //integrate with backend
    let result = await fetch("http://localhost:5000/login", {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    result= await result.json();
    console.warn(result);
    if(result.auth){//if auth token is there then user is logged in(cause of jwt)
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));//stores auth in token file in localstorage
        navigate('/');
    }
    else{
        alert("please enter connect details");
    }
}

    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <Link to="/signup">Sign Up</Link>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e)=>setEmail(e.target.value)} value={email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e)=>setPassword(e.target.value)} value={password}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  
  

export default Login;