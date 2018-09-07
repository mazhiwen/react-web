import gameList from '../views/game/list'; 
import gameDetails from '../views/game/details'; 

export default {
  game:{
    list:{
      path:'/game/list',
      component:gameList
    },
    details:{
      base:'/game/details',
      path:'/game/details/:id',
      component:gameDetails
    }
  }



}