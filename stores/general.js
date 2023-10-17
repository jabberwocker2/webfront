import {defineStore} from 'pinia'
import {useUserStore} from './user'
import {usePostStore} from './post'
import axios from '../plugins/axios'
import constants from '../constants'
import commonFunctions from "~/components/commonFunction";

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
        sportsTag: false,
        craftsTag: false,
        carsTag: false,
        bikesTag: false,
        scienceTag: false,
        historyTag: false,
        nationalTag: false,
        DIYTag: false,
        kidsTag: false,
        musicTag: false,
        newsTag: false,
        selectedTags: null,
        replyActive: false,
        comments: null,
        currentPostId: null,
        commentsForPost: null,
        componentGenerate: null,
        postToIterate: null,
        allPost: null,
        expandedComment: null,
        expandedPost: null,
        GeneralPrimaryObject: null,
        clickedComment: null,
        homePage:true,
        profilePage:false,
        uploadPage:false,
        profileToShow:useUserStore().id,
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
        changePage(showPage,id=null) {
            if(showPage === 'home') {
                this.homePage = true;
                this.profilePage = false;
            } else if(showPage === 'profile') {
                if(id) {
                    this.$state.profileToShow = id;
                }
                this.profilePage = true;
                this.homePage = false;
            }
        },
        async getPostComment(id) {
            let res = await $axios.get('/api/getPostComments?id=' + id)
                if (res.data.comment.length > 0) {
                    for (let i = 0; i < res.data.comment.length; i++) {
                        this.$state.commentsForPost.push(res.data.comment[i]);
                    }
                    console.log('waste',this.$state.commentsForPost );
                }
        },

        async Loaded(id) {
        },
        async unLoaded() {
        },

        async getRandomUsers(type, id = null) {
            let res = await $axios.get(`/api/get-random-users?id=` + id)

            if (type === 'suggested') {
                this.suggested = res.data.suggested
            }

            if (type === 'following') {
                this.following = res.data.following


            }
        },

        increaseCurrentPostID() {
            this.$state.currentPostId++;
        },

        updateSideMenuImage(array, user) {
            for (let i = 0; i < array.length; i++) {
                const res = array[i];
                if (res.id == user.id) {
                    res.image = user.image
                }
            }
        },
        async paginateScroller(tags, id) {
            let res = await $axios.get('/api/getPost?tags=' + tags + '&getPostId=' + id);
            res.data[0].sno = id;
            res.data[0].user.image = 'http://localhost:8000/files/user-placeholder.png';
            setTimeout(function () {
                useGeneralStore().posts.push(res.data[0])
            }, 500)

        },

        async getAllUsersAndPosts(tags, noOfPosts = 10) {
            this.expandedComment = [];
            this.expandedPost = [];
            this.posts = [];
            let res = await $axios.get('/api/home?tags=' + tags)
            this.$state.currentPostId = 1;
            // commonFunctions.currentPostId = 1;
            for (let i = 0; i < noOfPosts; i++) {

                this.posts.push(res.data[i])
                this.posts[i].user.image = 'http://localhost:8000/files/user-placeholder.png';
            }
            // for(let i =0;i>this.posts.length;i++)
            //   if(this.posts[this.$state.currentPostId-1].sno < this.$state.currentPostId +1 ||this.posts[this.$state.currentPostId-1].sno > this.$state.currentPostId -5 ) {
            //     this.$state.postToIterate.push(this.post[this.$state.currentPostId-1]);
            //   }
            this.comments = this.posts.comments
        }
    },
    persist: true,
})