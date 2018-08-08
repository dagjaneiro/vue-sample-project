import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Callback from '@/components/Callback'
import PostFeed from '@/components/PostFeed'
import PostDetails from '@/components/PostDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: PostFeed
    },
    {
      path: '/auth',
      component: Auth
    },
    {
      path: '/callback',
      component: Callback
    },
    {
      path: '/posts/:id',
      component: PostDetails,
      props: true
    }
  ]
})
