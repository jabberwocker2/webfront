<template>
    <div :id="`PostMain-${post.id}`" class="flex  ">

        <div v-if="post.video == 'http://localhost:8000'" @click="isLoggedIn(post.user)" class="cursor-pointer">
            <img class="rounded-full max-h-[60px]" width="60" :src="post.user.image">
        </div>

        <div class="pl-3 w-full px-">

            <div v-if="post.video == 'http://localhost:8000'" class="flex items-center justify-between pb-0.5 mt-[5%]">
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

            <div v-if="post.video == 'http://localhost:8000'"
                class="commentText text-[30px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">{{ post.text }}</div>

            <div v-if="post.video == 'http://localhost:8000'" class="flex items-center pb-0.5 border-b-2 ">

                <div :class="`${tags.trim().toLowerCase()}`" v-for="tags in temp" :key="tags"
                    class=" text-[14px] pb-0.5 pr-1">{{ tags.replace('All', '') }}</div>
            </div>



            <div>

                <div :id="`thoughtContainer${post.id}`" v-if="post.video == 'http://localhost:8000'"
                    class="debate relative min-h-[480px] max-h-[580px] min-w-[265px]  items-center bg-white dark:bg-black-200 rounded-xl cursor-pointer">

                    <!-- <div v-for="comment in post.comments" :key="comment" class="commentSection unset  mt-2 max-w-[500px]">
                        <div v-if="comment.parent_id == 0" class="commentArea w-full border-l-2"
                            :id="`comment_id${comment.id}`">

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
                                

                                </div>
                            </div>

                        </div>

                    </div> -->

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

                        <div v-if="post.video == 'http://localhost:8000'"
                            class="text-[30px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">{{ post.text }}</div>
                        <div class="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">{{ post.text }}</div>

                        <div class="flex items-center pb-0.5">
                            800px800px
                            <div :class="`${tags.trim().toLowerCase()}`" v-for="tags in temp" :key="tags"
                                class=" text-[14px] pb-0.5 pr-1">{{ tags.replace('All', '') }}</div>
                        </div>


                        <div v-if="post.video != 'http://localhost:8000'"
                            class="text-[14px] pb-0.5 flex items-center font-semibold">
                            <Icon name="mdi:music" size="17" />
                            <div class="px-1">original sound - AWESOME</div>
                            <Icon name="mdi:lightbulb" size="20" />
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

                        <div @click="replyToComment(post.id, $event, comment, 'maincomment')" class="pt-4 pb-4 text-center">
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

                <div v-if="post.video == 'http://localhost:8000'" class="relative mr-[20px]">
                    <div class="absolute bottom-0 right-0 Z-2">
                        <div class="pb-4 text-center">
                            <div>

                                <button @click="isLiked ? unlikePost(post) : likePost(post)"
                                    class="rounded-full bg-gray-200 p-2 cursor-pointer">
                                    <Icon name="mdi:lightbulb" size="25" :color="isLiked ? '#f0cc2c' : ''" />
                                </button>
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">{{ post.likes.length }}</span>
                        </div>

                        <div id="mainComment" @click="replyToComment(post.id, $event, comment, 'mainComment')"
                            class="pt-4 pb-4 text-center">
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
    <div class=" sm:w-[60%] w-full " :id="`commentReplyArea_${post.id}`" style="display: none;">
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
        <button @click="postComment(post, $event, parent_comment_id, level_id, main_parent_id)"
            class="flex items-center bg-[#f0cc2c] text-white border rounded-md ml-3 px-3 py-[6px]">
            <span class="mx-4 font-medium text-[15px]">Post reply</span>
        </button>
    </div>
</template>

