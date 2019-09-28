<template>
  <Layout>
    <h1 v-html="$page.blogPost.title" />
    <h2 v-html="$page.blogPost.excerpt" />
    <h3 v-html="$page.blogPost.date" />
    <g-image :src="$page.blogPost.image" class="image" />
    <blogContent :content="$page.blogPost.content" />
    <h1>Kommentare</h1>
  </Layout>
</template>

<page-query>
query BlogPost($path: String!) {
  blogPost(path: $path) {
    title
    excerpt
    date
    image
    content
  }
}
</page-query>

<script>
import BlogContent from "@/components/BlogContent";

export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  },
  components: {
    BlogContent
  }
};
</script>

<style scoped>
.image {
  width: 100%;
}
</style>