import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import logo from '../../../images/logo.png';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import routes from '../../../routes';

import {Paper,Typography,ExpansionPanel,ExpansionPanelSummary,
  ExpansionPanelDetails,Button,List,TextField,Divider} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ArticlelistBox} from '../../components';

function DetailsBox(props){
  return (
    <Paper className="details_box">
      <Typography className="details_box_title" variant="subtitle1">
        {props.title}
      </Typography>
      {props.children}
    </Paper>
  );
}

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   dense: {
//     marginTop: 16,
//   },
//   menu: {
//     width: 200,
//   },
// });
class componentInstance extends Component {
  constructor(props) {
    console.log(props);
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
                  conent:'dasdasdasdadadadada1,这段可以是图文，图文内容需要有特殊传输解析格式'
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
  historyPush=(path)=>{
    this.props.history.push(path);
  }
  render() {
    const { expanded } = this.state;
    const { classes } = this.props;
    const sysBookRender=  (params)=>{
      let dom=[];
      let index=0;
      if(Object.prototype.toString.call(params)=="[object Array]"){
        params.forEach((value,key ) => {
          dom.push(
            <ExpansionPanel className="sysbook_wrap" key={`${key}${index}`} onChange={this.sysChange(value)}>
              <ExpansionPanelSummary className="sysbook_head">
                <Button className="sysbook_btn">{value.label}</Button>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="sysbook_content">
                {sysBookRender(value.children?value.children:value.conent)}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
          index++;
        });
        
      }else{
        dom.push (
          <p key={`${params}`}>{params}</p>
        );
      }
      return dom;
      
    }
    
    return (
      <Router>
      <div className="gamedetails">
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
        <DetailsBox title="系统玩法">
          {sysBookRender(this.state.sysBook)}
          <Button variant="outlined" className="morebtn" size="small">更多...</Button>
        </DetailsBox>
        <DetailsBox title="界面操作">
          <div className="operate_wrap">
            <p className="caption">主界面</p>
            <img src={logo} alt="logo"/>
            <p>5.图片标数字，下方文字说明数字</p>
            <p>1.[快捷键k]打算的撒的撒的撒的dasd</p>
            <p>2.的撒的撒的撒的</p>
            <p>3.[快捷键k]打算的撒的撒的撒的dasd</p>
            <p>4.的撒的撒的撒的</p>
          </div>
          <div className="operate_wrap">
            <p className="caption">二界面</p>
            <img src={logo} alt="logo"/>
            <p>0.图片标数字，下方文字说明数字</p>
            <p>1.[快捷键k]打算的撒的撒的撒的dasd</p>
            <p>2.的撒的撒的撒的</p>
            <p>3.[快捷键k]打算的撒的撒的撒的dasd</p>
            <p>4.的撒的撒的撒的</p>
          </div>
          <Button variant="outlined" className="morebtn" size="small">更多...</Button>
        </DetailsBox>

        <DetailsBox title="文章">
          <ArticlelistBox></ArticlelistBox>
          <ArticlelistBox></ArticlelistBox>
          <Button variant="outlined" className="morebtn" size="small">更多...</Button>
        </DetailsBox>
        <DetailsBox title="版本更新">
          <TextField
            label="v1.0.2" multiline disabled fullWidth 
            InputProps={{
              readOnly: true,
            }}
            defaultValue={
`1.大大说das 
2.的撒的奥迪
`
            }
            margin="normal" variant="outlined" rowsMax="4"
          />
          <TextField
            label="v1.0.2" multiline disabled fullWidth 
            InputProps={{
              readOnly: true,
            }}
            defaultValue={
`1.大大说das 
2.的撒的奥迪
`
            }
            margin="normal" variant="outlined" rowsMax="4"
          />
          <Button variant="outlined" className="morebtn" size="small"
            onClick={this.historyPush.bind(this,`${routes.game.part.base}/33/version`)}
            >
            更多...
          </Button>
          
        </DetailsBox>
      </div>
      </Router>
    );
  }
}

export default withRouter(componentInstance);
