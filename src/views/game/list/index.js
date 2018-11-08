import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter
} from 'react-router-dom';
import logo from 'images/logo.png';
import routes from 'routes';
import {TextField,Button,Chip,Select,MenuItem,FormControl,InputLabel,Divider,Paper,FormControlLabel,FormGroup} from '@material-ui/core';
import { withStyles,createStyles } from '@material-ui/core/styles';

const StyledSelect = withStyles(createStyles({
  root: {
    width: 100,
  },
}))(Select);
const sortItemForm=(
  <FormControl style={{
    marginLeft:20
  }}></FormControl>
);
const mainLabel=()=>(
  <label className="main-label">11</label>
);
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
        hot:'11',
        enName:'nameeneeee',
        releaseDate:'2015-08-08'
      },
      {
        name:'name1',
        score:'32131',
        hot:'11',
        enName:'nameeneeee',
        releaseDate:'2015-08-08'
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
  this.props.history.push(`${routes.game.details.base}/${id}/basic`);
};
render() {
  return (
  <div className="gamelist">
    <Paper className="sl-paper">
      <div className="search-box">
        <TextField
          id="name"
          value={this.state.sortItemShow}
          onChange={this.handleChange()}
          margin="normal"
        />
        <Button className="search-btn" variant="outlined">
          找一找
        </Button>
      </div>

      <div className="filter-box">
        <label className="main-label">发布年限</label>
        <div>
          {
            this.state.releaseYearList.map((value,key)=>
              <Chip className="filter-value" key={key} variant="outlined" label={value.label} onClick={this.handleClick.bind(this,value.value)}/>
            )
          }
        </div>
      </div>
      <div className="filter-box">
        <label className="main-label">题材</label>
        <div>
          {
            this.state.releaseYearList.map((value,key)=>
              <Chip className="filter-value" key={key} variant="outlined" label={value.label} 
              onClick={this.handleClick.bind(this,value.value)}/>
            )
          }
        </div>
      </div>
      <div className="filter-box">
        <label className="main-label">平台</label>
        <div>
          {
            this.state.releaseYearList.map((value,key)=>
              <Chip className="filter-value" key={key} variant="outlined" label={value.label} onClick={this.handleClick.bind(this,value.value)}/>
            )
          }
        </div>
      </div>
    </Paper>
    <Paper className="sl-paper">      
      <div className="sort-wrap">
        <label className="main-label">排序</label>
        <FormControl style={{marginRight:15}}>
          <InputLabel htmlFor="age-simple">评分</InputLabel>
          <StyledSelect
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
          </StyledSelect>
        </FormControl>  
        <FormControl style={{marginRight:15}}>
          <InputLabel htmlFor="age-simple">热度</InputLabel>
          <StyledSelect
            value={this.state.age}
            onChange={this.handleClick}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={10}>评分从高到低</MenuItem>
            <MenuItem value={20}>评分从高到低</MenuItem>
          </StyledSelect>
        </FormControl>  
        <FormControl style={{marginRight:15}}>
          <InputLabel htmlFor="age-simple">发布日期</InputLabel>
          <StyledSelect
            value={this.state.age}
            onChange={this.handleClick}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={10}>评分从高到低</MenuItem>
            <MenuItem value={20}>评分从高到低</MenuItem>
          </StyledSelect>
        </FormControl> 

      </div>

      <div className="gamelist-wrap">
        {
          this.state.gameList.map((value,key)=>
            <div key={key} onClick={this.handleGameItemClick.bind(this,key)} className="game-item-box">
              <div className="gameitem-base-wrap">
                <img src={logo} alt="logo"/>
                <div className="gameitem-base">  
                  <p>评分：{value.score}</p>
                  <p>热度：{value.hot}</p>
                  <p>发行日期：{value.releaseDate}</p>
                </div>
              </div>
              <div>
                <h4>{value.name}</h4>
                <p>{value.enName}</p>
              </div>
              
            </div>
          )
        }
      </div>
    </Paper>  
  </div>
  );
}
}

export default withRouter(componentInstance);
