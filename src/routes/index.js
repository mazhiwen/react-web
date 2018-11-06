import gameList from '../views/game/list'; 
import gameDetails from '../views/game/details'; 
import gameVersion from '../views/game/details/version'; 
import gameSysBook from '../views/game/details/sysbook'; 
import gameArticle from '../views/game/details/article'; 
import gameOperate from '../views/game/details/operate'; 
import gameBasic from '../views/game/details/basic'; 

export default {
  game:{
    list:{
      path:'/game/list',
      component:gameList
    },
    details:{
      base:'/game/details',
      path:'/game/details/:id',
      component:gameDetails,
      children:{
        version:{
          path:'/game/details/:id/version',
          component:gameVersion
        },
        sysbook:{
          path:'/game/details/:id/sysbook',
          component:gameSysBook
        },
        article:{
          path:'/game/details/:id/article',
          component:gameArticle
        },
        operate:{
          path:'/game/details/:id/operate',
          component:gameOperate
        },
        basic:{
          path:'/game/details/:id/basic',
          component:gameBasic
        }

      }
    },
    
  }



}