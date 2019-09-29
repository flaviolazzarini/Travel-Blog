<template>
  <div class="blogPosts">
    <div class="blogPost" v-for="item in blogPosts" :key="item.node.id">
      <g-link :to="item.node.path" class="blog-link">
        <div class="cards">
          <b-card :title="item.node.title" :img-src="item.node.image" :img-alt="item.node.title">
            <b-card-text>{{ item.node.excerpt }}</b-card-text>
          </b-card>
        </div>
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
  color: #37474f;
}

.cards {
  margin-bottom: 16px;
}

.cards:hover {
  transform: scale(1.01);
  color: black;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.05);
}

.card > img {
  max-height: 240px;
  object-fit: cover;
}
</style>