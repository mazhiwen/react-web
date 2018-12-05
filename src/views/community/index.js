import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import routes from 'routes';
import logo from 'images/logo.png';
import Comment from '@material-ui/icons/Comment';
import {Paper,Avatar,Tabs,Tab,Typography,
  Grid,Button,Divider} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex:'basic',
      params:{
        sortScore:''
      },
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
      <div className="page_community">
        <Paper  style={{marginBottom:3}}>
          <div>
            <Button onClick={this.historyPush.bind(this,`${routes.community.children.square.path}`)}>广场</Button>
            <Button onClick={this.historyPush.bind(this,`${routes.community.children.focus.path}`)}>关注</Button>
            <Button onClick={this.historyPush.bind(this,`${routes.community.children.edit.base}/2`)}>发布</Button>  
          </div>
        </Paper>
        <Route 
          path={routes.community.children.square.path} 
          component={routes.community.children.square.component} 
        />
        <Route 
          path={routes.community.children.focus.path} 
          component={routes.community.children.focus.component} 
        />
        <Route 
          path={routes.community.children.edit.path} 
          component={routes.community.children.edit.component} 
        />
        {/*<Route path={routes.article.path} component={routes.article.component} /> */}
      </div>
    );
  }
}

export default withRouter(componentInstance);
