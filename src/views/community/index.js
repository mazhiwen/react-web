import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import routes from 'routes';
import logo from 'images/logo.png';
import Comment from '@material-ui/icons/Comment';
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
          <Grid className="messagehead" container justify="flex-start" alignItems="center">
            <Avatar className="messageheadpic" src={logo} />
            <Typography style={{marginLeft:5,marginRight:15}} variant="body2">
              用户作者xxx
            </Typography>
            <Typography variant="caption">
              12-03 15:04
            </Typography>    
          </Grid>
          <Divider style={{marginTop:5,marginBottom:10}}/>
          <Typography className="messagecontext" variant="body1">
            这是一个动态消息的正文
            details
          </Typography>            
          <Button className="commentbtn" size="small">           
            <Comment/> 评论 
          </Button>     
          <Divider/>
          <div className="messagecommentwrap">
            <div className="messagecomment">
              <Typography variant="body2">
                这是一条评论
              </Typography>
              <Grid container justify="flex-start" alignItems="center">
                <Avatar className="messageheadpic" src={logo} />
                <Typography style={{marginLeft:5,marginRight:15}} variant="body2">
                  用户评论xxx
                </Typography>
                <Typography variant="caption">
                  12-03 15:04
                </Typography>
              </Grid>
            </div>
            <div className="messagecomment">
              <Typography variant="body2">
                这是一条评论123123213
              </Typography>
              <Grid container justify="flex-start" alignItems="center">
                <Avatar className="messageheadpic" src={logo} />
                <Typography style={{marginLeft:5,marginRight:15}} variant="body2">
                  用户评论31xxx
                </Typography>
                <Typography variant="caption">
                  12-03 15:04
                </Typography>
              </Grid>
            </div>
            
          </div>
        </Paper>
          
        
      </div>
    );
  }
}

export default withRouter(componentInstance);
