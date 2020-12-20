import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import ThreadShow from '@/components/ThreadShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/thread',
      name: 'ThreadShow',
      // route level code-splitting
      // this generates a separate chunk (thread.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "threadShow" */ '@/components/ThreadShow')
    }
  ]
})
