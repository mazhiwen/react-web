import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.less';
import routes from './routes';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Paper,Menu,MenuItem} from '@material-ui/core';



class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="App">   
          <Paper className="head">
            <div className="head-inner">
              <div className="head-left">
                <img className="logo" src={logo} alt="logo"/>
                <span>第二</span>
              </div>
              <div>
                <Link to={routes.game.list.path}>游戏</Link>
                <Link to="/about">动态</Link>
              </div>
              <div>
                <Link to="/topics">我</Link>
                <Link to="/topics">赞助商</Link>
              </div>
            </div>
          </Paper>
          <Paper className="content">
            <Route path={routes.game.list.path} component={routes.game.list.component} />
            <Route path={routes.game.details.path} component={routes.game.details.component} />

          </Paper>
          <footer>
            footer
          </footer>
        </div>


      </Router>
    );
  }
}

export default App;
