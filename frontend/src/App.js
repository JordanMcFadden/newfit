import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Signin from './components/login_component';
import Signup from './components/signup_component';
import Workout from './components/home_component';
import Exercises from './components/exercise_component';
import Records from './components/records_component';


function App() {
  return (
      <div className = "App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path ="/" element={<Workout />} />
              <Route path="/sign-in" element={<Signin />}/>
              <Route path="/sign-up" element={<Signup />}/>
              <Route path="/exercises" element={<Exercises />}/>
              <Route path="/records" element ={<Records/>}/>
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;

