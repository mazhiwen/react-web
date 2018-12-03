import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import routes from 'routes';
import logo from 'images/logo.png';

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
            <Button>广场</Button>
            <Button>关注</Button>
            <Button onClick={this.historyPush.bind(this,`${routes.article.children.edit.base}/2`)}>发布</Button>  
          </div>
        </Paper>
        
        <Paper className="messagewrap">
          <Typography variant="body1">
            这是一个动态消息的正文
            details

            
          </Typography>
          <Divider style={{marginTop:10,marginBottom:5}}/>
          <Grid container justify="flex-start" alignItems="center">
            <Avatar style={{width:25,height:25}} src={logo} />
            <Typography style={{marginLeft:10,marginRight:20}}variant="caption">
              用户作者xxx
            </Typography>
            <Typography variant="caption">
              12-03 15:04
            </Typography>
            <Button size="small">           
              评论
            </Button>     
          </Grid>
          {/*<div>
            <Divider />
            <div>
              这是一条评论    12-03 15:04  
            </div>
            <div>
              这是一条评论    04-15 15:04  
            </div>
            <div>
              这是一条评论    2015-04-15 15:04  
            </div>
          </div>*/}
        </Paper>
      </div>
    );
  }
}

export default withRouter(componentInstance);
