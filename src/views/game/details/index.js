import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
  
} from 'react-router-dom';
import logo from '../../../images/logo.png';

import {Paper,Typography,ExpansionPanel,ExpansionPanelSummary,
  ExpansionPanelDetails,Button} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortItemShow: false,
      params:{
        sortScore:''
      },
      expanded:'',
      sysBook:[
        {
          label:'父1',
          isExpanded:false,
          children:[
            {
              label:'子1',
              isExpanded:false,
              children:[
                {
                  label:'子11',
                  isExpanded:false,
                  conent:'dasdasdasdadadadada1'
                },
                {
                  label:'子12',
                  isExpanded:false,
                  conent:'dasdasdasdadadadada1'
                }
              ]
            },
            {
              label:'子2',
              isExpanded:false,
              children:[
                {
                  label:'子21',
                  isExpanded:false,
                  conent:'dasdasdasdadadadada1'
                }
              ]
            }
          ]
        },
        {
          label:'父2',
          isExpanded:false,
          children:[
            {
              label:'子2',
              isExpanded:false,
              children:[
                {
                  label:'子21',
                  isExpanded:false,
                  conent:'dasdasdasdadadadada1'
                }
              ]
            },
            {
              label:'子2',
              isExpanded:false,
              children:[
                {
                  label:'子21',
                  isExpanded:false,
                  conent:'dasdasdasdadadadada1'
                }
              ]
            }
          ]
        }
      ]
    };
    // console.log(this.props.match.params);
  }
  handleChange = event => {
    this.setState({ 
      params:{
        sortScore:event.target.value
      }
    });
  };
  sysChange= panel=>(event, expanded) => {
    // this.setState({
    //   expanded: expanded ? panel : false,
    // });
    
  };
  render() {
    const { expanded } = this.state;
    let sysBookRender=  (params)=>{
      let dom=[];
      let index=0;
      if(Object.prototype.toString.call(params)=="[object Array]"){
        params.forEach((value,key ) => {
          dom.push(
            <ExpansionPanel key={`${key}${index}`} onChange={this.sysChange(value)}>
              <ExpansionPanelSummary >
                <button>{value.label}</button>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {sysBookRender(value.children?value.children:value.conent)}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
          index++;
        });
        
      }else{
        dom.push (
          <span key={`${params}`}>{params}</span>
        );
      }
      return dom;
      
    }
    
    return (
      <Router>
      <div className="gamedetails">
        <Paper>
          <Typography variant="title">基本信息</Typography>
          <table className="gird-table">
            <caption></caption>
            <tbody>
              <tr><th>名称</th><td>名称(enname)</td><th>英文名称</th><td>enname</td><th>发行日期</th><td>enname</td></tr>
              <tr><th>题材</th><td>中世纪</td><th>模式</th><td>arpg</td><th>平台</th><td>pc/web</td></tr>
              <tr><th>开发商</th><td>大叔大叔大叔大叔</td><th>评分</th><td>1231</td><th>热度</th><td>1222</td></tr>
            </tbody>      
          </table>
        </Paper>
        <Paper>
          <Typography variant="title">评分</Typography>
          <table className="gird-table">
            <caption>画面</caption>
            <tbody>
              <tr><th>模型细节可见</th><td>3</td><th>维度</th><td>23</td><th>热度</th><td>1222</td><th>光影真实</th><td>3</td></tr>
              <tr><th>粒子效果</th><td>2</td><th>色调搭配</th><td>2</td><th>热度</th><td>1222</td><th>平台</th><td>pc/web</td></tr>
              <tr><th>开发商</th><td>大叔大叔大叔大叔</td><th>评分</th><td>1231</td><th>热度</th><td>1222</td><th>热度</th><td>1222</td></tr>
            </tbody>      
          </table>
          <table className="gird-table">
            <caption>音效</caption>
            <tbody>
              <tr><th>模型细节可见</th><td>3</td><th>维度</th><td>23</td><th>光影真实</th><td>3</td></tr>
              <tr><th>粒子效果</th><td>2</td><th>色调搭配</th><td>2</td><th>平台</th><td>pc/web</td></tr>
              <tr><th>开发商</th><td>大叔大叔大叔大叔</td><th>评分</th><td>1231</td><th>热度</th><td>1222</td></tr>
            </tbody>      
          </table>
        </Paper>
        <Paper>
          <Typography variant="title">系统玩法</Typography>
          {sysBookRender(this.state.sysBook)}
        </Paper>
        <Paper className="operate-wrap">
          <Typography variant="title">界面操作</Typography>
          <img src={logo} alt="logo"/>
          <p>1.[快捷键k]打算的撒的撒的撒的dasd</p>
          <p>2.的撒的撒的撒的</p>
          <p>3.[快捷键k]打算的撒的撒的撒的dasd</p>
          <p>4.的撒的撒的撒的</p>
          <img src={logo} alt="logo"/>
          <p>1.[快捷键k]打算的撒的撒的撒的dasd</p>
          <p>2.的撒的撒的撒的</p>
          <p>3.[快捷键k]打算的撒的撒的撒的dasd</p>
          <p>4.的撒的撒的撒的</p>
        </Paper>
        <Paper>
          <Typography variant="title">文章</Typography>
          <Paper variant="contained" href="#contained-buttons">
            <Typography variant="title">
            [官方]这是一个文章的标题
            </Typography>
            <Typography variant="body2">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </Paper>
          <Paper variant="contained" href="#contained-buttons">
            <Typography variant="title">
            这是一个文章的标题
            </Typography>
            <Typography variant="body2">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </Paper>
        </Paper>
        <Paper>
          版本更新
          <ExpansionPanel >
            <ExpansionPanelSummary >
              v1.0.2
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              1.大大说das 
              2.的撒的奥迪
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </div>
      </Router>
    );
  }
}

export default componentInstance;
