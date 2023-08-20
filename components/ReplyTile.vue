<template >
    <p class="font-medium ">{{ replies.user.name }}</p>

    <div class="flex  " >
        <div  class="flex border-[1px] border-gray-300 w-fit max-w-[400px] rounded-2xl p-1">
            {{replies.text}}
            <Icon  v-if="replies.noOfChildren >= 1" :id="`collapsePlus${replies.id}`" @click="collapseCommentTile($event)" name="mdi:plus" color="gray" size="17" class="ml-[20px] min-w-[17px] rounded-2xl border-gray-500 border-[1px] mt-1 transition-all duration-250 " style="display: none" />

            <Icon  v-if="replies.noOfChildren >= 1" :id="`collapseMinus${replies.id}`" @click="collapseCommentTile($event)" name="mdi:minus" color="gray" size="17" class="ml-[20px] min-w-[17px] rounded-2xl border-gray-500 border-[1px] mt-1 transition-all duration-250"  style="display: block" />

        </div>

    </div>




    <Icon @click="commonFunctions.toggleTextArea(posts.id,replies.id,primaryObject)" name="ri:share-forward-fill" size="20"  :class="`ml-[10px]`" />
    <textarea  :id="`openReplyTextArea-${replies.id}`"  cols="30" rows="4" v-model="userBio"  class="
                resize-none
                w-full
                text-gray-800
                border
                border-gray-300
                rounded-md
                py-2.5
                px-3
                focus:outline-none
            " style="display: none"></textarea>

    <button type="submit" :id="`postCommentButton-${replies.id}`"
            class="  flex items-center bg-[white] text-black  rounded-full  px-3 " style="display: none">
        <Icon name="ri:share-forward-fill" size="35" />
    </button>
    <div v-if="replies.level_id <= (replies.max_level * 30)">
        <div v-for="repliesTo in posts.comments" class="ml-[20px] mt-2 border-l-[1px]" >
            
            <ReplyTile v-if="(repliesTo.parent_id === replies.id) && (repliesTo.level_id === (replies.level_id +1))" :replies="repliesTo" :posts=posts  />

        </div>
    </div>
</template>

<script setup>
import commonFunctions from '../components/commonFunction'
const props = defineProps(['replies','posts'])



var collapse = false;
const { replies,posts } = toRefs(props)
const { $userStore, $generalStore } = useNuxtApp()

const primaryObject = {
    post_id:posts.value.id,
    comment_id:replies.value.id,
    level_id:replies.value.level_id+1,
    comment_value_id:replies.value.main_parent_id,
    userStore:$userStore,
    textArea:'textArea'+posts.value.id,
    button:'postCommentButton'+posts.value.id
}
onMounted( () => {
    var replyValue = document.getElementById('openReplyTextArea-'+replies.value.id);
    document.getElementById('postCommentButton-'+replies.value.id).addEventListener('click',function() { console.log('replies value',replyValue); commonFunctions.postComment(posts.value.id,replies.value.id,replies.value.level_id+1,replies.value.main_parent_id,$userStore,document.getElementById('openReplyTextArea-'+replies.value.id).value,'openReplyTextArea-'+replies.value.id,'postCommentButton-'+replies.value.id)})
})

function collapseCommentTile(event) {
    console.log(event.srcElement.parentElement);
    if(event.srcElement.parentElement.parentElement.parentElement.style.maxHeight != "60px") {
        collapse = true;
        event.srcElement.parentElement.parentElement.parentElement.style.transition = "2s";
        event.srcElement.parentElement.parentElement.parentElement.style.maxHeight = "60px";
        event.srcElement.parentElement.parentElement.parentElement.style.overflowY = "hidden";
        document.getElementById("collapsePlus"+replies.value.id).style.display = "block";
        document.getElementById("collapseMinus"+replies.value.id).style.display = "none";

    } else {

        collapse = false;
        event.srcElement.parentElement.parentElement.parentElement.style.maxHeight = "fit-content";
        event.srcElement.parentElement.parentElement.parentElement.style.overflowY = "auto";
        document.getElementById("collapsePlus"+replies.value.id).style.display = "none";
        document.getElementById("collapseMinus"+replies.value.id).style.display = "block";



    }
}
</script>

<style>

</style>