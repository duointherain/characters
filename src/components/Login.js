import react, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'



function Login() {
    return (
      <div className="App">
        <header className="App-header">
        
     <p>Login Here </p>  
          <div>Email: <input type="email"></input></div>
          <div>Password: <input type="text"></input></div>
          <button className='charsub'>Login</button>
        </header>
      </div>
    );
  }
  
  export default Login;