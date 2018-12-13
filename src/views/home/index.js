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



function PaperBox(props){
  return(
    <Paper className="paper_box" style={{marginBottom:3}}>
      <Typography className="paper_box_title" variant="subtitle2">{props.title}</Typography>
      <Divider/>
      <div className="paper_box_content">
        
        {props.children}
      </div>
    </Paper>
  )
}





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
      <div className="page_home ">
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <PaperBox title="今日热门 这里的内容和动态的一样，不过热门点数是只统计今日的">
              <div>
                [教程]逆水寒新手须知
              </div>
              <div>
                [体验]我为什么离开逆水寒
              </div>
            </PaperBox>
          </Grid>
          <Grid item xs={6}>
            <PaperBox title="评分排行">
              <div>
                游戏a
              </div>
              <div>
                游戏bbbb
              </div>
            </PaperBox>
          </Grid>
          <Grid item xs={6}>
            <PaperBox title="画面排行">
              <div>
                游戏a
              </div>
              <div>
                游戏bbbb
              </div>
            </PaperBox>
          </Grid>
          <Grid item xs={6}>
            <PaperBox title="评分排行">
              <div>
                游戏a
              </div>
              <div>
                游戏bbbb
              </div>
            </PaperBox>
          </Grid>
          <Grid item xs={6}>
            <PaperBox title="画面排行">
              <div>
                游戏a
              </div>
              <div>
                游戏bbbb
              </div>
            </PaperBox>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(componentInstance);
