<template>
    <div :id="`commentTile-${comment.id}`" class="overflow-y-visible">
        <div class="relative block" >
            <p class="font-medium">{{comment.name}}</p>
            <div class="commentTileSelect border-[3px] border-gray-300 p-1 w-fit max-w-[50ch]  rounded-2xl justify-around transition-all 4s ease-in-out" :id="`commentTileSelect-${comment.id}`">
                <p>{{ comment.text }}</p>
            </div>
            <div class="tileBoxClass flex w-[30%] justify-around mt-2 mb-1 ml-4 transition-all 3s ease-in-out" :id="`tileBox${comment.id}`" >
                <div class="flex ">
                    <Icon @click="likePost(comment)" name="mdi:lightning-bolt-outline" size="22" class="text-gray-400" :color="comment.likedByUser ? '#f0cc2c' : ''"/>
                    <p class="text-gray-400 ml-2">{{ comment.allLikes }}</p>
                </div>
                <div class="text-gray-300 text-sm">|</div>
                <Icon @click="commonFunctions.toggleTextArea(posts.id,comment.id,primaryObject)" name="mdi:arrow-right-top" size="20" class="text-gray-400" />
                <div class="text-gray-300 ">|</div>
                <Icon @click="commonFunctions.toggleTextArea(posts.id,comment.id,primaryObject)" name="ri:share-forward-fill" size="20" class="text-gray-400" />
            </div>
            <textarea  :id="`openReplyTextArea-${comment.id}`"  cols="30" rows="4" v-model="userBio" maxlength="80" class="
                resize-none
                w-full
                bg-[#F1F1F2]
                text-gray-800
                border
                border-gray-300
                rounded-md
                py-2.5
                px-3
                focus:outline-none
            " style="display: none"></textarea>
            <div v-for="replies in $generalStore.commentsForPost.filter(rep => (rep.comment_id === comment.id)).filter(rep1 => rep1.level === comment.level +1)" class="ml-3 border-l-[1px]" :id="`commentTray${comment.id}`">
                {{ console.log(replies,'replies') }}
                {{ console.log(comment,'comment in replies') }}
                <CommentTile  :comment="replies" :posts=posts  />
            </div>
            <button :id="`postCommentButton-${comment.id}`"
                    class="  flex items-center bg-[white] text-black  rounded-full  px-3 ml-[200px]" style="display: none">
                <Icon name="ri:share-forward-fill" size="35" />
            </button>

        </div>
    </div>
</template>

<script setup>

import commonFunctions from "~/components/commonFunction";

const props = defineProps(['comment','posts', 'user'])
const { comment, user ,posts} = toRefs(props)
const { $userStore } = useNuxtApp()
const primaryObject = {
    post_id:posts.value.id,
    comment_id:comment.value.id,
    level_id:comment.value.level+1,
    comment_value_id:comment.value.id,
    userStore:$userStore,
    textArea:'textArea'+posts.value.id,
    button:'postCommentButton'+posts.value.id
}

onMounted( () => {
    var replyValue = document.getElementById('textArea'+posts.value.id);

    console.log(primaryObject,"primaryObject");
    document.getElementById('postCommentButton-'+comment.value.id).addEventListener('click',function() { console.log('replies value',replyValue); commonFunctions.postComment(posts.value.id,comment.value.id,comment.value.level_id+1,comment.value.id,$userStore,document.getElementById('openReplyTextArea-'+comment.value.id).value,'openReplyTextArea-'+comment.value.id,'postCommentButton-'+comment.value.id)})
})

const isLiked = computed(() => {
    console.log(comment);
    let res = comment.value.likes.find(like => like.user_id === $userStore.id)
    return !!res;
})
const likePost = async (post) => {
    if (!$userStore.id) {
        $generalStore.isLoginOpen = true
        return
    }
    try {
        await $userStore.likePost(post,"comment")
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

</script>

