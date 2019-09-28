<template>
  <div class="blogPosts">
    <div class="blogPost" v-for="item in blogPosts" :key="item.node.id">
      <g-link :to="item.node.path" class="blog-link">
        <b-card
          :title="item.node.title"
          :img-src="item.node.image"
          :img-alt="item.node.title"
          class="card"
        >
          <b-card-text>{{ item.node.excerpt }}</b-card-text>
        </b-card>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogPosts: Array,
    required: true
  }
};
</script>

<style scoped>
.blog-link {
  text-decoration: none;
}

.card {
  margin-bottom: 16px;
}
</style>