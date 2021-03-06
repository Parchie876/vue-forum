import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
// import ThreadShow from '@/components/ThreadShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/thread/create/:forumId',
      name: 'CreateThread',
      // route level code-splitting
      // this generates a separate chunk (createThread.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "createThread" */ '@/views/CreateThreadPage'),
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      // route level code-splitting
      // this generates a separate chunk (thread.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "threadShow" */ '@/views/ThreadShowPage'),
      props: true
    },
    {
      path: '/thread/:id/edit',
      name: 'ThreadEdit',
      // route level code-splitting
      // this generates a separate chunk (threadEdit.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "threadEdit" */ '@/views/EditThreadPage'),
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      // route level code-splitting
      // this generates a separate chunk (forum.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "forum" */ '@/views/ForumPage'),
      props: true
    },
    {
      path: '/category/:id',
      name: 'Category',
      // route level code-splitting
      // this generates a separate chunk (category.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "category" */ '@/views/CategoryPage'),
      props: true
    },
    {
      path: '/me',
      name: 'Profile',
      // route level code-splitting
      // this generates a separate chunk (profile.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "profile" */ '@/views/ProfilePage'),
      props: true
    },
    {
      path: '/me/edit',
      name: 'ProfileEdit',
      // route level code-splitting
      // this generates a separate chunk (profile.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "profile" */ '@/views/ProfilePage'),
      props: {edit: true}
    },
    {
      path: '*',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (thread.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "threadShow" */ '@/views/NotFound')
      // redirect: {name: 'HomePage'}
    }
  ],
  mode: 'history'
})
