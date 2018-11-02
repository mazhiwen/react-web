import gameList from '../views/game/list'; 
import gameDetails from '../views/game/details'; 
import gamePart from '../views/game/part'; 
import gameVersion from '../views/game/part/version'; 
import gameSysBook from '../views/game/part/sysbook'; 

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
    },
    part:{
      base:'/game/part',
      path:'/game/part',
      component:gamePart,
      children:{
        version:{
          base:'/game/part/version',
          path:'/game/part/version/:id',
          component:gameVersion
        },
        sysbook:{
          base:'/game/part/sysbook',
          path:'/game/part/sysbook/:id',
          component:gameSysBook
        }

      }
    },
    
  }



}