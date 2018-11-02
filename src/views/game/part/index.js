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

import {Paper,SwipeableViews,AppBar,Tabs,Tab,Typography,
  ExpansionPanel,ExpansionPanelSummary,TabContainer,
  ExpansionPanelDetails,Button,List,TextField,Divider} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex:0,
      sortItemShow: false,
      params:{
        sortScore:''
      },
      expanded:''
  
    };
  }
  handleChange = (event, value) => {
    this.setState({ tabIndex:value });
  };
  historyPush=(path)=>{
    this.props.history.push(path);
  }
  render() {
    let {match}=this.props;

    
    return (
      
      <div className="gamedetails">
        <Typography variant="h4">
          这是一个游戏名字
        </Typography>
        <div>
          <Button variant="contained" onClick={this.historyPush.bind(this,`${routes.game.part.children.version.base}/3`)}>
            Link
          </Button>
          <Button variant="contained" onClick={this.historyPush.bind(this,`${routes.game.part.children.sysbook.base}/3`)}>
            Link
          </Button>

        </div>
        <Switch>
          {/* <Route path={routes.game.part.base} component={routes.game.part.component} /> */}
          <Route path={`${match.url}/version/:id`} component={routes.game.part.children.version.component} />
          <Route path={`${match.url}/sysbook/:id`} component={routes.game.part.children.sysbook.component} />

        </Switch>
 

        part页面
          
        
      </div>
      
    );
  }
}

export default withRouter(componentInstance);
