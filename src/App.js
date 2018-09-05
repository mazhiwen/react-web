import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.

          </p> */}
          <header>
            <div>第二</div>
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/topics">Topics</Link>
              用户
            </div>
            
          </header>
        </div>


      </Router>
    );
  }
}

export default App;
