<template>
    <div :id="`PostMain-${post.id}`" class="flex  ">



        <div class="pl-3 w-full px-">

            <div v-if="post.video == 'http://localhost:8000'" class=" flex items-center justify-between pb-0.5 mt-[50%] transition-[margin-top] duration-100 ease-in-out" :id="`postDetailContainer${post.id}`">
                <button @click="isLoggedIn(post.user)" >
                    <img class="rounded-full max-h-[60px]" width="60" :src="post.user.image">
                    <span class="font-bold hover:underline cursor-pointer">
                        {{ $generalStore.allLowerCaseNoCaps(post.user.name) }}
                    </span>
                    <span class="text-[13px] text-light text-gray-500 pl-1 cursor-pointer">
                        {{ post.user.name }}
                    </span>
                </button>

                <button @click="follow(post.user.id)"
                        class="border text-[15px] px-[21px] py-0.5 hover:bg-[#ffeef2] font-semibold rounded-md">
                    Follow
                </button>
            </div>

            <div v-if="post.video == 'http://localhost:8000'"
                 class="flex commentText text-[20px] pb-0.5 break-words md:max-w-[500px] max-w-[500px] duration-500 ease-in-out cursor-pointer z-2"
                 :id="`commentText${post.id}`">{{ post.text }}<div class="flex relative float-right">
            </div>
            </div>

            <div v-if="post.video === 'http://localhost:8000'" class=" items-center pb-0.5  ">

                <div :class="`${tags.trim().toLowerCase()}`" v-for="tags in temp" :key="tags"
                     class=" text-[14px] pb-0.5 pr-1">{{ tags.replace('All', '') }}</div>
                <div class="flex top-3 right-0 Z-2 w-[100%] justify-between" :id="`topSideFeatureBar${post.id}`">
                    <div class="flex text-center">
                        <div>

                            <button @click="isLiked ? unlikePost(post) : likePost(post)" class=" pt-2 pb-2 cursor-pointer">
                                <Icon name="mdi:lightbulb" size="25" :color="isLiked ? '#f0cc2c' : ''" />
                            </button>
                        </div>
                        <span class="text-xs text-gray-800 font-semibold self-center">{{ post.likes.length }}</span>
                    </div>
                    <button @click="replyToComment(post.id, $event, comment, 'mainComment')"  :id="`discussButton${post.id}`"
                            class="  flex items-center bg-[white] text-black  rounded-2xl  px-3 w-[220px] transition-[width] duration-100 ease-in-out border-[2px] border-gray-300 justify-between z-5">
                        <p>Discuss</p>
                        <span class="text-xs text-gray-800 self-center" :id="`numberTab${post.id}`">{{ post.comments.length }}</span>
                        <button class="z-10"  @click="postComment(post.id, $event, parent_comment_id, level_id, main_parent_id) " :id="`postCommentButton${post.id}`" style="display: none">
                            <Icon name="mdi:send-variant-outline" class=" right-0 float-right z-10 color-gray-300" size="25" />
                        </button>
                        <button class="z-10"  :id="`replyCommentButton${post.id}`" style="display: none">
                            <Icon name="mdi:send-variant-outline" class=" right-0 float-right z-10 color-gray-300" size="25" />
                        </button>
                    </button>
                </div>

            </div>
