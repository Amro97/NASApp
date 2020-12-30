import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Media from './components/Media'
import Container from './components/Container'
const axios = require('axios');

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container />
      </Router>
    </div>

  );
}

export default App;
