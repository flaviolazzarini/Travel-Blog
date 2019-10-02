<template>
  <div class="layout">
    <h1 id="title">Travel Blog</h1>
    <hr />
    <header class="header">
      <strong>
        <g-link class="nav__link" to="/">Home</g-link>
      </strong>
      <g-link class="nav__link" to="/about/">About</g-link>
      <Login />
    </header>
    <hr />
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Login from "@/components/Login";

export default {
  components: {
    Login
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

hr {
  margin-top: 4px !important;
  margin-bottom: 4px !important;
}

#title {
  text-align: center;
  margin-top: 16px;
  font-family: "Times New Roman", Times, serif;
  font-size: 54px;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
}

.nav__link {
  color: #37474f;
}
</style>
