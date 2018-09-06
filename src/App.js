import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.less';
import routes from './routes';
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
          
          <header className="head">
            <div className="head-inner">
              <div className="head-left">
                <img className="logo" src={logo} alt="logo"/>
                <span>第二</span>
              </div>
              <div>
                <Link to={routes.game.path}>游戏</Link>
                <Link to="/about">动态</Link>
              </div>
              <div>
                <Link to="/topics">我</Link>
                <Link to="/topics">赞助商</Link>
              </div>
            </div>
          </header>
          <div>
            body
            <Route path={routes.game.path} component={routes.game.component} />


          </div>
        </div>


      </Router>
    );
  }
}

export default App;
