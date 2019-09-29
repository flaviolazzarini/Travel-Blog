<template>
  <div class="comment">
    <b-list-group v-if="posts && posts.length">
      <b-list-group-item class="comment-item" v-for="post in posts" :key="post.id">{{post.title}}</b-list-group-item>
    </b-list-group>
    <b-form-textarea id="textarea" rows="7" v-model="text"></b-form-textarea>
    <b-button variant="outline-primary" v-on:click="submit(text)">senden</b-button>
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
    submit: function(com, event) {
      if (com.length) {
        axios
          .post(
            `https://us-central1-travel-blog-31f6e.cloudfunctions.net/comments?id=` +
              this.blogId,
            {
              comment: com
            }
          )
          .then(response => {
            console.log("comment added");
          })
          .catch(e => {
            console.log("error");
          });
      }
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(
        `https://us-central1-travel-blog-31f6e.cloudfunctions.net/comments/` +
          this.blogId
      )
      .then(response => {
        console.log(response);
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
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

button {
  margin-bottom: 16px;
}
</style>