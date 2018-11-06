import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import routes from '../../../routes';

import {Divider} from '@material-ui/core';


class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params:{
      }
  
    };
  }
  handleChange = event => {
    this.setState({ 
      params:{
      }
    });
  
  };

  historyPush=(path)=>{
    this.props.history.push(path);
  }
  render() {


    return (
      <div className="article_box">
        <h4 onClick={this.historyPush.bind(this,`${routes.game.details.base}/33`)}>
        [官方]这是一个文章的111标题
        </h4>
        <p>
          Paper can be used to build surface or other elements for your application.Paper can be used to build surface or other elements for your application.
          Paper can be used to build surface or other elements for your application.Paper can be used to build surface or other elements for your application.
        </p>
        <Divider className="article_box_hr"/>
      </div>
    );
  }
}

export default withRouter(componentInstance);
