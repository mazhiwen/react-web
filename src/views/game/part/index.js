import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';
import logo from '../../../images/logo.png';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import routes from '../../../routes';

import {Paper,AppBar,Tabs,Tab,Typography,
  ExpansionPanel,ExpansionPanelSummary,
  ExpansionPanelDetails,Button,List,TextField,Divider} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex:'article',
      sortItemShow: false,
      params:{
        sortScore:''
      },
      expanded:''
    };
  }
  handleTabIndexChange = (event, value) => {
    this.setState({ tabIndex:value });
    this.historyPush(`${routes.game.part.base}/311/${value}`);
  };
  historyPush=(path)=>{
    this.props.history.push(path);
  }
  render() {
    let {match}=this.props;

    
    return (
      
      <Paper className="gamepart">
        <Typography variant="h4">
          这是一个游戏名字
        </Typography>
        <AppBar position="static" color="default">
          <Tabs 
            value={this.state.tabIndex}
            onChange={this.handleTabIndexChange}>
            <Tab label="社区" value="article"/>
            <Tab label="界面操作" value="operate"/>
            <Tab label="系统玩法" value="sysbook"/>
            <Tab label="版本更新" value="version"/>
          </Tabs>
        </AppBar>
        <div>
          <Switch>
            <Route path={routes.game.part.children.version.path} component={routes.game.part.children.version.component} />
            <Route path={routes.game.part.children.sysbook.path} component={routes.game.part.children.sysbook.component} />
            <Route path={routes.game.part.children.article.path} component={routes.game.part.children.article.component} />
            <Route path={routes.game.part.children.operate.path} component={routes.game.part.children.operate.component} />
          </Switch>
        </div>
        
        
 

        part页面
          
        
      </Paper>
      
    );
  }
}

export default withRouter(componentInstance);
