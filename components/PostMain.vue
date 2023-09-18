<template>
    <div :id="`PostMain-${post.id}`" class="block">

        <div :id="`slideContainer${post.id}`" class="slideContainer flex max-w-[500px] min-h-[900px]  transition-[min-height] 1s ease-in-out max-h-[0px] overflow-x-auto overflow-y-hidden snap-mandatory snap-x">
            <div :id="`repost${post.id}`" class="snap-center z-10 min-w-[500px]" style="display: none">
                <p class="justify-self-center self-center text-xl">Repost ====></p>
            </div>
            <div v-if="(post.repostUrl !== false) && post.repostUrl !== null" :id="`repostedVideoContainer${post.id}`"
                 class="flex rounded-xl  object-cover h-full  z-0  snap-center self-center">

                <video :id="`repostedVideoElement${post.id}`" ref="video" loop muted
                       class="rounded-xl object-cover  min-h-[900px] max-w-[500px] z-0 "
                       :src="constants.base_url+post.repostUrl"/>

            </div>
            <div :id="`videoContainer${post.id}`"
                 class="flex rounded-xl  object-cover h-full  z-0  snap-center self-center">

                <video :id="`videoElement${post.id}`" ref="video" loop muted
                       class="rounded-xl object-cover  min-h-[900px] max-w-[500px] z-0 "
                       :src="constants.base_url+post.video[0]"/>

            </div>
            <div v-for="slides in (post.video).filter(slide => !slide.includes('mp4'))" :key="video" class="snap-center z-10 min-w-[500px]">
                <p>{{slides}}</p>
            </div>
        </div>

        <div :id="`commentArea-${post.id}`" class=" relative pl-3 w-full  max-h-0 bottom-[220px] transition-[bottom] 1s ease-in-out ">
            <div class=" flex items-center justify-between pb-0.5 transition-[margin-top] duration-100 ease-in-out max-w-[465px]"
                 :id="`postDetailContainer${post.id}`">
                <button @click="isLoggedIn(post.user)">
                    <img class="rounded-full max-h-[60px]" width="60" :src="post.user.image">
                    <span class="font-bold hover:underline cursor-pointer text-[white]">
                        {{ $generalStore.allLowerCaseNoCaps(post.user.name) }}
                    </span>

                </button>
                <button @click="follow(post.user.id)"
                        class="border text-[15px] px-[21px] py-0.5 hover:bg-[#ffeef2] font-semibold rounded-md  text-[white] backdrop-blur-1xl">
                    Follow
                </button>
            </div>
            <div
                class="flex text-[white] commentText text-[20px] pb-0.5 break-words md:max-w-[500px] max-w-[500px] duration-500 ease-in-out cursor-pointer z-2 transition-[opacity] 1s ease-in-out"
                :id="`commentText${post.id}`">{{ post.text }}
                <div class="flex relative float-right">
                </div>
            </div>
            <div>
            <div class=" items-center pb-0.5  ">
                <div :class="`${tags.trim().toLowerCase()}`" v-for="tags in temp" :key="tags"
                     class=" text-[14px] pb-0.5 pr-1">{{ tags.replace('All', '') }}
                </div>
                <div class="flex top-3 right-0 Z-2 w-[465px] justify-between min-h-[40px] mt-[5px]" :id="`topSideFeatureBar${post.id}`">
                    <div :id="`sparkContainer${post.id}`" class="flex text-center">
                        <div>

                            <button @click="isLiked ? unlikePost(post) : likePost(post)"
                                    class=" pt-2 pb-2 cursor-pointer text-[white]">
                                <Icon name="mdi:lightbulb" size="25" :color="isLiked ? '#f0cc2c' : ''"/>
                            </button>
                        </div>
                        <span class="text-xs text-[white] font-semibold self-center">{{ post.likes.length }}</span>
                    </div>
                    <button @click="replyToComment(post.id, $event, comment, 'mainComment')"
                            :id="`discussButton${post.id}`"
                            class="  flex items-center bg-[transparent] text-black  rounded-2xl  px-3 w-[200px] transition-[width] duration-100 ease-in-out border-[2px] border-gray-300 justify-between z-11  backdrop-blur-2xl">
                        <p class="text-[white] font-bold">Discuss</p>
                        <Icon :id="`messageIcon${post.id}`" name="mdi:message-outline" class=" right-0 float-right z-10 color-gray-300 transition-[font-size] 1s ease-in-out" style="display: none"
                              size="40"/>

                        <span class="text-xs text-[violet] self-center"
                              :id="`numberTab${post.id}`">{{ post.comments.length }}</span>
                        <button class="z-10"
                                @click="postComment(post.id, $event, parent_comment_id, level_id, main_parent_id) "
                                :id="`postCommentButton${post.id}`" style="display: none">
                            <Icon name="mdi:send-variant-outline" class=" right-0 float-right z-10 color-gray-300"
                                  size="25"/>
                        </button>
                        <button class="z-10" :id="`replyCommentButton${post.id}`" style="display: none">
                            <Icon name="mdi:send-variant-outline" class=" right-0 float-right z-10 color-gray-300"
                                  size="25"/>
                        </button>
                    </button>
                </div>
            </div>
            <div>
                <div
                    class="postCommentTextArea lg:w-[100%] w-full mt-2 overflow-hidden h-[80px]  transition-[height] duration-500 ease-in-out"
                    :id="`commentReplyArea_${post.id}`"
                    style="display: none;">
                    <textarea @input="commonFunctions.changeHeight(post.id);" cols="50" class="
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
                                        max-w-[465px]
                                        focus:outline-none
                                        overflow-hidden
                                        transition-[bottom] duration-200 ease-in-out
                                    " :id="`textArea${post.id}`" maxlength="200">
                    </textarea>
                </div>
                <div class="flex overflow-hidden min-h-[800px]">
                    <!--                    thought container main-->
                    <div :id="`thoughtContainer${post.id}`"
                         @scroll="commonFunctions.closeTextArea(post.id)"
                         class="debate relative bottom-[500px] h-[600px] min-w-[365px] transition-[bottom] items-center bg-white dark:bg-black-200  rounded-xl cursor-pointer pt-[20px] transition-[height] duration-200 ease-in-out">
                            <div v-for="comment in post.comments" :key="comment" class="commentSection overflow-y-visible">
                            <CommentTile v-if="comment.level_id === 0" :comment="comment" :posts="post"/>
                        </div>
                    </div>
                    <div v-if="post.video[0] === constants.base_url" class="relative">
                    </div>
                    <div v-else class="relative mr-[20px]">
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import commonFunctions from '../components/commonFunction';
import constants from '../constants'
const props = defineProps(['post', 'user'])
const {$generalStore, $userStore, $profileStore} = useNuxtApp();
const {post, user} = toRefs(props)
const router = useRouter()
var replyActive = true;
let comment = ref(null);
var parent_comment_id = null;
var main_parent_id = null;
var str = post.value.tags;
var noOfChildrenInDiscuss = 0;
var temp = new Array();
var level_id = null;
temp = str.split(",");
let video = ref(null)


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

        }, {threshold: [0.6]});
        setTimeout(function ()  {
            document.getElementById('repost'+post.value.id).style.display = "grid";
        },200)
        observer.observe(document.getElementById(`PostMain-${post.value.id}`));
        var slideNumber = 1;

        document.getElementById('slideContainer'+post.value.id).addEventListener('wheel', function (e) {
            console.log("event hpnd",document.getElementById('slideContainer'+post.value.id).scrollLeft);
            if(e.deltaX > 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
                //scroll right
                if(document.getElementById('slideContainer'+post.value.id).scrollLeft < 750 && document.getElementById('slideContainer'+post.value.id).scrollLeft > 250) {
                    console.log(document.getElementById('slideContainer'+ post.value.id).style.offset)
                    document.getElementById("postDetailContainer" +post.value.id).style.opacity = "1";
                    document.getElementById("discussButton"+ post.value.id).style.width = "100px";
                    document.getElementById("commentText"+ post.value.id).style.opacity = "1";
                    document.getElementById("sparkContainer"+ post.value.id).style.opacity = "1";
                    document.getElementById("discussButton"+ post.value.id).style.width = "200px";
                    document.getElementById("numberTab"+post.value.id).style.display = "block";
                    document.getElementById("messageIcon"+post.value.id).style.display = "none";
                    document.getElementById("discussButton"+ post.value.id).style.border = "1px solid lightgray";
                    document.getElementById("discussButton"+post.value.id).children[0].innerHTML = "Discuss";
                } else {
                    document.getElementById("postDetailContainer" +post.value.id).style.opacity = "0";
                    document.getElementById("commentText"+ post.value.id).style.opacity = "0";
                    document.getElementById("sparkContainer"+ post.value.id).style.opacity = "0";
                    document.getElementById("discussButton"+ post.value.id).style.width = "70px";
                    document.getElementById("numberTab"+post.value.id).style.display = "none";
                    document.getElementById("messageIcon"+post.value.id).style.display = "block";
                    document.getElementById("messageIcon"+post.value.id).style.width = "100px";
                    document.getElementById("messageIcon"+post.value.id).style.height = "100px";
                    document.getElementById("discussButton"+ post.value.id).style.border = "0px";

                    document.getElementById("discussButton"+post.value.id).children[0].innerHTML = "";
                }

                // if( document.getElementById("discussButton"+ post.value.id).children.length > 3) {
                //     noOfChildrenInDiscuss = 5;
                //     document.getElementById("discussButton"+ post.value.id).removeChild( document.getElementById("discussButton"+ post.value.id).firstChild)
                // }
                // document.getElementById("discussButton"+ post.value.id).innerHTML = "";

                // if(Number(document.getElementById('videoElement'+post.value.id).style.minHeight.replace("px","")) > 800)
                // {
                //     let height = Number(document.getElementById('videoElement'+post.value.id).style.height.replace("px",""))
                //     let heightChange = (height) - (height*(2/100));
                //     console.log(heightChange)
                //
                //     document.getElementById('videoElement'+post.value.id).style.height =  heightChange+"px";
                // }
                console.log("RIGHT");
            } else {
                if (document.getElementById('slideContainer'+post.value.id).scrollLeft < 750 && document.getElementById('slideContainer'+post.value.id).scrollLeft > 250 ) {
                    console.log(document.getElementById('slideContainer'+ post.value.id).style.offset)
                    document.getElementById("postDetailContainer" +post.value.id).style.opacity = "1";
                    document.getElementById("discussButton"+ post.value.id).style.width = "100px";
                    document.getElementById("commentText"+ post.value.id).style.opacity = "1";
                    document.getElementById("sparkContainer"+ post.value.id).style.opacity = "1";
                    document.getElementById("discussButton"+ post.value.id).style.width = "200px";
                    document.getElementById("numberTab"+post.value.id).style.display = "block";
                    document.getElementById("messageIcon"+post.value.id).style.display = "none";
                    document.getElementById("discussButton"+ post.value.id).style.border = "1px solid lightgray";
                    document.getElementById("discussButton"+post.value.id).children[0].innerHTML = "Discuss";
                } else if (document.getElementById('slideContainer'+post.value.id).scrollLeft < 250) {
                    document.getElementById("postDetailContainer" +post.value.id).style.opacity = "0";
                    document.getElementById("commentText"+ post.value.id).style.opacity = "0";
                    document.getElementById("sparkContainer"+ post.value.id).style.opacity = "0";
                    document.getElementById("discussButton"+ post.value.id).style.width = "70px";
                    document.getElementById("numberTab"+post.value.id).style.display = "none";
                    document.getElementById("messageIcon"+post.value.id).style.display = "block";
                    document.getElementById("messageIcon"+post.value.id).style.width = "100px";
                    document.getElementById("messageIcon"+post.value.id).style.height = "100px";
                    document.getElementById("discussButton"+ post.value.id).style.border = "0px";
                    document.getElementById("discussButton"+post.value.id).children[0].innerHTML = "";
                    if ($userStore.id) {
                        router.push('/upload?repostId='+post.value.id);
                    }
                }
                // document.getElementById("discussButton"+ post.value.id).innerHTML = "Discuss";
                // if( document.getElementById("discussButton"+ post.value.id).children.length === 3) {
                //     noOfChildrenInDiscuss = 4;
                //     document.getElementById("discussButton"+ post.value.id).append( document.getElementById("discussButton"+ post.value.id).firstChild)
                // }
                //scroll left
                console.log("LEFT");
            }

            //prevent page fom scrolling
            return false;
        });
    })


    onBeforeUnmount(() => {

        video.value.pause()
        video.value.currentTime = 0
        video.value.src = ''
    })

