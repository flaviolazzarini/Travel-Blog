<template>
  <Layout>
    <div data-netlify-identity-menu></div>
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
    title: "Hello, world!",
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', async: false, defer: false }
    ],
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
