import React from 'react';
import Nav from './components/navigation/Nav';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Journey from './components/pages/Journey';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Routes>
            <Route path = "/" element={<Home />}>
                {/*public routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/journey" element={<Journey />} />

                {/*we want to protect these routes*/}
                <Route path="/" element={<Home />} />
                
                {/* catch all*/}
                {/*<Route path="*" element={<Missing />} /> */}
            </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

