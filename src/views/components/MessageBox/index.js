import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';
import logo from 'images/logo.png';
import Comment from '@material-ui/icons/Comment';
import TouchApp from '@material-ui/icons/TouchApp';

import {Paper,Avatar,Typography,
  Grid,Button,Divider,
  TextField
} from '@material-ui/core';
import Pagination from "material-ui-flat-pagination";



//评论实体组件
class MessageComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowReply:false,
      page:0,
      rowsPerPage:5,
      offset:0,
      commentTxt:''
    };
    this.openReply=this.openReply.bind(this);
    this.handleChangePage=this.handleChangePage.bind(this);
    this.commentTxtChange=this.commentTxtChange.bind(this);
  }
  openReply=()=>{
    this.setState({
      isShowReply:!this.state.isShowReply
    });
  }
  handleChangePage = (event, offset) => {
    this.setState({ offset });
  };
  commentTxtChange=  event => {
    this.setState({
      commentTxt: event.target.value,
    });
  };
  render(){
    const {isShowReply,page,rowsPerPage,offset} = this.state;
    return (
      <div className="messagecomment">
        <Typography variant="body2">
          这是一条评论111
        </Typography>
        <Grid container justify="flex-start" alignItems="center">
          <Avatar className="messageheadpic" src={logo} />
          <Typography style={{marginLeft:5,marginRight:15}} variant="body2">
            用户评论xxx
          </Typography>
          <Typography variant="caption">
            12-01 15:04
          </Typography>
          <Button size="small" className="commentoperate"
            onClick={this.openReply}
          >
            <Comment/> 43
          </Button>
          <Button size="small">
            <TouchApp/>32
          </Button>
        </Grid>
        {isShowReply&&<div className="messagereplywrap">
          <Divider/>
          <div className="replaybody">
            <div className="replayitem">
              <Typography variant="body2">
                这是一条回复
              </Typography>
              <Grid container justify="flex-start" alignItems="center">
                <Avatar className="messageheadpic" src={logo} />
                <Typography style={{marginLeft:5,marginRight:15}} variant="body2">
                  用户评论xxx
                </Typography>
                <Typography variant="caption">
                  12-03 15:04
                </Typography>
                <Button size="small" className="commentoperate"
                  onClick={this.openReply}
                >
                  回复
                </Button>
              </Grid>
            </div>
            <div className="replayitem">
              <Typography variant="body2">
                这是一条回复
              </Typography>
              <Grid container justify="flex-start" alignItems="center">
                <Avatar className="messageheadpic" src={logo} />
                <Typography style={{marginLeft:5,marginRight:15}} variant="body2">
                  用户评论xxx
                </Typography>
                <Typography variant="caption">
                  12-02 15:04
                </Typography>
              </Grid>
            </div>
            <TextField
              className="replayitem"
              label="评论回复" multiline rowsMax="4"
              value={this.state.commentTxt}
              onChange={this.commentTxtChange}
              fullWidth variant="outlined"
            />
            <div className="replayitem">
              <Pagination
                limit={10} style={{display:"inlineblock"}} 
                offset={offset} total={100}
                reduced={true} onClick={this.handleChangePage} size='small'
              />
            </div>
          </div>
        </div>}
        
      </div>
    )
  }
}










class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params:{
      },
      isShowComment:false
    };
    this.openComment=this.openComment.bind(this);
  }
  handleChange = event => {
    this.setState({ 
      params:{
      }
    });
  };
  openComment=()=>{
    this.setState({
      isShowComment:!this.state.isShowComment
    });
  }
  historyPush=(path)=>{
    this.props.history.push(path);
  }
  render() {
    const {isShowComment}=this.state;
    return (
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
          <div>
            <Button className="commentbtn" size="small"
              onClick={this.openComment}
            >           
              <Comment/> 15 
            </Button>
            <Button size="small">
              <TouchApp/>2999
            </Button>
          </div>            
          {isShowComment&&(<div>    
            <Divider/>
            <div className="messagecommentwrap">
              <MessageComment/>
              <MessageComment/>
            </div>
          </div>)}
        </Paper>
    );
  }
}

export default withRouter(componentInstance);
