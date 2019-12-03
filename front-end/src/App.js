import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './screens/Home';
import About from './screens/About';
import Users from './screens/Users';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <div className="section">
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/about" component={About} />
          </div>
      </div>
          {/* <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    </Router>
  );
}

export default App;
