import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import routes from 'routes';

import {Paper,AppBar,Tabs,Tab,Typography,
  ExpansionPanel,ExpansionPanelSummary,
  ExpansionPanelDetails,Button,List,TextField,Divider} from '@material-ui/core';

class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params:{
      },
    };
  }

  historyPush=(path)=>{
    this.props.history.push(path);
  }
  render() {

    return (
      <Paper>
        <Switch>
          <Route path={routes.article.children.edit.path} component={routes.article.children.edit.component} />
        </Switch>
      </Paper>
    );
  }
}

export default withRouter(componentInstance);
