import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import routes from '../../../../routes';

import {Paper,Typography,ExpansionPanel,ExpansionPanelSummary,
  ExpansionPanelDetails,Button,List,TextField,Divider} from '@material-ui/core';

function DetailsBox(props){
  return (
    <div>
      <Typography className="details_box_title" variant="subtitle1">
        {props.title}
      </Typography>
      {props.children}
    </div>
  );
}
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
        <DetailsBox title="基本信息">
          <table className="gird_table gird_table_3">
            <caption></caption>
            <tbody>
              <tr><th>名称</th><td>名称(enname)</td><th>英文名称</th><td>enname</td><th>发行日期</th><td>enname</td></tr>
              <tr><th>题材</th><td>中世纪</td><th>模式</th><td>arpg</td><th>平台</th><td>pc/web</td></tr>
              <tr><th>开发商</th><td>大叔大叔大叔大叔</td><th>评分</th><td>1231</td><th>热度</th><td>1222</td></tr>
            </tbody>      
          </table>
        </DetailsBox>
        <DetailsBox title="评分">
          <table className="gird_table gird_table_4">
            <caption>画面</caption>
            <tbody>
              <tr><th>模型细节可见</th><td>3</td><th>维度</th><td>23</td><th>热度</th><td>1222</td><th>光影真实</th><td>3</td></tr>
              <tr><th>粒子效果</th><td>2</td><th>色调搭配</th><td>2</td><th>热度</th><td>1222</td><th>平台</th><td>pc/web</td></tr>
              <tr><th>开发商</th><td>大叔大叔大叔大叔</td><th>评分</th><td>1231</td><th>热度</th><td>1222</td><th>热度</th><td>1222</td></tr>
            </tbody>      
          </table>
          <table className="gird_table gird_table_3">
            <caption>音效</caption>
            <tbody>
              <tr><th>模型细节可见</th><td>3</td><th>维度</th><td>23</td><th>光影真实</th><td>3</td></tr>
              <tr><th>粒子效果</th><td>2</td><th>色调搭配</th><td>2</td><th>平台</th><td>pc/web</td></tr>
              <tr><th>开发商</th><td>大叔大叔大叔大叔</td><th>评分</th><td>1231</td><th>热度</th><td>1222</td></tr>
            </tbody>      
          </table>
        </DetailsBox>
      </div>
    );
  }
}

export default withRouter(componentInstance);
