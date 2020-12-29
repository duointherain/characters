import react, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'



function About() {
    return (
      <div className="App">
        <header className="App-header">
       
     <p>Character Sheet </p>  

     <div>First Name: <input type="text"></input></div>
     <div>Last Name: <input type="text"></input></div>
     <div>Birthdate: <input type="date"></input></div>
     <div>Hair: <input type="text"></input></div>
     <div>Eyes: <input type="text"></input></div>
     <div>Feet: <input type="number"></input></div>
     <div>Inches: <input type="number"></input></div>
    
     <button className="charsub">Sumbit</button>
          
        </header>
      </div>
    );
  }
  
  export default About;