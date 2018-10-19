import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from '../../../images/logo.png';

import {Paper,Typography} from '@material-ui/core';
class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortItemShow: false,
      params:{
        sortScore:''
      }
    };
    console.log(this.props.match.params);
  }
  handleChange = event => {
    this.setState({ 
      params:{
        sortScore:event.target.value
      }
    });
  };
  render() {
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
              <caption></caption>
              <tbody>
                <tr><th>名称</th><td>名称(enname)</td><th>英文名称</th><td>enname</td><th>发行日期</th><td>enname</td></tr>
                <tr><th>题材</th><td>中世纪</td><th>模式</th><td>arpg</td><th>平台</th><td>pc/web</td></tr>
                <tr><th>开发商</th><td>大叔大叔大叔大叔</td><th>评分</th><td>1231</td><th>热度</th><td>1222</td></tr>
              </tbody>      
            </table>
          </Paper>
          <div>
            系统玩法

          </div>
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
