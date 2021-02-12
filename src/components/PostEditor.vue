<template>
  <div>
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
          v-model="newPostText"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit Post</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    threadId: {
      required: true
    }
  },
  data () {
    return {
      newPostText: ''
    }
  },
  methods: {
    save () {
      const post = {
        text: this.newPostText,
        threadId: this.threadId
      }
      this.newPostText = ''

      this.$emit('save-post', {post})
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>
<style  scoped>
</style>