import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter
} from 'react-router-dom';
import logo from '../../../images/logo.png';
import routes from '../../../routes';
import {TextField,Button,Chip,Select,MenuItem,FormControl,InputLabel,FormLabel,Checkbox,FormControlLabel,FormGroup} from '@material-ui/core';


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
      ],
      releaseYearList:[
        { 
          value:'2018888',
          label:2018
        },
        { 
          value:'20189999',
          label:2019
        }
      ],
      age:''
    };
  }
  handleChange=()=>e=>{
    this.setState({
      'sortItemShow':e.target.value
    })
  }
  handleClick=(value)=>{
    console.log(value);
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
              {
                this.state.releaseYearList.map((value,key)=>
                  <Chip key={key} variant="outlined" label={value.label} onClick={this.handleClick.bind(this,value.value)}/>
                )
              }
            </div>
          </div>
          <div className="filter-box">
            <span>题材</span>
            <div>
              {
                this.state.releaseYearList.map((value,key)=>
                  <Chip key={key} variant="outlined" label={value.label} onClick={this.handleClick.bind(this,value.value)}/>
                )
              }
            </div>
          </div>
          <div className="filter-box">
            <span>平台</span>
            <div>
              {
                this.state.releaseYearList.map((value,key)=>
                  <Chip key={key} variant="outlined" label={value.label} onClick={this.handleClick.bind(this,value.value)}/>
                )
              }
            </div>
          </div>

          <div className="sort-wrap">
            <span>排序</span>
            <FormControl>
              <InputLabel htmlFor="age-simple">评分</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleClick}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>  
            <FormControl>
              <InputLabel htmlFor="age-simple">热度</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleClick}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                <MenuItem value={10}>评分从高到低</MenuItem>
                <MenuItem value={20}>评分从高到低</MenuItem>
              </Select>
            </FormControl>  
            <FormControl>
              <InputLabel htmlFor="age-simple">发布年限</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleClick}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                <MenuItem value={10}>评分从高到低</MenuItem>
                <MenuItem value={20}>评分从高到低</MenuItem>
              </Select>
            </FormControl> 

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
