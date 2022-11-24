import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './components/login_component';
import Signup from './components/signup_component';

function App() {
  return (
    <Router>
      <div className = "App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path ="/" element={<Login/>}/>
              <Route path="/sign-in" element={<Login/>}/>
              <Route path="/sign-up" element={<Signup/>}/>
              <Route path="/journey" element={<Login/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

