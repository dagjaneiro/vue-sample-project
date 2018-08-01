<template>
  <div class="hello">
    <p>This is the details of the post.</p>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <button v-if="!loadedComments" @click="loadComments">Load Comments</button>
    <div v-else>
      <h3>Comments</h3>
      <li>
        <ul v-for="comment in comments" :key="comment.id + comment.postId">
          {{ comment.name }}
        </ul>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (this.post.id == null) {
      this.$store.dispatch('getPostById', this.$props.id)
    }
  },

  data() {
    return {
      loadedComments: false
    }
  },

  methods: {
    loadComments() {
      this.loadedComments = true
      this.$store.dispatch('getCommentsforPostId', this.$props.id)
    }
  },

  computed: {
    post() {
      return this.$store.getters.getPostById(this.$props.id) || {}
    },

    comments() {
      return this.$store.getters.getCommentsforPostId(this.$props.id)
    }
  },
  props: {
    id: String
  }
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
