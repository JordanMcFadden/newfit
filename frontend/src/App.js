import React from 'react';
import Nav from './components/navigation/Nav';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Journey from './components/pages/Journey';
import {Routes, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Nav />
      <main className='App'>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/journey" element = {<Journey />} />
          <Route path="/login" element = {<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

