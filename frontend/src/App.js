import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './components/login_component';
import Signup from './components/signup_component';
import Home from './components/home_component';
import Journey from './components/journey_component';
import Nav from './components/navigation_component';

function App() {
  return (
    <Router>
      <div className = "App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path ="/" element={<Home />}/>
              <Route path="/sign-in" element={<Login/>}/>
              <Route path="/sign-up" element={<Signup/>}/>
              <Route path="/journey" element={<Journey/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

