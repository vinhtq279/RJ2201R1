import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComonent';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/lienhe">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/lienhe' element={<Contact />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
