import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className = "App-header">
        <Nav />
            <Routes>
              <Route path="/" exact component={Home} />
              <Route path="/tweets" exact component={Tweet} />
            </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;