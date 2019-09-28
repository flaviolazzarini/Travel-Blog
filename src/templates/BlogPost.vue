<template>
  <Layout>
    <h1 v-html="$page.blogPost.title" />
    <g-image :src="$page.blogPost.image" class="image" />
    <h3 v-html="$page.blogPost.excerpt" />
    <h5 v-html="$page.blogPost.date" />
    <blogContent :content="$page.blogPost.content" />
    <h1>Kommentare</h1>
    <Comment :blogId="$page.blogPost.id" />
  </Layout>
</template>

<page-query>
query BlogPost($path: String!) {
  blogPost(path: $path) {
    id
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
import Comment from "@/components/Comment";

export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  },
  components: {
    BlogContent,
    Comment
  }
};
</script>

<style scoped>
h1,
h5,
.image {
  margin-bottom: 24px;
}

.image {
  width: 100%;
}
</style>