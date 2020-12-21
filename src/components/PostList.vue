<template>
  <div>
    <div class="post-list">
      <PostListItem 
      v-for="post in posts" 
      :post="post" 
      :key="post['.key']" />
    </div>
  </div>
</template>
<script>
import PostListItem from './PostListItem'
export default {
  components: {
    PostListItem
  },
  props: {
    posts: {
      required: true,
      type: Array
    }
  }
}
</script>