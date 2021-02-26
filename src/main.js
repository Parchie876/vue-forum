// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'
import firebase from 'firebase'

Vue.component('AppDate', AppDate)
Vue.config.productionTip = false

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAsuh5RWuK3rzRKeMoMrovb5UXYhHqLvh8',
  authDomain: 'the-vue-forum.firebaseapp.com',
  projectId: 'the-vue-forum',
  storageBucket: 'the-vue-forum.appspot.com',
  messagingSenderId: '871932290847',
  appId: '1:871932290847:web:16caf9ffe57903ff56f22a',
  measurementId: 'G-MT40WF34PC'
}
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
