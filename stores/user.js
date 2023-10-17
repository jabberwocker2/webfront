import { defineStore } from 'pinia'
import axios from '../plugins/axios'
import { useGeneralStore } from './general'

const $axios = axios().provide.axios

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name: '',
    bio: '',
    image: '',
    color: 'gray',
    text:'',
  }),
  actions: {

    async getTokens() {
      await $axios.get('/sanctum/csrf-cookie')
    },

    async login(email, password) {
      await $axios.post('/login', {
        email: email,
        password: password
      })
    },

    async register(name, email, password, confirmPassword) {
      await $axios.post('/register', {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword
      })
    },

    async getUser() {
      let res = await $axios.get('/api/logged-in-user')

      this.$state.id = res.data[0].id
      this.$state.name = res.data[0].name
      this.$state.bio = res.data[0].bio
      this.$state.image = res.data[0].image
    },

    async updateUserImage(data) {
      return await $axios.post('/api/update-user-image', data)
    },

    async updateUser(name, bio) {
      return await $axios.patch('/api/update-user', {
        name: name,
        bio: bio
      })
    },

    async createPost(data) {
      return await $axios.post('/api/posts', data)
    },

    async deletePost(post) {
      return await $axios.delete(`/api/posts/${post.id}`)
    },

    async addComment(post, comment, parent_id, level_id, main_parent_id) {
      if (!parent_id) {
        parent_id = 0;
      }

      if (!level_id) {
        level_id = 0;
      }

      if (!main_parent_id) {
        main_parent_id = 0;
      }
      // console.log(useGeneralStore().clickedComment.id,parent_id);
      console.log('reached here 1',comment)
      if(useGeneralStore().clickedComment.id  === parent_id || parent_id === 0) {
        let res = await $axios.post('/api/comments', {
          post_id: post,
          comment: comment,
          comment_id: parent_id,
          level: level_id,
          mainParentId: main_parent_id
        })

        if (res.status === 200) {
           return res
        }
      }


    },

    async deleteComment(post, commentId) {
      let res = await $axios.delete(`/api/comments/${commentId}`, {
        post_id: post.id
      })

      if (res.status === 200) {
        await this.updateComments(post)
      }
    },

    async updateComments(post) {
      let res = await $axios.get(`/api/profiles/${post.user.id}`)

      for (let i = 0; i < res.data.posts.length; i++) {
        const updatePost = res.data.posts[i];

        if (post.id == updatePost.id) {
          useGeneralStore().selectedPost.comments = updatePost.comments
        }
      }
    },

    async likePost(post, type = "post",isPostPage) {
      if(type === "post") {
        let res = await $axios.post('/api/likes', {
          post_id : post.id,
          type: "post"
        })
        let singlePost = null

        if (isPostPage) {
          singlePost = post
        } else {
          singlePost = useGeneralStore().posts.find(p => p.id === post.id)
        }
        
        singlePost.likes.push(res.data.like)
      } else {
        
        let res = await $axios.post('/api/likes', {
          comment_id : post.id,
          type: "comment"
        })
      }

      // } else {
      //   let res = await $axios.post('/api/likes', {
      //     comment_id: post.id,
      //     type: "comment"
      //   })
      // }




    },

    async unlikePost(post, isPostPage,type = 'post') {
      if(type === "post") {

        let deleteLike = null
        let singlePost = null

        if (isPostPage) {
          singlePost = post
        } else {
          singlePost = useGeneralStore().posts.find(p => p.id === post.id)
        }
        singlePost.likes.forEach(like => {
          if (like.user_id === this.id) {
            
            deleteLike = like
          }
        });

        let res = await $axios.delete('/api/likes/' + deleteLike.id)

        for (let i = 0; i < singlePost.likes.length; i++) {
          const like = singlePost.likes[i];
          if (like.id === res.data.like.id) {
            singlePost.likes.splice(i, 1);
          }
        }
      } else {

      }
    },

    async follow(userFollowID) {
      
      let res = await $axios.post('/api/follow', {
        user_id: userFollowID,
      })

      
    },

    async logout() {
      await $axios.post('/logout')
      this.resetUser()
    },

    resetUser() {
      this.$state.id = ''
      this.$state.name = ''
      this.$state.email = ''
      this.$state.bio = ''
      this.$state.image = ''
    }

  },
  persist: true,
  //   }
})
