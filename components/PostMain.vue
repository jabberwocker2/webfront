<template>
    <div :id="`PostMain-${post.id}`" class="flex  ">

        <div v-if="post.video == 'http://16.171.150.205'" @click="isLoggedIn(post.user)" class="cursor-pointer">
            <img class="rounded-full max-h-[60px]" width="60" :src="post.user.image">
        </div>

        <div class="pl-3 w-full px-">

            <div v-if="post.video == 'http://16.171.150.205'" class="flex items-center justify-between pb-0.5 mt-[5%]">
                <button @click="isLoggedIn(post.user)">
                    <span class="font-bold hover:underline cursor-pointer">
                        {{ $generalStore.allLowerCaseNoCaps(post.user.name) }}
                    </span>
                    <span class="text-[13px] text-light text-gray-500 pl-1 cursor-pointer">
                        {{ post.user.name }}
                    </span>
                </button>

                <button @click="follow(user)"
                    class="border text-[15px] px-[21px] py-0.5 hover:bg-[#ffeef2] font-semibold rounded-md">
                    Follow
                </button>
            </div>

            <div v-if="post.video == 'http://16.171.150.205'"
                class="commentText text-[30px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">{{ post.text }}</div>

            <div v-if="post.video == 'http://16.171.150.205'" class="flex items-center pb-0.5 border-b-2 ">

                <div :class="`${tags.trim().toLowerCase()}`" v-for="tags in temp" :key="tags"
                    class=" text-[14px] pb-0.5 pr-1">{{ tags.replace('All', '') }}</div>
            </div>



            <div>

                <div v-if="post.video == 'http://16.171.150.205'"
                    class="debate relative min-h-[480px] max-h-[580px] min-w-[265px]  items-center bg-white dark:bg-black-200 rounded-xl cursor-pointer">

                    <div v-for="comment in post.comments" :key="comment" class="commentSection unset  mt-2 max-w-[500px]">
                        <div class="commentArea w-full border-l-2">

                            <NuxtLink :to="`/profile/${comment.user.id}`">
                                <img class="rounded-full mt-[5px]" width="20" :src="comment.user.image">
                            </NuxtLink>
                            <div class="ml-1 pt-0.5 w-full">
                                <div class="text-[18px] flex justify-between">
                                    {{ comment.user.name }}
                                    <Icon v-if="$userStore.id === comment.user.id"
                                        @click="deleteComment($generalStore.selectedPost, comment.id)"
                                        class="cursor-pointer" name="material-symbols:delete-outline-sharp" size="25" />
                                </div>
                                <div class="commentText text-[15px]   break-words max-w-[70%]">
                                    {{ comment.text }}
                                </div>
                                <div class="commentText text-[15px]   break-words max-w-[70%]">
                                    <Icon name="mdi:lightbulb" size="15" />
                                    <Icon @click="replyToComment()" name="mdi:message-reply-text" size="15" class="ml-3" />

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div v-else
                    class="relative min-h-[480px] max-h-[750px] max-w-[420px] justify-self-center items-center bg-black rounded-xl ">

                    <div class="absolute bottom-2 left-3 text-white mb-2 ml-2 z-2">
                        <div class="flex items-center  pb-0.5">
                            <div @click="isLoggedIn(post.user)" class="cursor-pointer">
                                <img class="rounded-full max-h-[60px] mr-2" width="30" :src="post.user.image">
                            </div>
                            <button @click="isLoggedIn(post.user)">
                                <span class="font-bold hover:underline cursor-pointer mr-2">
                                    {{ $generalStore.allLowerCaseNoCaps(post.user.name) }}
                                </span>

                            </button>

                            <button @click="follow(user)"
                                class="border text-[15px] px-[21px] py-0.5 hover:bg-[#ffeef2] font-semibold rounded-md">
                                Follow
                            </button>
                        </div>

                        <div v-if="post.video == 'http://16.171.150.205'"
                            class="text-[30px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">{{ post.text }}</div>
                        <div class="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">{{ post.text }}</div>

                        <div class="flex items-center pb-0.5">
                            800px800px
                            <div :class="`${tags.trim().toLowerCase()}`" v-for="tags in temp" :key="tags"
                                class=" text-[14px] pb-0.5 pr-1">{{ tags.replace('All', '') }}</div>
                        </div>


                        <div v-if="post.video != 'http://16.171.150.205'"
                            class="text-[14px] pb-0.5 flex items-center font-semibold">
                            <Icon name="mdi:music" size="17" />
                            <div class="px-1">original sound - AWESOME</div>
                            <Icon name="mdi:lightbulb" size="20" />
                        </div>
                    </div>
                    <div class="absolute bottom-0 right-0 text-white">
                        <div class="pb-4 text-center">
                            <div>

                                <button @click="isLiked ? unlikePost(post) : likePost(post)" class=" p-2 cursor-pointer">
                                    <Icon name="mdi:lightbulb" size="35" :color="isLiked ? '#f0cc2c' : ''" />
                                </button>
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">{{ post.likes.length }}</span>
                        </div>

                        <div class="pt-4 pb-4 text-center">
                            <div class=" p-2 cursor-pointer">
                                <Icon name="bx:bxs-message-rounded-dots" size="35" />
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">43</span>
                        </div>

                        <div class="pt-4 text-center">
                            <div class=" p-2 cursor-pointer">
                                <Icon name="ri:share-forward-fill" size="35" />
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">55</span>
                        </div>
                    </div>
                    <video ref="video" loop muted class="rounded-xl object-cover mx-auto h-full " :src="post.video" />
                   

                </div>

                <div v-if="post.video == 'http://16.171.150.205'" class="relative mr-[20px]">
                    <div class="absolute bottom-0 right-0">
                        <div class="pb-4 text-center">
                            <div>

                                <button @click="isLiked ? unlikePost(post) : likePost(post)"
                                    class="rounded-full bg-gray-200 p-2 cursor-pointer">
                                    <Icon name="mdi:lightbulb" size="25" :color="isLiked ? '#f0cc2c' : ''" />
                                </button>
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">{{ post.likes.length }}</span>
                        </div>

                        <div class="pt-4 pb-4 text-center">
                            <div class="rounded-full bg-gray-200 p-2 cursor-pointer">
                                <Icon name="bx:bxs-message-rounded-dots" size="25" />
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">43</span>
                        </div>

                        <div class="pt-4 text-center">
                            <div class="rounded-full bg-gray-200 p-2 cursor-pointer">
                                <Icon name="ri:share-forward-fill" size="25" />
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">55</span>
                        </div>
                    </div>


                </div>
                <div v-else class="relative mr-[20px]">
                   
                </div>
            </div>
        </div>
    </div>
    <div  v-if="replyActive == true"  class="sm:w-[60%] w-full">
        <textarea cols="30" rows="4" maxlength="80" class="
                                        resize-none
                                        w-full
                                        text-gray-800
                                        border
                                        border-gray-300
                                        rounded-md
                                        py-2.5
                                        px-3
                                        focus:outline-none
                                    "></textarea>
        <button class="flex items-center bg-[#f0cc2c] text-white border rounded-md ml-3 px-3 py-[6px]">
            <span class="mx-4 font-medium text-[15px]">Post reply</span>
        </button>
    </div>
