import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },
  getters: {
    authUser (state) {
      return state.users[state.authId]
    }
  },

  actions: {
    createPost ({commit, state}, post) {
      const postId = 'newPost' + Math.random()
      post['.key'] = postId
      post.userId = state.authId
      post.publishedAt = Math.floor(Date.now() / 1000)

      commit('setPost', {post, postId})
      commit('appendPostToThread', {threadId: post.threadId, postId})
      commit('appendPostToUser', {userId: post.userId, postId})
    },

    createThread ({state, commit, dispatch}, {text, title, forumId}) {
      const threadId = 'newThreadId' + Math.random()
      const userId = state.authId
      const publishedAt = Math.floor(Date.now() / 1000)
      const thread = {
      //  TODO Add contributors
      // TODO Add first post ID
      // TODO Add first post at
      //  TODO Add Last post at
      //  TODO Add Last post ID
      //  TODO Add slug
      //  TODO Add posts
        '.key': threadId,
        forumId,
        title,
        publishedAt,
        userId
      }
      commit('setThread', { threadId, thread })
      commit('appendThreadToForum', {forumId, threadId})
      commit('appendThreadToUser', {userId, threadId})

      dispatch('createPost', {text, threadId})
    },

    updateUser ({commit}, user) {
      commit('setUser', {userId: user['.key'], user})
    }
  },

  mutations: {
    setPost (state, { post, postId }) {
      Vue.set(state.posts, postId, post)
    },

    setUser (state, { user, userId }) {
      Vue.set(state.users, userId, user)
    },
    setThread (state, { thread, threadId }) {
      Vue.set(state.threads, threadId, thread)
    },

    appendPostToThread (state, { threadId, postId }) {
      const thread = state.threads[threadId]
      if (!thread.post) {
        Vue.set(thread, 'post', {})
      }
      Vue.set(thread.posts, postId, postId)
    },

    appendPostToUser (state, { postId, userId }) {
      const user = state.users[userId]
      if (!user.post) {
        Vue.set(user, 'post', {})
      }
      Vue.set(user.posts, postId, postId)
    },

    appendThreadToForum (state, {forumId, threadId}) {
      const forum = state.forums[forumId]
      if (!forum.post) {
        Vue.set(forum, 'post', {})
      }
      Vue.set(forum.threads, threadId, threadId)
    },

    appendThreadToUser (state, {userId, threadId}) {
      const user = state.users[userId]
      if (!user.post) {
        Vue.set(user, 'post', {})
      }
      Vue.set(user.threads, threadId, threadId)
    }
  }
})
