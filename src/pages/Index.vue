<template>
  <Layout>
    <BlogOverview :blogPosts="$page.blogPosts.edges" />
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

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    BlogOverview
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
