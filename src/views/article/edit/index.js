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
      <Paper>
        <div>
          
        </div>
        <Divider />
        <div>
          编写
          <Switch>
          </Switch>
        </div>
          
        
      </Paper>
    );
  }
}

export default withRouter(componentInstance);
