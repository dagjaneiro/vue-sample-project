import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Content from '@/components/Content'
import Callback from '@/components/Callback'
import PostFeed from '@/components/PostFeed'
import PostDetails from '@/components/PostDetails'
import AuthService from '@/auth/auth-service'

const auth = new AuthService()

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Content,
      props: { auth },
      children: [
        {
          path: '/',
          component: PostFeed
        },
        {
          path: '/posts/:id',
          component: PostDetails,
          props: true
        }
      ],
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      component: Login,
      props: { auth }
    },
    {
      path: '/callback',
      component: Callback,
      props: { auth }
    }
  ]
})

// Handle Authentication
auth.authNotifier.on('authChange', authState => {
  if (authState.authenticated) {
    router.push('/')
  } else {
    router.push('/login')
  }
})

auth.authNotifier.on('navigate', ({ path }) => router.replace(path))

const bypassAuth = true // process.env.NODE_ENV === 'testing'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.isAuthenticated() && !bypassAuth) {
      return next({ path: '/login' })
    }
  }
  next()
})

export default router
