import React, { Component } from 'react';
import {
  BrowserRouter as Router,
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
import logo from '../../../../images/logo.png';


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
      <div>
        <div className="operate_wrap">
          <p className="caption">主界面</p>
          <img src={logo} alt="logo"/>
          <p>5.图片标数字，下方文字说明数字</p>
          <p>1.[快捷键k]打算的撒的撒的撒的dasd</p>
          <p>2.的撒的撒的撒的</p>
          <p>3.[快捷键k]打算的撒的撒的撒的dasd</p>
          <p>4.的撒的撒的撒的</p>
        </div>
        <div className="operate_wrap">
          <p className="caption">二界面</p>
          <img src={logo} alt="logo"/>
          <p>0.图片标数字，下方文字说明数字</p>
          <p>1.[快捷键k]打算的撒的撒的撒的dasd</p>
          <p>2.的撒的撒的撒的</p>
          <p>3.[快捷键k]打算的撒的撒的撒的dasd</p>
          <p>4.的撒的撒的撒的</p>
        </div>
          
        
      </div>
    );
  }
}

export default withRouter(componentInstance);
