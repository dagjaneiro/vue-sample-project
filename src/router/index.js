import Vue from 'vue'
import Router from 'vue-router'
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
      path: '/posts/:id',
      component: PostDetails,
      props: true
    }
  ]
})