</template>

<script setup>
const props = defineProps(['post', 'user'])
const { $generalStore, $userStore, $profileStore } = useNuxtApp();
const { post, user } = toRefs(props)
const router = useRouter()
var replyActive = false;
let comment = ref(null);
var str = post.value.tags;
var temp = new Array();
temp = str.split(",");
let video = ref(null)
console.log(post);
console.log($generalStore.selectedTags, "selected tags");

console.log(post.value.video != 'http://16.171.150.205');
if (post.value.video != 'http://16.171.150.205') {
    onMounted(() => {
        $generalStore.selectedPost = post.value;
        let observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                console.log('Element is playing' + post.value.id);
                video.value.play()
            } else {
                console.log('Element is paused' + post.value.id);
                video.value.pause()
            }

        }, { threshold: [0.6] });
        observer.observe(document.getElementById(`PostMain-${post.value.id}`));
    })



    onBeforeUnmount(() => {
        video.value.pause()
        video.value.currentTime = 0
        video.value.src = ''
    })
}
const addComment = async () => {
    try {
        await $userStore.addComment($generalStore.selectedPost, comment.value)
        comment.value = null
        document.getElementById('Comments').scroll({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.log(error)
    }
}

const deleteComment = async (post, commentId) => {
    let res = confirm('Are you sure you want to delete this comment?')
    try {
        if (res) {
            await $userStore.deleteComment(post, commentId)
        }
    } catch (error) {
        console.log(error)
    }
}

const isLiked = computed(() => {
    let res = post.value.likes.find(like => like.user_id === $userStore.id)
    if (res) {
        return true
    }
    return false
})

const isFollow = computed(() => {
    let res = user.value.follow.find(follow => follow.user_id === $userStore.id)
    if (res) {
        return true
    }
    return false
})

const likePost = async (post) => {
    if (!$userStore.id) {
        $generalStore.isLoginOpen = true
        return
    }
    try {
        await $userStore.likePost(post)
    } catch (error) {
        console.log(error)
    }
}

const unlikePost = async (post) => {
    if (!$userStore.id) {
        $generalStore.isLoginOpen = true
        return
    }
    try {
        await $userStore.unlikePost(post, false)
    } catch (error) {
        console.log(error)
    }
}

const follow = async (user) => {
    if (!$userStore.id) {
        $generalStore.isLoginOpen = true
        return
    }
    try {
        await $userStore.follow()
    } catch (error) {
        console.log(error)
    }
}

const replyToComment = () => {
    if (replyActive == false) {
        console.log("reached if");
        replyActive = true;
    } else {
        replyActive = false;
    }
    console.log("reply to comment", $generalStore.replyActive);
}

// const unfollow = async (user) => {
//     if (!$userStore.id) {
//         $generalStore.isLoginOpen = true
//         return
//     }
//     try {
//         await $userStore.unfollow(user, false)
//     } catch (error) {
//         console.log(error)
//     }
// }

const isLoggedIn = (user) => {
    if (!$userStore.id) {
        $generalStore.isLoginOpen = true
        return
    }
    setTimeout(() => router.push(`/profile/${user.id}`), 200)
}

const displayPost = (post) => {
    if (!$userStore.id) {
        $generalStore.isLoginOpen = true
        console.log($generalStore.selectedPost);
        return
    }

    $generalStore.setBackUrl('/')
    $generalStore.selectedPost = null
    setTimeout(() => router.push(`/post/${post.id}`), 200)

}

</script>

<style>
.debate {
    max-height: 500px;
    overflow: scroll;
}

.debate::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}

.commentSection {

    max-height: 500px;
    overflow: scroll;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */

}

.commentSection::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}

.commentArea {
    max-width: 800px;

    display: -webkit-box;
}

.commentText {
    overflow-wrap: anywhere;
}
</style>