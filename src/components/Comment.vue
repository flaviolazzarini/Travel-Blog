<template>
  <div class="comment" id="comments">
    <b-list-group v-if="posts && posts.length">
      <b-list-group-item class="comment-item" v-for="post in posts" :key="post.id">{{post}}</b-list-group-item>
    </b-list-group>
    <div v-if="this.isLoggedIn">
      <b-form-textarea id="textarea" rows="7" v-model="text"></b-form-textarea>
      <b-button variant="outline-primary" v-on:click="submit(text)">senden</b-button>
    </div>
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
      text: "",
      isLoggedIn: false
    };
  },

  methods: {
    getComments() {
      const BASIC_URL =
        `https://travel-blog-31f6e.firebaseio.com/comments/` + this.blogId;
      axios
        .get(BASIC_URL + `.json`)
        .then(response => {
          for (var key in response.data) {
            axios
              .get(BASIC_URL + `/` + key + `.json`)
              .then(res => {
                this.posts.push(res.data.comment);
              })
              .catch(e => {
                console.log(e);
              });
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
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
          .then(() => {
            this.text = "";
            this.posts.push(com);
            this.$bvToast.toast("Your comment has been submitted!", {
              title: "Success",
              autoHideDelay: 5000,
              variant: "success",
              toaster: "b-toaster-bottom-center",
              appendToast: true
            });
          })
          .catch(e => {
            this.$bvToast.toast("Your comment could not been saved!", {
              title: "Fail",
              autoHideDelay: 5000,
              variant: "danger",
              toaster: "b-toaster-bottom-center",
              appendToast: true
            });
          });
      }
    }
  },

  created() {
    const netlifyIdentity = require("netlify-identity-widget");
    this.isLoggedIn = netlifyIdentity.currentUser() !== null;
    console.log(this.isLoggedIn);
    this.getComments();
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

.comment-item:nth-last-child(1) {
  margin-bottom: 16px;
}

button {
  margin-bottom: 16px;
}
</style>