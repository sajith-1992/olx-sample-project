import React ,{ useState,useContext} from 'react';
import {  signInWithEmailAndPassword } from "firebase/auth"
import { FirebaseContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Login.css';


function Login() {
  const navigate = useNavigate();
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
   const { auth } = useContext(FirebaseContext);
  
  const handleLogin=(e)=>{
     e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"

         value={email}

         onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
          
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
           
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a onClick={() => navigate("/signup")}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
