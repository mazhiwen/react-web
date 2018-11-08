import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import routes from 'routes';

import {Paper,AppBar,Tabs,Tab,Typography,
  ExpansionPanel,ExpansionPanelSummary,
  ExpansionPanelDetails,Button,List,TextField,Divider} from '@material-ui/core';
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
      <Paper className="page_community">
        <div>
          <Button>广场</Button>
          <Button>关注</Button>
          <Button onClick={this.historyPush.bind(this,`${routes.article.children.edit.base}/2`)}>发布</Button>  
        </div>
        <Divider />
        <div>
          社区页面




          <Switch>
            <Route path={routes.game.details.children.basic.path} component={routes.game.details.children.basic.component} />
            <Route path={routes.game.details.children.version.path} component={routes.game.details.children.version.component} />
            <Route path={routes.game.details.children.sysbook.path} component={routes.game.details.children.sysbook.component} />
            <Route path={routes.game.details.children.article.path} component={routes.game.details.children.article.component} />
            <Route path={routes.game.details.children.operate.path} component={routes.game.details.children.operate.component} />
          </Switch>
        </div>
          
        
      </Paper>
    );
  }
}

export default withRouter(componentInstance);
