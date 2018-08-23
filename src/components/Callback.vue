<template>
  <div class="spinner">
    Loading...
  </div>
</template>

<script>
export default {
  name: 'callback',
  props: ['auth'],
  mounted() {
    this.auth.handleAuthentication()
  }
}
</script>
