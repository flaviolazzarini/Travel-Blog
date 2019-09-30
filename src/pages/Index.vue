<template>
  <Layout>
    <div id="indexPage">
      <b-button
        id="loginButton"
        ref="button"
        class="btn btn-dark"
        v-on:click="login"
      >{{this.loginText}}</b-button>
      <div id="netlify-identity"></div>
      <BlogOverview :blogPosts="$page.blogPosts.edges" />
    </div>
  </Layout>
</template>

<page-query>
query BlogPosts {
  blogPosts: allBlogPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        excerpt
        image
        path
      }
    }
  }
}
</page-query>

<script>
import BlogOverview from "@/components/BlogOverview";
const netlifyIdentity = require("netlify-identity-widget");
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    BlogOverview
  },
  data() {
    return {
      loginText: "Sign up / Log in"
    };
  },
  methods: {
    login: function() {
      netlifyIdentity.open();
    }
  },
  created() {},
  mounted() {
    //this.user =
    netlifyIdentity.init({
      container: "#netlify-identity" // defaults to document.body,
    });
    if (netlifyIdentity.currentUser() !== null) {
      this.loginText = "Log out";
    } else {
      this.loginText = "Sign up / Log in";
    }
    netlifyIdentity.on("login", user => (this.loginText = "Log out"));
    netlifyIdentity.on("logout", () => (this.loginText = "Sign up / Log in"));
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
#loginButton {
  margin-bottom: 5px;
}
</style>
