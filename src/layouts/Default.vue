<template>
  <div class="layout">
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
  margin-top: 16px;
  height: 60px;
}

.nav__link {
  color: #37474f;
}
</style>
