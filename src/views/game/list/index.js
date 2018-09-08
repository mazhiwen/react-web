import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter
} from 'react-router-dom';
import logo from '../../../images/logo.png';
import routes from '../../../routes';
import {TextField,Button,Chip} from '@material-ui/core';


class componentInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortItemShow: false,
      params:{
        sortScore:''
      },
      gameList:[
        {
          name:'name1',
          score:'32131',
          hot:'11'
        },
        {
          name:'name2',
          score:'',
          hot:''
        }
      ]
    };
  }
  handleChange=()=>e=>{
    this.setState({
      'sortItemShow':e.target.value
    })
  }
  handleClick=()=>{

  }
  handleGameItemClick = (id,event) => {
    // console.log(`${routes.game.details.path}/${id}`);
    this.props.history.push(`${routes.game.details.base}/${id}`);
  };
  render() {
    return (
      <Router>
        <div>

          <TextField
            id="name"
            value={this.state.sortItemShow}
            onChange={this.handleChange()}
            margin="normal"
          />
          <Button variant="outlined">
            找一找
          </Button>

          
          <div className="filter-box">
            <span>发布年限</span>
            <div>
              <Chip variant="outlined" label="Basic Chip" onClick={this.handleClick}/>
              <Chip variant="outlined" label="Basic Chip" onClick={this.handleClick}/>
              <Chip variant="outlined" label="Basic Chip" onClick={this.handleClick}/>
              <Chip variant="outlined" label="Basic Chip" onClick={this.handleClick}/>

            </div>
          </div>
          <div className="filter-box">
            <span>题材</span>
            <ul>
              <li>2018</li>
              <li>2019</li>
            </ul>
          </div>
          <div className="filter-box">
            <span>平台</span>
            <ul>
              <li>2018</li>
              <li>2019</li>
            </ul>
          </div>

          <div className="sort-wrap">
            <span>排序</span>
            <div>
              <span>评分</span>
              <select className="sort-item">
                <option>评分从高到低</option>
                <option>评分从高到低</option>  
              </select>
            </div>
            <div>
              <span>热度</span>
              <select className="sort-item">
                <option>评分从高到低</option>
                <option>评分从高到低</option>  
              </select>
            </div>
            <div>
              <span>发布年限</span>
              <select className="sort-item">
                <option>评分从高到低</option>
                <option>评分从高到低</option>  
              </select>
            </div>
          </div>

          <div>
            {
              this.state.gameList.map((value,key)=>
                <div key={key} onClick={this.handleGameItemClick.bind(this,key)} className="game-item-box">
                  {value.name}
                  <img src={logo} alt="logo"/>
                  评分：{value.score}
                  热度：{value.hot}
                </div>
              )
            }
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(componentInstance);
