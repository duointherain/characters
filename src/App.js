import { BrowserRouter as Router, Route, link,  Switch} from 'react-router-dom'
import './App.css'
import SignUp from './components/Signup'
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
// import Char from '.components/Char'
// import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      
    <main>
      {/* <nav>
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/About">Character Sheet</a></li>
          <li><a href="/Login">Login</a></li>
          <li><a href="/signup">Sign up</a></li>
          {/* <li><a href="/Char">Character Sheet</a></li> */}
        {/* </ul>
      </nav> */} 

      <nav>
        <div className='bar'>
          <div className='button'><a href="/Home">Home</a></div>
          <div className='button'><a href="/About">Character Sheet</a></div>
          <div className='button'><a href="/Login">Login</a></div>
          <div className='button'><a href="/signup">Sign up</a></div>
          {/* <li><a href="/Char">Character Sheet</a></li> */}
          </div>
      </nav>

      <link to='/Login'></link>

      <Router>
      
      <Switch>
        <Route exact path="/exact" component={Home}/>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Login" component={Login} />
        <Route path="/About" component={About} />
        {/* <Route path="/Char" component={Char} /> */}
      </Switch>
      
  
    </Router>


    </main>


  <h1>Characters</h1>
  <p>Here be characters!</p>
  <p>Hello!</p>
        
      </header>
    </div>
  );
}

export default App;
