<template>
    <div>
      <div class="forum-listing">
        <div class="forum-details">
          <router-link 
            class="text-xlarge"
            :to="{name: 'Forum', params: {id: forum['.key']}}"
          >{{forum.name}}
          </router-link>
          <p>{{forum.description}}</p>
        </div>

        <div class="threads-count">
          <p class="count">{{threadsCount}}</p>
          {{threadsCount === 0 ? 'thread' : 'threads'}}
        </div>

        <div class="last-thread">
          <!-- <img class="avatar" src="https://i.imgur.com/OqlZN48.jpg" alt="" />
          <div class="last-thread-details">
            <a href="thread.html">Where is the sign in button?</a>
            <p class="text-xsmall">
              By <a href="profile.html">Joseph Kerr</a>, three hours ago
            </p>
          </div> -->
        </div>
      </div>        
    </div>
</template>
<script>
import {countObjectProperties} from '@/utils'
export default {
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  computed: {
    threadsCount () {
      return countObjectProperties(this.forum.threads)
    }
  }
}
</script>
<style  scoped>

</style>