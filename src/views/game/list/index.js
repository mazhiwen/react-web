import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter
} from 'react-router-dom';
import logo from 'images/logo.png';
import routes from 'routes';
import {TextField,Button,Chip,Select,
  MenuItem,InputAdornment,
  FormControl,InputLabel,Divider,Paper,
  FormControlLabel,FormGroup} from '@material-ui/core';
import { withStyles,createStyles } from '@material-ui/core/styles';

import Whatshot from '@material-ui/icons/Whatshot';

//排序选择组件
function SortSelect(props){
  return(
    <FormControl style={{marginRight:15}}>
      <InputLabel style={{fontSize:'0.8rem'}} htmlFor="age-simple">{props.label}</InputLabel>
      <StyledSelect
        value={props.value}
        onChange={props.onChange}
        inputProps={{
          name: 'age',
          id: 'age-simple',
        }}
      >
        <MenuItem style={{fontSize:'0.8rem'}} value="">
          <em>None</em>
        </MenuItem>
        {
          props.item.map((value)=>
            <MenuItem  key={value.key} style={{fontSize:'0.8rem'}} value={value.key}>{value.value}</MenuItem>
          )
        }
      </StyledSelect>
    </FormControl>
  )
}








const StyledSelect = withStyles(createStyles({
  root: {
    width: 100,
  },
}))(Select);
const StyledChip = withStyles(createStyles({
  root: {
    height: 25,
  },
}))(Chip);
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
          value={this.state.sortItemShow}
          onChange={this.handleChange()}
          fullWidth variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  size="small" color="primary"
                  variant="contained"
                  // onClick={this.handleChange()}
                >
                  找游戏
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </div>
      
      <div className="filter-box">
        <label className="main-label">发布年限</label>
        <div>
          {
            this.state.releaseYearList.map((value,key)=>
              <StyledChip 
                className="filter-value" key={key} 
                variant="default" label={value.label} 
                onClick={this.handleClick.bind(this,value.value)}
              />
            )
          }
        </div>
      </div>
      <div className="filter-box">
        <label className="main-label">题材</label>
        <div>
          {
            this.state.releaseYearList.map((value,key)=>
            <StyledChip 
              className="filter-value" key={key} 
              variant="default" label={value.label} 
              onClick={this.handleClick.bind(this,value.value)}
            />
            )
          }
        </div>
      </div>
      <div className="filter-box">
        <label className="main-label">平台</label>
        <div>
          {
            this.state.releaseYearList.map((value,key)=>
            <StyledChip 
              className="filter-value" key={key} 
              variant="default" label={value.label} 
              onClick={this.handleClick.bind(this,value.value)}
            />
            )
          }
        </div>
      </div>
    </Paper>
    <Paper className="sl-paper">      
      <div className="sort-wrap">
        <label className="main-label">排序</label>
        <SortSelect
          label='评分' 
          value={this.state.age}
          onChange={this.handleClick}
          item={[
            {key:'1',value:'10'},
            {key:'2',value:'50'}
          ]}
        />
        <SortSelect
          label='热度' 
          value={this.state.age}
          onChange={this.handleClick}
          item={[
            {key:'1',value:'评分从高到低'},
            {key:'2',value:'评分从高到低'}
          ]}
        />
        <SortSelect
          label='发布日期' 
          value={this.state.age}
          onChange={this.handleClick}
          item={[
            {key:'1',value:'12321'},
            {key:'2',value:'1aa2321'}
          ]}
        />

      </div>

      <div className="gamelist-wrap">
        {
          this.state.gameList.map((value,key)=>
            <div key={key} onClick={this.handleGameItemClick.bind(this,key)} className="game-item-box">
              <div className="gameitem-base-wrap">
                <img src={logo} alt="logo"/>
                <div className="gameitem-base">  
                  <div>评分 {value.score}</div>
                  <div>热度 {value.hot}</div>
                  
                </div>
              </div>
              <div>
                <h4>{value.name}</h4>
                <p>{value.enName}</p>
                <p>发行日期：{value.releaseDate}</p>
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
