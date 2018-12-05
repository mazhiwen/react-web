import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';

import {Paper,Avatar,Typography,
  Grid,Button,Divider,
  TextField,InputAdornment
} from '@material-ui/core';
import {MessageBox} from 'components';

class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params:{
      },
      isShowComment:false,
      commentPageOffset:0,
      commentTxt:''
    };
  }
  
  render() {
    const {isShowComment,commentPageOffset}=this.state;
    return (
      <div>
        <MessageBox/>

      </div>
    );
  }
}

export default withRouter(componentInstance);
