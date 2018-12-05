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




//回复组件
function ReplyItem(props){
  return(
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
          onClick={props.onOpenReply}
        >
          回复
        </Button>
      </Grid>
    </div>
  )
}
//评论实体组件
class MessageComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowReply:false,
      page:0,
      rowsPerPage:5,
      offset:0,
      replyTxt:''
    };
    this.openReply=this.openReply.bind(this);
    this.handleChangePage=this.handleChangePage.bind(this);
    this.replyTxtChange=this.replyTxtChange.bind(this);
  }
  openReply=()=>{
    this.setState({
      isShowReply:!this.state.isShowReply
    });
  }
  handleChangePage = (event, offset) => {
    this.setState({ offset });
  };
  replyTxtChange=  event => {
    this.setState({
      replyTxt: event.target.value,
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
            <ReplyItem onOpenReply={this.openReply}/>
            <TextField
              className="replayitem"
              label="回复评论" multiline rowsMax="4"
              value={this.state.replyTxt}
              onChange={this.replyTxtChange}
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









//动态实体组件
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
    this.openComment=this.openComment.bind(this);
    this.commentChangePage=this.commentChangePage.bind(this);
    this.commentTxtChange=this.commentTxtChange.bind(this);
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
  commentChangePage = (event, commentPageOffset) => {
    this.setState({ commentPageOffset });
  };
  commentTxtChange=  event => {
    this.setState({
      commentTxt: event.target.value,
    });
  };
  render() {
    const {isShowComment,commentPageOffset}=this.state;
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
              <TextField
                className="replayitem"
                label="回复文章" multiline rowsMax="4"
                value={this.state.commentTxt}
                onChange={this.commentTxtChange}
                fullWidth variant="outlined"
              />
              <div className="replayitem">
                <Pagination
                  limit={10} style={{display:"inlineblock"}} 
                  offset={commentPageOffset} total={100}
                  reduced={true} onClick={this.commentChangePage} size='small'
                />
              </div>
            </div>
          </div>)}
        </Paper>
    );
  }
}

export default withRouter(componentInstance);
