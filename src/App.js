import React, { Component } from 'react';
import logo from './images/logo.png';
import './styles/index.less';
import routes from './routes';
import {
  BrowserRouter,
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
    // primary: { 
    //   main: '#757575', 
    //   light:'#ffffff',
    //   dark:'#c7c7c7'
    // }, 
    // secondary: { 
    //   main: '#e0e0e0',
    //   light:'#ffffff',
    //   dark:'#aeaeae'
    // }, 
    text:{
      primary:'#757575'
    }
  },
  overrides:{
    MuiFormControl: {
      root: {
        
      },
    },
    MuiPaper:{
      root:{
        // padding:'2rem',
        // marginTop:3
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
    useNextVariants: true
  }
});

class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div className="App">   
            <Paper className="head">
              <div className="head-inner">
                <div className="head-left">
                  <img className="logo" src={logo} alt="logo"/>
                  <span>川川网络</span>
                </div>
                <div className="head-mainnav">
                  <Link to={routes.home.path}>首页</Link>
                  <Link to={routes.game.list.path}>游戏</Link>                  
                  <Link to="/community">社区</Link>
                </div>
                <div>
                  <Link to="/topics">我</Link>
                  <Link to="/topics">赞助商</Link>
                </div>
              </div>
            </Paper>
            <div className="content">
              <Route path={routes.home.path} component={routes.home.component} />
              <Route path={routes.game.list.path} component={routes.game.list.component} />
              <Route path={routes.game.details.path} component={routes.game.details.component} />
              <Route path={routes.community.path} component={routes.community.component} />
              {/* <Route path={routes.article.path} component={routes.article.component} /> */}
            </div>
            <footer>
              footer
            </footer>
          </div>
        </MuiThemeProvider>

      </BrowserRouter>
    );
  }
}

export default App;
