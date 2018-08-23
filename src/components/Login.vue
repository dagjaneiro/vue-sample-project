<template>
  <h4>
    You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
  </h4>
</template>

<script>
export default {
  name: 'auth',
  props: ['auth'],
  data() {
    this.auth.handleAuthentication()
    return {}
  }
}
</script>
