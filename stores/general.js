import { defineStore } from 'pinia'
import { useUserStore } from './user'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useGeneralStore = defineStore('general', {
  state: () => ({
    isLoginOpen: false,
    isEditProfileOpen: false,
    selectedPost: null,
    ids: null,
    isBackUrl: "/",
    posts: null,
    suggested: null,
    following: null,
    sportsTag:false,
    craftsTag:false,
    carsTag:false,
    bikesTag:false,
    scienceTag:false,
    historyTag:false,
    nationalTag:false,
    DIYTag:false,
    kidsTag:false,
    musicTag:false,
    newsTag:false,
    selectedTags:null,
    replyActive:false,
    comments:null,
    currentPostId:null,
    commentsForPost:null,
    componentGenerate:null,
  }),
  actions: {
    bodySwitch(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
        return
      }
    },

    allLowerCaseNoCaps(str) {
      return str.split(' ').join('').toLowerCase()
    },

    setBackUrl(url) {
        this.isBackUrl = url
    },

    async hasSessionExpired() {
      await $axios.interceptors.response.use((response) => {
        // Call was successful, continue.
        return response;
      }, (error) => {
          switch (error.response.status) {
              case 401: // Not logged in
              case 419: // Session expired
              case 503: // Down for maintenance
                  // Bounce the user to the login screen with a redirect back
                  useUserStore().resetUser()
                  window.location.href = '/';
                  break;
              case 500:
                  alert('Oops, something went wrong!  The team has been notified.');
                  break;
              default:
                  // Allow individual requests to handle other errors
                  return Promise.reject(error);
          }
      });
    },

    async getPostById(id) {
      let res = await $axios.get(`/api/posts/${id}`)

      this.$state.selectedPost = res.data.post[0]
      
      this.$state.ids = res.data.ids
    },

    getPostComment: async function (id) {
      console.log(id);
      let res = await $axios.get('/api/getPostComments?id=' + id)
      console.log(res, 'response');
      for (let i = 0; i < res.data.comment.length; i++) {
        this.$state.commentsForPost.push(res.data.comment[i]);
      }
    },

    async Loaded(id) {
    },
    async unLoaded() {
    },

    async getRandomUsers(type,id=null) {
      let res = await $axios.get(`/api/get-random-users?id=`+id)

      if (type === 'suggested') {
        this.suggested = res.data.suggested
      }

      if (type === 'following') {
      this.following = res.data.following
      

      }
    },

    updateSideMenuImage(array, user) {
      for (let i = 0; i < array.length; i++) {
        const res = array[i];
        if (res.id == user.id) {
            res.image = user.image
        }
      }
    },

    async getAllUsersAndPosts(tags) {
      let res = await $axios.get('/api/home?tags='+tags)
      this.posts = res.data
      this.comments = this.posts.comments
      this.$state.currentPostId = 1;

    }
  },
  persist: true,
})