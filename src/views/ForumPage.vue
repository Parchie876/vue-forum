<template>
  <div class="forum-wrapper">
    <div>
      <div class="col-full push-top">
          <!-- TODO Implement breadcrumbs feature  -->
        <!-- <ul class="breadcrumbs">
          <li>
            <a href="/index.html"><i class="fa fa-home fa-btn"></i>Home</a>
          </li>
          <li><a href="/category.html">Discussions</a></li>
          <li class="active"><a href="#">Cooking</a></li>
        </ul> -->

        <div class="forum-header">
          <div class="forum-details">
            <h1>{{forum.name}}</h1>
            <p class="text-lead">{{forum.description}}</p>
          </div>
          <!-- TODO New Thread Link -->
          <router-link 
            :to="{name: 'CreateThread', params: {forum: this.forum}}" 
            class="btn-green btn-small"
            
            >Start a thread</router-link>
        </div>
      </div>

      <div class="col-full">
        <div class="category-item">
          <div class="forum-list">
            <h2 class="list-title">Recipes</h2>

            <div class="forum-listing">
              <div class="forum-details">
                <a href="#" class="forum-name">Recipes</a>

                <p class="forum-description">
                  Recipes, Guides and Tips & Tricks
                </p>
              </div>

              <div class="threads-count">
                <p class="count text-lead">1</p>
                threads
              </div>

              <div class="last-thread">
                <img
                  class="avatar"
                  src="http://cleaneatsfastfeets.com/wp-content/uploads/2013/05/Mr-Burns.gif"
                  alt=""
                />
                <div class="last-thread-details">
                  <a href="#">How I grill my fish</a>
                  <p class="text-xsmall">
                    By <a href="profile.html">Charles Montgomery Burns</a>, 2
                    days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-full push-top">
          <ThreadList :threads=" threads"/>
<!-- 
        <div class="pagination">
          <button class="btn-circle" disabled>
            <i class="fa fa-angle-left"></i>
          </button>
          1 of 3
          <button class="btn-circle"><i class="fa fa-angle-right"></i></button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import ThreadList from '@/components/ThreadList.vue'

export default {
  components: {
    ThreadList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    forum () {
      return this.$store.state.forums[this.id]
    },
    threads () {
      return Object.values(this.$store.state.threads)
            .filter(thread => thread.forumId === this.id)
    }
  }
}
</script>
<style scoped>
.forum-wrapper {
    width: 100%;
}
</style>