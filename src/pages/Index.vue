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
    title: "Hello, world!"
  },
  components: {
    BlogOverview
  },
  created() {
    let ckeditor = document.createElement("script");
    ckeditor.setAttribute("src", "https://identity.netlify.com/v1/netlify-identity-widget.js");
    document.head.appendChild(ckeditor);
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