const animateSlide = (id) => {

    console.log("offset",document.getElementById('slideContainer'+id).style)
    // if(document.getElementById('videoElement'+id).style.maxWidth < ) {
    //     document.getElementById('videoElement'+id).style.maxWidth -= document.getElementById('videoContainer'+id).style.offset;
    // } else {
    //     document.getElementById('videoElement'+id).style.maxWidth = "500px";
    // }
}
const toggleThoughtContainer = (id, type) => {
    console.log(type);
    document.getElementById("discussButton" + id).children[0].style.color = "white";
    if (document.getElementById("discussButton" + id).style.width === "473px" || document.getElementById("discussButton" + id).children[0].innerHTML === "Close") {
        document.getElementById("discussButton" + id).style.width = "200px";
        console.log(document.getElementById("discussButton" + id).children);
        document.getElementById("discussButton" + id).style.borderColor = "lightgray";
        document.getElementById("thoughtContainer" + id).style.bottom = "600px";
        document.getElementById("discussButton" + id).children[0].innerHTML = "Discuss";
        document.getElementById("discussButton" + id).children[0].style.color = "white";
        document.getElementById("postCommentButton" + id).style.display = "none";
        document.getElementById("slideContainer" +id).style.minHeight = "900px";
        document.getElementById("commentArea-" +id).style.bottom = "240px";
        document.getElementById("postDetailContainer" +id).style.opacity = "1";
        document.getElementById("commentText" +id).style.opacity = "1";
        document.getElementById("sparkContainer" +id).style.display = "flex";
    } else {
        console.log(document.getElementById("discussButton" + id).children[0].innerHTML);
        document.getElementById("discussButton" + id).children[0].innerHTML = "Post";
        document.getElementById("discussButton" + id).style.borderColor = "darkgray";
        document.getElementById("discussButton" + id).style.width = "473px";
        document.getElementById("discussButton" + id).style.borderWidth = "2px";
        document.getElementById("postDetailContainer" + id).style.marginTop = "5%";
        document.getElementById("thoughtContainer" + id).style.bottom = "0px";
        document.getElementById("thoughtContainer" + id).scrollTop = 0;
        document.getElementById("postCommentButton" + id).style.display = "Block";
        document.getElementById("slideContainer" +id).style.minHeight = "200px";
        document.getElementById("commentArea-" +id).style.bottom = "140px";
        document.getElementById("postDetailContainer" +id).style.opacity = "0";
        document.getElementById("commentText" +id).style.opacity = "0";
        document.getElementById("sparkContainer" +id).style.display = "none";
    }
    console.log("open thought container")
}

