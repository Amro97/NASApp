import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Container from './components/Container'

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
