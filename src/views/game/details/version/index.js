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
        <TextField
            label="v1.0.2" multiline disabled fullWidth 
            InputProps={{
              readOnly: true,
            }}
            defaultValue={
`1.大大说das 
2.的撒的奥迪
`
            }
            margin="normal" variant="outlined" rowsMax="4"
          />
          <TextField
            label="v1.0.2" multiline disabled fullWidth 
            InputProps={{
              readOnly: true,
            }}
            defaultValue={
`1.大大说das 
2.的撒的奥迪
`
            }
            margin="normal" variant="outlined" rowsMax="4"
          />
          
        
      </div>
    );
  }
}

export default withRouter(componentInstance);
