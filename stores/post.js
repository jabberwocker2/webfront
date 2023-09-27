import { defineStore } from 'pinia'


export const usePostStore = defineStore('post', {
    state: () => ({
        currentPostId: 0,
    }),
    actions: {},
})
