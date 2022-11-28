import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Signin from './components/login_component';
import Signup from './components/signup_component';
import Home from './components/home_component';
import Topbar from './components/topbar_component';
import Personalize from './components/getstarted_component';


function App() {
  return (
      <div className = "App">
        <div className="auth-wrapper">
           <Topbar /> 
          <div className="auth-inner">
            <Routes>
              <Route path ="/" element={<Home />} />
              <Route path="/get-started" element={<Personalize />} />
              <Route path="/sign-in" element={<Signin />}/>
              <Route path="/sign-up" element={<Signup />}/>
              <Route path= '/' element = {<Home />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;

