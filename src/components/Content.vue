<template>
  <div id="content">
    <div>
      <a @click="auth.logout()">Log Out</a>
    </div>
    <img src="../assets/logo.png">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: ['auth']
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
