<template>
  <div class="post-feed">
    <p>Rendering post feed</p>
    <li>
      <ul v-for="post in posts" :key="post.id">
      <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </ul>
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created() {
    this.$store.dispatch('getPosts')
  },
  computed: mapGetters(['posts'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
