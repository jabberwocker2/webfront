<template>
    <div :id="`commentTile-${comment.id}`" class="overflow-y-visible">
        <div class="relative w-[600px] block" >
            <p class="font-medium">{{comment.user.name}}</p>
            <div class="commentTileSelect border-[1px] border-gray-300 p-1 w-fit max-w-[50ch]     rounded-2xl" :id="`commentTileSelect-${comment.id}`">
                <p>{{ comment.text }}</p>
                <Icon @click="commonFunctions.toggleTextArea(posts.id,comment.id)" name="ri:share-forward-fill" size="20"  />

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
                <div v-for="replies in posts.comments" class="ml-3 border-l-[1px]">
                    <ReplyTile v-if="(replies.main_parent_id === comment.id) && (replies.level_id === 1)" :replies="replies" :posts=posts  />

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
import commonFunction from "~/components/commonFunction";

const props = defineProps(['comment','posts', 'user'])
const { comment, user ,posts} = toRefs(props)
const { $userStore } = useNuxtApp()



onMounted( () => {
    var replyValue = document.getElementById('textArea-'+posts.value.id);
    document.getElementById('postCommentButton-'+comment.value.id).addEventListener('click',function() { console.log('replies value',replyValue); commonFunctions.postComment(posts.value.id,comment.value.id,comment.value.level_id+1,comment.value.id,$userStore,document.getElementById('openReplyTextArea-'+comment.value.id).value,'openReplyTextArea-'+comment.value.id,'postCommentButton-'+comment.value.id)})
})


</script>

