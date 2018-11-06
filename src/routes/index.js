import gameList from '../views/game/list'; 
import gameDetails from '../views/game/details'; 
import gamePart from '../views/game/part'; 
import gameVersion from '../views/game/part/version'; 
import gameSysBook from '../views/game/part/sysbook'; 
import gameArticle from '../views/game/part/article'; 
import gameOperate from '../views/game/part/operate'; 

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
          path:'/game/part/:id/version',
          component:gameVersion
        },
        sysbook:{
          path:'/game/part/:id/sysbook',
          component:gameSysBook
        },
        article:{
          path:'/game/part/:id/article',
          component:gameArticle
        },
        operate:{
          path:'/game/part/:id/operate',
          component:gameOperate
        }

      }
    },
    
  }



}