import gameList from '../views/game/list'; 
import gameDetails from '../views/game/details'; 
import gameVersion from '../views/game/details/version'; 
import gameSysBook from '../views/game/details/sysbook'; 
import gameArticle from '../views/game/details/article'; 
import gameOperate from '../views/game/details/operate'; 
import gameBasic from '../views/game/details/basic'; 
import community from '../views/community'; 
import article from '../views/article'; 
import articleView from '../views/article/view'; 
import articleEdit from '../views/article/edit'; 
import {Dynamic} from 'components';

export default {

  community:{
    base:'/community',
    path:'/community',
    component:community,
    children:{
      square:{
        path:'/community/square',
        component:Dynamic
      },
      focus:{
        path:'/community/focus',
        component:Dynamic
      },
      edit:{
        base:'/community/edit',
        path:'/community/edit/:id',
        component:articleEdit
      }
    }
  },
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
    }
  },
  article:{
    base:'/article',
    path:'/article',
    component:article,
    children:{
      view:{
        base:'/article/view',
        path:'/article/view/:id',
        component:articleView
      },
      edit:{
        base:'/article/edit',
        path:'/article/edit/:id',
        component:articleEdit
      }

    }
  }  
    
  



}