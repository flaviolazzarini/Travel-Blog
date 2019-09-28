<template>
  <div class="comment">
    <b-list-group v-if="posts && posts.length">
      <b-list-group-item class="comment-item" v-for="post in posts" :key="post.id">{{post.title}}</b-list-group-item>
    </b-list-group>
    <b-form-textarea id="textarea" rows="7" v-model="text"></b-form-textarea>
    <b-button class="mx-auto" variant="outline-primary" v-on:click="submit(text)">senden</b-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // Input
  props: {
    blogId: String
  },

  // Properties
  data() {
    return {
      posts: [],
      text: ""
    };
  },

  methods: {
    submit: function(comment, event) {
      if (comment.length) {
        alert(comment);
      }
    }
  },

  // Fetches posts when the component is created.
  created() {
    // axios
    //   .get(`http://jsonplaceholder.typicode.com/posts`)
    //   .then(response => {
    //     // JSON responses are automatically parsed.
    //     this.posts = response.data;
    //   })
    //   .catch(e => {
    //     this.errors.push(e);
    //   });
  }
};
</script>

<style scoped>
#textarea {
  margin: 16px 0;
}

.comment-item {
  margin-top: 8px;
  border-radius: 8px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.1);
}
</style>