<div>
            <div class="postCommentTextArea sm:w-[50%] lg:w-[100%] w-full mt-2 overflow-hidden h-[80px] transition-[height] duration-500 ease-in-out" :id="`commentReplyArea_${post.id}`"
                 style="display: none;">
        <textarea @input="commonFunctions.changeHeight(post.id);" cols="50"  class="

                                        relative
                                        resize-none
                                        object-cover
                                        w-full
                                        min-h-[50px]
                                        text-gray-800
                                        border
                                        border-gray-300
                                        rounded-2xl
                                        py-2.5
                                        px-3
                                        focus:outline-none
                                        overflow-hidden
                                        transition-[bottom] duration-200 ease-in-out
                                    " :id="`textArea${post.id}`" maxlength="200"></textarea>

            </div>

            <div class="flex overflow-hidden min-h-[800px]">

                <div :id="`thoughtContainer${post.id}`" v-if="post.video == 'http://localhost:8000'" @scroll="commonFunctions.closeTextArea(post.id)"
                     class="debate relative bottom-[500px] h-[600px] min-w-[365px] transition-[bottom] items-center bg-white dark:bg-black-200  rounded-xl cursor-pointer pt-[20px] transition-[height] duration-200 ease-in-out">
                    <div v-for="comment in post.comments"  :key="comment" class="commentSection overflow-y-visible">
                        <CommentTile v-if="comment.level_id === 0" :comment="comment" :posts="post"  />
                    </div>
                </div>

                <div v-else :id="`thoughtContainer${post.id}`"
                     class=" relative min-h-[480px] max-h-[750px] max-w-[488px] justify-self-center items-center bg-black rounded-xl  ">

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

                        <div v-if="post.video == 'http://localhost:8000'"
                             class="text-[30px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">{{ post.text }}</div>
                        <div class="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">{{ post.text }}</div>

                        <div class="flex items-center pb-0.5">
                            <div :class="`${tags.trim().toLowerCase()}`" v-for="tags in temp" :key="tags"
                                 class=" text-[14px] pb-0.5 pr-1">{{ tags.replace('All', '') }}</div>
                        </div>


                        <div v-if="post.video != 'http://localhost:8000'"
                             class="text-[14px] pb-0.5 flex items-center font-semibold">
                            <Icon name="mdi:music" size="17" />
                            <div class="px-1">original sound - AWESOME</div>
                        </div>
                    </div>
                    <div class="absolute bottom-0 right-0 text-white" style="z-index: 3;">
                        <div class="pb-4 text-center">
                            <div>

                                <button @click="isLiked ? unlikePost(post) : likePost(post)" class=" p-2 cursor-pointer">
                                    <Icon name="mdi:lightbulb" size="35" :color="isLiked ? '#f0cc2c' : ''" />
                                </button>
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">{{ post.likes.length }}</span>
                        </div>

                        <div id="mainComment" @click="replyToComment(post.id, $event, comment, 'mainComment')"
                             class="pt-4 pb-4 text-center">
                            <div class=" p-2 cursor-pointer">
                                <Icon name="mdi:send-variant-outline" class=" right-0 float-right z-10 color-gray-300" size="25" />
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">{{ post.comments.length }}</span>
                        </div>

                        <div class="pt-4 text-center">
                            <div class=" p-2 cursor-pointer">
                                <Icon name="ri:share-forward-fill" size="35" />
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">55</span>
                        </div>
                    </div>

                    <div class="block w-[800px]">
                        <div :id="`videoContainer${post.id}`" class="flex rounded-xl max-h-[800px] object-cover h-full max-w-[488px] z-0 transition-[max-height] duration-500 ease">
                            <video ref="video" loop muted class="rounded-xl object-cover h-full max-w-[488px] z-0 transition-all duration-500 ease"  :src="post.video" />
                        </div>
                        <textarea @input="commonFunctions.changeHeight(post.id)" cols="50"  class="
                                    relative
                                    resize-none
                                    object-cover
                                    w-full
                                    min-h-[100px]
                                    text-gray-800
                                    max-w-[488px]
                                    border
                                    m-auto
                                    z-0
                                    py-4
                                    px-3
                                    focus:outline-none
                                    overflow-hidden
                                    transition-[bottom] duration-200 ease-in-out
                                " :id="`textArea${post.id}`"></textarea>
                        <button class="z-20 relative top-[-60%] left-[90%]"   @click="postComment(post.id, $event, parent_comment_id, level_id, main_parent_id) ">
                            <Icon name="mdi:send-variant-outline" class=" right-0 float-right z-10 color-gray-300 bg-white" size="25" />
                        </button>
                        <div class="bg-white h-[600px] w-[600px] overflow-scroll" @scroll="makeTextArea(post.id)">

                            <div class="block postCommentTextArea sm:w-[50%] lg:w-[85%] bg-white w-full mt-2 overflow-hidden h-[80px] transition-[height] duration-500 ease-in-out " :id="`commentReplyArea_${post.id}`"
                            >
                                <div class="sticky w-[488px] min-h-[0px] bg-white z-70" :id="`closeButton${post.id}`"></div>


                            </div>

                            <div v-for="comment in post.comments"   :key="comment"  class="flex relative commentSection overflow-y-auto bottom-[0px] z-50 transition-[max-height] duration-200 ease-in-out " :id="`commentSectionArea${post.id}`">

                                <CommentTile v-if="comment.level_id === 0" :comment="comment" :posts="post"  class="relative z-10 min-h-[600px]" />
                            </div>
                        </div>

                    </div>


                </div>

                <div v-if="post.video == 'http://localhost:8000'" class="relative">



                </div>
                <div v-else class="relative mr-[20px]">

                </div>
            </div>
</div>
        </div>
    </div>

</template>

<script setup>