<script setup>
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
var commentObject = {};
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
// const addComment = async () => {
//     try {
//         await $userStore.addComment($generalStore.selectedPost, comment.value)
//         comment.value = null
//         document.getElementById('Comments').scroll({ top: 0, behavior: 'smooth' });
//     } catch (error) {
//         console.log(error)
//     }
// }
onMounted(() => {
    let mainDiv = document.getElementById("thoughtContainer" + post.value.id);
    let commentBlock = document.createElement('div');
    mainDiv.appendChild(commentBlock);

    for (let i = 0; i < post.value.comments.length; i++) {

        if (post.value.comments[i].level_id == 0) {
            let level1comment = document.createElement('p');
            let replyButton = document.createElement('button');
            replyButton.setAttribute("id", 1)
            let commentDiv = document.createElement('div');
            commentBlock.appendChild(commentDiv);
            commentDiv.appendChild(level1comment);
            commentDiv.appendChild(replyButton);
            commentDiv.setAttribute("id", post.value.id + "_" + post.value.comments[i].id)
            commentDiv.style.display = "flex";
            replyButton.addEventListener('click', () => replyToComment(post.value.id, "", post.value.comments[i], "replyComment", replyButton.getAttribute('id'), post.value.comments[i].id))
            replyButton.innerHTML = "reply";
            replyButton.style.marginLeft = "10px";
            replyButton.style.fontSize = "12px";
            level1comment.innerHTML = post.value.comments[i].text;
        }

        for (let j = 0; j < post.value.comments.length; j++) {
            if (post.value.comments[i].id == post.value.comments[j].parent_id) {
                var parentCommentDiv = document.createElement('div');
                let commentDiv = document.createElement('div');
                parentCommentDiv.setAttribute("id", "reply_" + post.value.comments[j].id)
                parentCommentDiv.appendChild(commentDiv);
                parentCommentDiv.style.borderLeft = "1px solid gray";
                let reply = document.createElement('p');
                reply.innerHTML = post.value.comments[j].text;
                reply.style.color = "gray";
                let replyButton = document.createElement('button');
                replyButton.setAttribute("id", 2)
                replyButton.addEventListener('click', () => replyToComment(post.value.id, "", post.value.comments[j], "replyComment", replyButton.getAttribute('id'), post.value.comments[i].id))
                replyButton.innerHTML = 'reply';
                commentDiv.appendChild(reply);
                commentDiv.appendChild(replyButton);
                commentDiv.style.marginLeft = "10px";
                commentDiv.style.marginTop = "10px";
                commentDiv.style.marginBottom = "10px";

                replyButton.style.marginLeft = "20px"
                replyButton.style.fontSize = "12px"

                let replyIcon = document.createElement('Icon');
                replyButton.appendChild(replyIcon)
                console.log(replyIcon);
                if (post.value.comments[j].level_id == 1) {
                    commentBlock.appendChild(parentCommentDiv);
                } else if (post.value.comments[j].level_id == 2) {
                    setTimeout(() => {
                        var mainParent = document.createElement('div');
                        var divToAppend = document.getElementById("reply_" + post.value.comments[j].parent_id);
                        commentDiv.style.marginLeft = "25px";
                        console.log("reached level 2 wiht end ", post.value.comments[j].text, divToAppend)
                        mainParent.appendChild(commentDiv)
                        divToAppend.appendChild(mainParent);
                        divToAppend.style.borderLeft = "1px solid gray"
                        mainParent.setAttribute("id", "reply_" + post.value.comments[j].id)
                        replyButton.setAttribute("id", 3)
                    }, 20)

                } else if (post.value.comments[j].level_id == 3) {
                    setTimeout(() => {
                        console.log(post.value.comments[j].parent_id);
                        var divToAppend = document.getElementById("reply_" + post.value.comments[j].parent_id);
                        commentDiv.style.marginLeft = "30px";
                        console.log("reached level 3 wiht end ", post.value.comments[j].text, divToAppend)
                        replyButton.setAttribute("id", 4)
                        commentDiv.setAttribute("id", "reply_" + post.value.comments[j].id)
                        divToAppend.appendChild(commentDiv);
                        divToAppend.style.marginLeft = "25px";
                        divToAppend.style.borderLeft = "1px solid gray";
                    }, 25)
                } else if (post.value.comments[j].level_id == 4) {
                    setTimeout(() => {
                        console.log(post.value.comments[j].parent_id, "lv 4");
                        var divToAppend = document.getElementById("reply_" + post.value.comments[j].parent_id);
                        commentDiv.style.marginLeft = "40px";
                        console.log("reached level 3 wiht end ", post.value.comments[j].text, divToAppend)
                        replyButton.setAttribute("id", 5)
                        commentDiv.setAttribute("id", "reply_" + post.value.comments[j].id)
                        divToAppend.appendChild(commentDiv);
                        divToAppend.style.marginLeft = "25px";
                        divToAppend.style.borderLeft = "1px solid gray";
                    }, 30)
                } else if (post.value.comments[j].level_id == 5) {
                    setTimeout(() => {
                        console.log(post.value.comments[j].parent_id, "lv 4");
                        var divToAppend = document.getElementById("reply_" + post.value.comments[j].parent_id);
                        commentDiv.style.marginLeft = "50px";
                        console.log("reached level 3 wiht end ", post.value.comments[j].text, divToAppend)
                        replyButton.setAttribute("id", 6)
                        commentDiv.setAttribute("id", "reply_" + post.value.comments[j].id)
                        divToAppend.appendChild(commentDiv);
                        divToAppend.style.marginLeft = "25px";
                        divToAppend.style.borderLeft = "1px solid gray";
                    }, 35)
                } else if (post.value.comments[j].level_id == 6) {
                    setTimeout(() => {
                        console.log(post.value.comments[j].parent_id, "lv 4");
                        var divToAppend = document.getElementById("reply_" + post.value.comments[j].parent_id);
                        commentDiv.style.marginLeft = "60px";
                        console.log("reached level 3 wiht end ", post.value.comments[j].text, divToAppend)
                        replyButton.setAttribute("id", 7)
                        commentDiv.setAttribute("id", "reply_" + post.value.comments[j].id)
                        divToAppend.appendChild(commentDiv);
                        divToAppend.style.marginLeft = "25px";
                        divToAppend.style.borderLeft = "1px solid gray";
                    }, 40)
                } else if (post.value.comments[j].level_id == 7) {
                    setTimeout(() => {
                        console.log(post.value.comments[j].parent_id, "lv 4");
                        var divToAppend = document.getElementById("reply_" + post.value.comments[j].parent_id);
                        commentDiv.style.marginLeft = "70px";
                        console.log("reached level 3 wiht end ", post.value.comments[j].text, divToAppend)
                        replyButton.setAttribute("id", 8)
                        commentDiv.setAttribute("id", "reply_" + post.value.comments[j].id)
                        divToAppend.appendChild(commentDiv);
                        divToAppend.style.marginLeft = "25px";
                        divToAppend.style.borderLeft = "1px solid gray";
                    }, 45)
                } else if (post.value.comments[j].level_id == 8) {
                    setTimeout(() => {
                        console.log(post.value.comments[j].parent_id, "lv 4");
                        var divToAppend = document.getElementById("reply_" + post.value.comments[j].parent_id);
                        commentDiv.style.marginLeft = "70px";
                        console.log("reached level 3 wiht end ", post.value.comments[j].text, divToAppend)
                        replyButton.setAttribute("id", 9)
                        commentDiv.setAttribute("id", "reply_" + post.value.comments[j].id)
                        divToAppend.appendChild(commentDiv);
                        divToAppend.style.marginLeft = "25px";
                        divToAppend.style.borderLeft = "1px solid gray";
                    }, 50)
                } else if (post.value.comments[j].level_id == 9) {
                    setTimeout(() => {
                        console.log(post.value.comments[j].parent_id, "lv 4");
                        var divToAppend = document.getElementById("reply_" + post.value.comments[j].parent_id);
                        commentDiv.style.marginLeft = "70px";
                        console.log("reached level 3 wiht end ", post.value.comments[j].text, divToAppend)
                        replyButton.setAttribute("id", 10)
                        commentDiv.setAttribute("id", "reply_" + post.value.comments[j].id)
                        divToAppend.appendChild(commentDiv);
                        divToAppend.style.marginLeft = "25px";
                        divToAppend.style.borderLeft = "1px solid gray";
                    }, 55)
                }else if (post.value.comments[j].level_id == 10) {
                    setTimeout(() => {
                        console.log(post.value.comments[j].parent_id, "lv 4");
                        var divToAppend = document.getElementById("reply_" + post.value.comments[j].parent_id);
                        commentDiv.style.marginLeft = "70px";
                        console.log("reached level 3 wiht end ", post.value.comments[j].text, divToAppend)
                        replyButton.setAttribute("id", 11)
                        commentDiv.setAttribute("id", "reply_" + post.value.comments[j].id)
                        divToAppend.appendChild(commentDiv);
                        divToAppend.style.marginLeft = "25px";
                        divToAppend.style.borderLeft = "1px solid gray";
                    }, 60)
                }

            }
        }
    }
})
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

const replyToComment = (post, eventClick, comment, replyMode, level = null, mainParentId = null) => {
    console.log(post);
    if (replyMode == 'mainComment') {
        console.log("event click inside main comment", comment);
    } else {
        console.log("event click inside reply comment", comment.id);
        parent_comment_id = comment.id;
        level_id = level;
        main_parent_id = mainParentId;
    }
    if (document.getElementById("commentReplyArea_" + post).style.display == "none") {
        document.getElementById("commentReplyArea_" + post).style.display = "block";
        console.log("reached if");
    } else {
        document.getElementById("commentReplyArea_" + post).style.display = "none";
        console.log("reached else");

    }
    console.log("post event comment reply", post);

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

const postComment = async (id, elementButton, parent_id, level_id, mainParentId) => {
    let replyValue = elementButton.srcElement.parentElement.parentElement.children[0].value;

    console.log("post comments", id)
    try {

        await $userStore.addComment(id, replyValue, parent_id, level_id, mainParentId)
        document.getElementById("commentReplyArea_" + id.id).style.display = "none";
    } catch (error) {
        console.log(error)
    }

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