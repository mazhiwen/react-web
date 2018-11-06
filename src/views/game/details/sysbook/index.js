import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import routes from '../../../../routes';

import {Paper,Typography,ExpansionPanel,ExpansionPanelSummary,
  ExpansionPanelDetails,Button,List,TextField,Divider} from '@material-ui/core';
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
      <div>
        {sysBookRender(this.state.sysBook)}
          
        
      </div>
    );
  }
}

export default withRouter(componentInstance);
