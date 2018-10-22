import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from '../../../images/logo.png';

import {Paper,Typography,ExpansionPanel,ExpansionPanelSummary,
  ExpansionPanelDetails} from '@material-ui/core';
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
      sysBook:{
        '父1':{
          '子1':{
            '子子1':'dasdasdasdadadadada',
            '子子2':'dasdasdasdadadadada'
          },
          '子2':{
            '子子3':'dasdasdasdadadadada',
            '子子4':'dasdasdasdadadadada'
          }
        },
        '父2':{
          '子1':{
            '子子1':'dasdasdasdadadadada',
            '子子2':'dasdasdasdadadadada'
          },
          '子2':{
            '子子3':'dasdasdasdadadadada',
            '子子4':'dasdasdasdadadadada'
          }
        }
      }
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
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  render() {
    const { expanded } = this.state;
    return (
      <Router>
        <div>
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
            <ExpansionPanel expanded={expanded=='panel1'} onChange={this.sysChange('panel1')}>
              <ExpansionPanelSummary >
                <button>军事</button>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ExpansionPanel expanded={true} onChange={this.sysChange('panelb')}>
                <ExpansionPanelSummary >
                  <button>军事</button>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  ssss
                </ExpansionPanelDetails>
                </ExpansionPanel>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Paper>
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