import commonFunctions from '../components/commonFunction';
const props = defineProps(['post', 'user'])
const { $generalStore, $userStore, $profileStore } = useNuxtApp();
const { post, user } = toRefs(props)
const router = useRouter()
var replyActive = true;
let comment = ref(null);
var parent_comment_id = null;
var main_parent_id = null;
var str = post.value.tags;
var temp = new Array();
var level_id = null;
temp = str.split(",");
let video = ref(null)
console.log(post);
console.log($generalStore.selectedTags, "selected tags");

console.log(post.value.video != 'http://localhost:8000');
console.log(post.value.comments, "on mounted")
if (post.value.video != 'http://localhost:8000') {
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
const makeTextArea = (id) => {
}
const toggleThoughtContainer = (id,type) => {
    console.log(type);
    document.getElementById("discussButton"+id).children[0].style.color = "Black";
    if(document.getElementById("discussButton"+id).style.width === "440px" || document.getElementById("discussButton"+id).children[0].innerHTML === "Close") {
        document.getElementById("discussButton"+id).style.width = "220px";
        console.log(document.getElementById("discussButton"+id).children);
        document.getElementById("discussButton"+id).style.borderColor = "lightgray";
        document.getElementById("postDetailContainer"+id).style.marginTop = "50%";
        document.getElementById("thoughtContainer"+id).style.bottom = "600px";
        document.getElementById("discussButton"+id).children[0].innerHTML = "Discuss";
        document.getElementById("discussButton"+id).children[0].style.color = "Black";
        document.getElementById("postCommentButton"+id).style.display = "none";
    } else {
        console.log(document.getElementById("discussButton"+id).children[0].innerHTML);
        document.getElementById("discussButton"+id).children[0].innerHTML = "Post";
        document.getElementById("discussButton"+id).style.borderColor = "darkgray";
        document.getElementById("discussButton"+id).style.width = "440px";
        document.getElementById("discussButton"+id).style.borderWidth = "2px";
        document.getElementById("postDetailContainer"+id).style.marginTop = "5%";
        document.getElementById("thoughtContainer"+id).style.bottom = "0px";
        document.getElementById("thoughtContainer"+id).scrollTop = 0;
        document.getElementById("postCommentButton"+id).style.display = "Block";
    }
    console.log("open thought container")
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

const follow = async (userToFollowID) => {
    if (!$userStore.id) {
        $generalStore.isLoginOpen = true
        return
    }
    try {
        await $userStore.follow(userToFollowID)
    } catch (error) {
        console.log(error)
    }
}

const replyToComment = (post, eventClick, comment, replyMode, level = null, mainParentId = null) => {


    if(document.getElementById("discussButton"+post)) {
        if (replyMode == 'mainComment') {
            console.log("event click inside main comment", comment);
        } else {
            console.log("event click inside reply comment", comment.id);
            parent_comment_id = comment.id;
            level_id = level;
            main_parent_id = mainParentId;
        }
        if (document.getElementById("commentReplyArea_" + post).style.display == "none") {
            document.getElementById("commentReplyArea_" + post).style.display = "flex";
            console.log("reached if");
        } else {
            document.getElementById("commentReplyArea_" + post).style.display = "none";
            console.log("reached else");

        }
        if((document.getElementById("discussButton"+post).children[0].innerHTML === "Close") ||(document.getElementById("discussButton"+post).children[0].innerHTML === "Discuss") ) {
            document.getElementById("postCommentButton"+post).style.display = "Block";
            document.getElementById("discussButton"+post).children[0].style.marginLeft = 0;
            toggleThoughtContainer(post,'open');
            console.log("post event comment reply", post);
        }
    } else {
        toggleVideoCommentSection(post);
    }
}

const toggleVideoCommentSection = (id) => {

    // console.log(document.getElementById("commentSectionAreaChildren"+id));
    document.getElementById("videoContainer"+id).style.maxHeight = "250px";
    document.getElementById("commentSectionArea"+id).style.maxHeight = "500px";
    // document.getElementById("commentSectionAreaChildren"+id).style.bottom = "500px";



}

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

const postComment = async (id, elementButton, parent_id, level_id, mainParentId) => {


    console.log("post comments", id)
    try {
        let replyValue = document.getElementById("textArea"+id).value;
        console.log("reply value texr area",replyValue)
        await $userStore.addComment(id, replyValue, parent_id, level_id, mainParentId)
        document.getElementById("commentReplyArea_" + id).style.display = "none";
    } catch (error) {
        console.log(error)
    }

}

</script>

<style>
.debate {
    overflow: scroll;
    width: 1200px;
    bottom: 600px;
}

.debate::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}

.commentSection {

    background: white;
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