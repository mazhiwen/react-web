import React, { Component } from 'react';
import logo from './images/logo.png';
import './styles/index.less';
import routes from './routes';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Paper} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { light } from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
  palette: {
    type:'light',
    primary: { 
      main: '#1a1a1a', 
      // light:'#909090',
      // dark:'#515151'
    }, 
    secondary: { 
      main: '#90caf9',
      // light:'#a6d4fa',
      // dark:'#648dae'
    }, 
    text:{
      primary:'#757575'
    }
  },
  overrides:{
    MuiFormControl: {
      root: {
        // padding:'1rem',
        // marginRight:15
      },
    },
    MuiPaper:{
      root:{
        padding:'2rem'
      }
    },
    MuiExpansionPanelDetails:{
      root:{
        display: 'block'
      }
    }
  },
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 14,
  }
});

class App extends Component {
  render() {
    
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
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
            <div className="content">
              <Route path={routes.game.list.path} component={routes.game.list.component} />
              <Route path={routes.game.details.path} component={routes.game.details.component} />

            </div>
            <footer>
              footer
            </footer>
          </div>
        </MuiThemeProvider>

      </Router>
    );
  }
}

export default App;
