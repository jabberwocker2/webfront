<template>
    <div :id="`commentTile-${comment.id}`" class="overflow-y-visible">
        <div class="relative w-[600px] block" >
            <p class="font-medium">{{comment.user.name}}</p>
            <p class="border-[2px] p-1 max-w-fit rounded-2xl">{{ comment.text }}</p>
            <Icon @click="openReplyTextArea()" name="ri:share-forward-fill" size="20" />
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
                    {{console.log(comment,"replies")}}
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

const props = defineProps(['comment','posts', 'user'])
const { comment, user ,posts} = toRefs(props)
const { $userStore } = useNuxtApp()

function openReplyTextArea() {
    console.log("textarea",comment)
    if(document.getElementById("openReplyTextArea-"+comment.value.id).style.display === "none") {
        document.getElementById("postCommentButton-"+comment.value.id).style.display = "block";
        document.getElementById("openReplyTextArea-"+comment.value.id).style.display = "block";
    } else {
        document.getElementById("openReplyTextArea-"+comment.value.id).style.display = "none";
        document.getElementById("postCommentButton-"+comment.value.id).style.display = "none";
    }
}

onMounted( () => {
    var replyValue = document.getElementById('openReplyTextArea-'+comment.value.id);
    document.getElementById('postCommentButton-'+comment.value.id).addEventListener('click',function() { console.log('replies value',replyValue); commonFunctions.postComment(posts.value.id,comment.value.id,comment.value.level_id+1,comment.value.id,$userStore,document.getElementById('openReplyTextArea-'+comment.value.id).value,'openReplyTextArea-'+comment.value.id,'postCommentButton-'+comment.value.id)})
})


</script>

