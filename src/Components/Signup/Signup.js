import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import {  createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; 
import {auth} from '../../firebase/config'
export default function Signup() {
  
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")
  const{db}=useContext(FirebaseContext)
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !email || !phone || !password) {
      alert("Please fill in all fields");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await updateProfile(user, {
        displayName: username,});
  
      console.log(user);
      await setDoc(doc(db, "users", "UserDetails"), {
        id: user.uid,
        user: username,
        phone:phone
      })
      navigate("/login");

      
       
      // You can also save additional user info to Firestore here
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing up:", errorCode, errorMessage);
      alert(errorMessage); // Show error message to the user
    }
  };
  return (
    <div>
      <div className="signupParentDiv">
         <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />

          <input
            className="input"
            type="text"
            id="frname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
           
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

            name="email"
        
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}

            name="phone"
           
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="name"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
            name="password"
          
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
