<template>
  <div>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <PostList :posts="posts"/>
      <PostEditor 
        @save-post="addPost"
        :threadId ="id"
      />
    </div>
  </div>
</template>
<script>
import sourceData from '@/data'
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'
export default {
  name: 'ThreadShowPage',
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      thread: sourceData.threads[this.id]
    }
  },
  computed: {
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(sourceData.posts)
      .filter(post => postIds.includes(post['.key']))
    }
  },
  methods: {
    addPost ({post}) {
      const postId = post['.key']
      this.$set(sourceData.posts, postId, post)
      this.$set(this.thread.posts, postId, postId)
      this.$set(sourceData.users[post.userId].posts, postId, postId)
    }
  }
}
</script>
