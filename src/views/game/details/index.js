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
      tabIndex:'basic',
      sortItemShow: false,
      params:{
        sortScore:''
      },
      expanded:''
    };
  }
  handleTabIndexChange = (event, value) => {
    this.setState({ tabIndex:value });
    this.historyPush(`${routes.game.details.base}/311/${value}`);
  };
  historyPush=(path)=>{
    this.props.history.push(path);
  }
  render() {
    let {match}=this.props;

    
    return (
      <Paper className="gamedetails sl-paper" >
        <Typography variant="h5" style={{margin:'10px 0'}}>
          这是一个游戏名字
        </Typography>
        <Tabs 
          value={this.state.tabIndex}
          onChange={this.handleTabIndexChange}>
          <Tab label="基本资料" value="basic"/>
          <Tab label="文章" value="article"/>
          <Tab label="界面操作" value="operate"/>
          <Tab label="系统玩法" value="sysbook"/>
          <Tab label="版本更新" value="version"/>
        </Tabs>
        <Divider/>
        <div className="details_box">
          <Switch>
            <Route path={routes.game.details.children.basic.path} component={routes.game.details.children.basic.component} />
            <Route path={routes.game.details.children.version.path} component={routes.game.details.children.version.component} />
            <Route path={routes.game.details.children.sysbook.path} component={routes.game.details.children.sysbook.component} />
            <Route path={routes.game.details.children.article.path} component={routes.game.details.children.article.component} />
            <Route path={routes.game.details.children.operate.path} component={routes.game.details.children.operate.component} />
          </Switch>
        </div>
        details页面
          
        
      </Paper>
    );
  }
}

export default withRouter(componentInstance);
