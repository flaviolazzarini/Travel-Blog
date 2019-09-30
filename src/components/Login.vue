<template>
  <div class="login">
    <b-button
      id="loginButton"
      ref="button"
      class="btn btn-dark"
      v-on:click="login"
    >{{this.loginText}}</b-button>
    <div id="netlify-identity"></div>
  </div>
</template>

<script>
const netlifyIdentity = require("netlify-identity-widget");

export default {
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
  mounted() {
    netlifyIdentity.init({
      container: "#netlify-identity"
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

<style scoped>
#loginButton {
  margin-bottom: 5px;
}
</style>