const isLiked = computed(() => {
    let res = post.value.likes.find(like => like.user_id === $userStore.id)
    return !!res;
})

const isFollow = computed(() => {
    let res = user.value.follow.find(follow => follow.user_id === $userStore.id)
    return !!res;
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
    if (document.getElementById("discussButton" + post)) {
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
        if ((document.getElementById("discussButton" + post).children[0].innerHTML === "Close") || (document.getElementById("discussButton" + post).children[0].innerHTML === "Discuss")) {
            document.getElementById("postCommentButton" + post).style.display = "Block";
            document.getElementById("discussButton" + post).children[0].style.marginLeft = 0;
            toggleThoughtContainer(post, 'open');
            console.log("post event comment reply", post);
        }
    } else {
        toggleVideoCommentSection(post);
    }
}
const toggleVideoCommentSection = (id) => {
    document.getElementById("videoContainer" + id).style.maxHeight = "250px";
    document.getElementById("commentSectionArea" + id).style.maxHeight = "473px";
}
const isLoggedIn = (user) => {
    if (!$userStore.id) {
        $generalStore.isLoginOpen = true
        return
    }
    setTimeout(() => router.push(`/profile/${user.id}`), 200)
}
const postComment = async (id, elementButton, parent_id, level_id, mainParentId) => {
    try {
        let replyValue = document.getElementById("textArea" + id).value;
        await $userStore.addComment(id, replyValue, parent_id, level_id, mainParentId)
        document.getElementById("commentReplyArea_" + id).style.display = "none";
    } catch (error) {
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

.commentText {
    overflow-wrap: anywhere;
}

.slideContainer::-webkit-scrollbar {
    display: none;
}

.slideContainer {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>