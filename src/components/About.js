import react, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'



function About() {
    return (
      <div className="App">
        <header className="App-header">
       
     <p>Character Sheet. </p>  

     <div>First Name: <input type="text"></input></div>
     <div>Last Name: <input type="text"></input></div>
     
          
        </header>
      </div>
    );
  }
  
  export default About;