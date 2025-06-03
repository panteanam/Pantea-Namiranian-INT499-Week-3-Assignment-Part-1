import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import './App.css';

function App() {
  useEffect(() => {
    const savedStreams = localStorage.getItem('streams');
    if (savedStreams) {
      // Load saved streams into local state here if needed
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">StreamList</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/movies" component={Movies} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
