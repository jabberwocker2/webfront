import { useUserStore } from "~/stores/user"
import { useProfileStore } from "~/stores/profile"
import { useGeneralStore } from "~/stores/general"
import {usePostStore} from "~/stores/post";

export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: { 
            userStore: useUserStore(),
            profileStore: useProfileStore(),
            generalStore: useGeneralStore(),
            postStore: usePostStore()
        },
    }
})

