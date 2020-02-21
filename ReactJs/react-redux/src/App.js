import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './modules2/counter/counter/CounterContainer';
import UserContainer from './modules2/users/UserContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <Router>
      <section>
        <UserContainer/>
      </section>
      </Router>
    </div>
  );
}

export default App;
