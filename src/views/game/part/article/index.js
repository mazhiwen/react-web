import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import routes from '../../../../routes';

import {Paper,Typography,ExpansionPanel,ExpansionPanelSummary,
  ExpansionPanelDetails,Button,List,TextField,Divider} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortItemShow: false,
      params:{
        sortScore:''
      },
      expanded:''
  
    };
  }
  handleChange = event => {
    this.setState({ 
      params:{
        sortScore:event.target.value
      }
    });
  
  };

  historyPush=(path)=>{
    this.props.history.push(path);
  }
  render() {


    return (
      <div className="gamedetails">
        <div>
          <Button>问答</Button>
          <Button>评测报告</Button>  
          <Button>教程</Button>
          <Button>杂谈</Button>
        </div>
        <div>
          

        </div>
      </div>
    );
  }
}

export default withRouter(componentInstance);
