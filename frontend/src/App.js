import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Signin from './components/login_component';
import Signup from './components/signup_component';
import Home from './components/home_component';
import Topbar from './components/topbar_component';
import Personalize from './components/getstarted_component';
import Signout from '.components/logout_component';


function App() {
  const user = localstorage.getItem('token');
  return (
      <div className = "App">
        <div className="auth-wrapper">
           <Topbar /> 
          <div className="auth-inner">
            <Routes>
              {user && <Route path ="/" element={<Home />}/>}
              <Route path="/get-started" element={<Personalize />} />
              <Route path="/sign-in" element={<Signin />}/>
              <Route path="/sign-out" element={<Signout />}/>
              <Route path= '/' element = {<Navigate replace to = "/sign-in"/>} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;

