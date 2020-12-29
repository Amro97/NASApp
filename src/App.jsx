import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Media from './components/Media'
const axios = require('axios');
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Media/>
    </div>
  );
}

export default App;
