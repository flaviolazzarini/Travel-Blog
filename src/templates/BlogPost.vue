<template>
  <Layout>
    <h1 v-html="$page.blogPost.title" />
    <g-image :src="$page.blogPost.image" class="image" />
    <b-container class="infos">
      <b-row>
        <b-col>{{$page.blogPost.destination}}</b-col>
        <b-col class="publishingDate">published: {{$page.blogPost.date}}</b-col>
      </b-row>
    </b-container>
    <h5 v-html="$page.blogPost.excerpt" />
    <blogContent :content="$page.blogPost.content" />
    <h1>Kommentare</h1>
    <Comment :blogId="$page.blogPost.id" :loggedIn="this.loggedIn" />
  </Layout>
</template>

<page-query>
query BlogPost($path: String!) {
  blogPost(path: $path) {
    id
    title
    destination
    excerpt
    date (format: "DD. MMMM YYYY")
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
  data() {
    return {
      loggedIn: false
    };
  },
  components: {
    BlogContent,
    Comment
  },

  created() {
    this.loggedIn = netlifyIdentity.currentUser() !== null;
    // Get the current user:
    console.log(this.loggedIn);
  }
};
</script>

<style scoped>
h1,
h5 {
  margin-bottom: 24px;
}

.infos,
.image {
  margin-bottom: 16px;
}

.infos {
  padding: 0;
}

.publishingDate {
  text-align: right;
}

.image {
  width: 100%;
}
</style>