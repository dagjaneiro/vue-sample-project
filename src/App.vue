<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view :auth="auth" :authenticated="authenticated" />
  </div>
</template>

<script>
import AuthService from './auth/auth-service'
const auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'App',
  data() {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  cursor: pointer;
}
</style>
