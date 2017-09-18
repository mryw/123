import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Vuex from 'vuex'

// import Detail from '@/pages/aqy.vue'
import Detail from '@/pages/goodsDetail'
// import Header from '@/common/header/header'
// import Banner from '@/common/header/banner'

// import ss from '@/pages/home'
// import Msg from '../components/Message.vue'
// import Luyou from '../components/luyou'
Vue.use(Router)
Vue.use(Resource)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/:id/dd',//后加/ID可以匹配到
      name: 'Detail',
      component: Detail,
      alias: '/inde/:id',//这个地址也能找到
      // children: [
      //   {
      //     path:'msg',
      //     component: Msg
      //   }
      // ]
     /*children: [
       {
        path '',
        redirect: '/msg'    //重定向
       },
        {
          path:'/msg',
          component: Msg
        }
      ]*/
      // children: [
      //   {
      //     path:'luyou',
      //     name: 'shouye',
      //     component: Luyou,
      //     children: [
      //       {
      //        path: 'd',
      //        name: 'Home',
      //        component: ss
      //       }
      //     ]
      //   
       // children: [
       //   {
       //     path: 'header',
       //     name: 'header',
       //     component: Header
       //   },
       //   {
       //    path: 'banner',
       //    name: 'banner',
       //    component: Banner
       //   }  
       // ]
    },
    {
      path: '/',
      component: Detail
    }
    // {
    //   path: '/ss',
    //   component: ss
    // },
    // {//动态引入路由
    //   path: '/:id',
    //   name: 'Detail',
    //   component: Detail,
    //   alias: '/index/:id'
    // }
  ],
  mode: 'history'
})
   

 
