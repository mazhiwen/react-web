import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from '../../../images/logo.png';

import {Paper,Typography} from '@material-ui/core';
class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortItemShow: false,
      params:{
        sortScore:''
      }
    };
    console.log(this.props.match.params);
  }
  handleChange = event => {
    this.setState({ 
      params:{
        sortScore:event.target.value
      }
    });
  };
  render() {
    return (
      <Router>
        <div>
          <Paper>
            <Typography variant="title">基本信息</Typography>
            
          </Paper>
          <div>
            评分
          </div>
          <div>
            系统玩法

          </div>
          <div>
            界面操作
          </div>
          <div>
            文章

          </div>
          <div>
            版本更新

          </div>
        </div>
      </Router>
    );
  }
}

export default componentInstance;
