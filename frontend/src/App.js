import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from './components/login_component';
import Signup from './components/signup_component';
import Home from './components/home_component';
import Journey from './components/journey_component';
import Topbar from './components/topbar_component';
import Personalize from './components/getstarted_component';


function App() {
  return (
    <Router>
      <div className = "App">
        <div className="auth-wrapper">
        <Topbar />
          <div className="auth-inner">
            <Routes>
              <Route exact path ="/" element={<Home />}/>
              <Route path="/get-started" element={<Personalize/>} />
              <Route path="/sign-in" element={<Signin />}/>
              <Route path="/sign-up" element={<Signup />}/>
              <Route path="/journey" element={<Journey />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

