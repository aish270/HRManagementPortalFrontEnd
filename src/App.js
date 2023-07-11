
import React from 'react'
import Login from './components/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideBar from './components/SideBar';
import Signup from './components/Signup';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    
    <div>
     
     <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
          <div className="App" id="outer-container">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        
      </div>
    </div>
            <Link className="navbar-brand" to={'/sign-in'}>
              HR PORTAL
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={'/home'}>
                   Profile
                  </Link>
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Signup/>} />
              <Route path="/home" element={<Home/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
   
   </div>
  )
}

export default App