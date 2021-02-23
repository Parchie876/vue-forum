<template>
    <form @submit.prevent="savePost">
      <div class="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
          v-model="text"
        ></textarea>
      </div>
      <div class="form-actions">
      <button v-if="isUpdate" @click.prevent="cancel" class="btn btn-ghost">Cancel</button>
        <button class="btn-blue">{{isUpdate ? 'Update' : 'Submit Pos'}}t</button>
      </div>
    </form>
</template>
<script>
export default {
  props: {
    threadId: {
      required: false
    },
    post: {
      type: Object
    }
  },

  data () {
    return {
      text: this.post ? this.post.text : ''
    }
  },

  computed: {
    isUpdate () {
      return !!this.post
    }
  },

  methods: {
    savePost () {
      this.persist()
      .then(post => {
        this.$emit('save-post', {post})
      })
    },

    cancel () {
      this.$emit('cancel')
    },

    createPost () {
      const post = {
        text: this.text,
        threadId: this.threadId
      }
      this.text = ''

      return this.$store.dispatch('createPost', post)
    },

    updatePost () {
      const payload = {
        id: this.post['.key'],
        text: this.text
      }
      return this.$store.dispatch('updatePost', payload)
    },

    persist () {
      return this.isUpdate ? this.updatePost() : this.createPost()
    }
  }
}
</script>
<style  scoped>
</style>