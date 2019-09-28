<template>
  <div class="blog-entries">
    <div v-for="edge in getBlogEntries(travelBlog)" :key="edge.node.id">
        <h3>{{edge.node.title}} - {{edge.node.date}}</h3>
        <div v-html="edge.node.content"></div>
    </div>
  </div>
</template>

<static-query>
query Entries {
  allBlogEntriy {
    edges {
      node {
        title
        date
        content
        travelBlog
      }
    }
  }
}
</static-query>

<script>
export default {
  props: {
    travelBlog: String
  },
  methods: {
    getBlogEntries(blog) {
      return this.$static.allBlogEntriy.edges.filter(edge => {
        return edge.node.travelBlog === blog;
      });
    }
  }
};
</script>