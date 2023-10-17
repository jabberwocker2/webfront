
<template>

    <div  v-if="!$generalStore.commentsForPost" id="expanded" class="expanded grid  w-[40%] h-[400px] transition-all 2s ease-in-out border-l-[1px]">
        <AddScrollable />
    </div>
    <div  v-if="$generalStore.commentsForPost" id="expanded" class="expanded grid content-between	 w-[40%] h-[900px] transition-all 2s ease-in-out border-l-[1px] ">

        <div  v-if="$generalStore.commentsForPost"  class="expandedScroller w-[90%] overflow-auto border-l-[1px] border-gray-300" >
<!--            <p class="text-black text-[20px] font-bold transition-all 2s ease-in-out"> {{ $generalStore.expandedComment.name }}</p>-->
<!--            <p> {{ $generalStore.expandedComment.text }}</p>-->
            <div class="flex justify-between w-[100%]">
<!--                <div class="tileBoxClass flex w-[20%] justify-around mt-2 mb-1 ml-4 transition-all 3s ease-in-out"  >-->
<!--                    <div class="flex ">-->
<!--                        <Icon @click="" name="mdi:lightning-bolt-outline" size="22" class="text-gray-400"/>-->
<!--                        <p class="text-gray-400 ml-2">{{ }}</p>-->
<!--                    </div>-->
<!--                    <div class="text-gray-300 text-sm">|</div>-->
<!--                    <Icon @click="" name="mdi:arrow-right-top" size="20" class="text-gray-400" />-->
<!--                    <div class="text-gray-300 ">|</div>-->
<!--                    <Icon @click="" name="ri:share-forward-fill" size="20" class="text-gray-400" />-->
<!--                </div>-->
<!--                <div v-if="$generalStore.expandedComment.level === 0" class="flex  w-[50%] justify-around mt-2 mb-1 ml-4 transition-all 3s ease-in-out">-->
<!--                    <p class="text-gray-400">3256</p>-->
<!--                    <p class="text-gray-400 cursor-pointer">Replies</p>-->
<!--                    <div class="text-gray-300 ">|</div>-->
<!--                    <p class="text-gray-400">3256</p>-->
<!--                    <p class="text-gray-400">pp</p>-->
<!--                </div>-->
            </div>
            <div v-if="$generalStore.commentsForPost" v-for="replies in $generalStore.commentsForPost.filter(rep => (rep.comment_id === $generalStore.expandedComment.id)).filter(rep1 => rep1.level === $generalStore.expandedComment.level +1)" class="ml-3  " :id="`commentTray${$generalStore.expandedComment.id}`">
                <CommentTile  :comment="replies" :posts=$generalStore.expandedPost  :showReply="showReply" />
            </div>
        </div>
        <div v-if="$generalStore.commentsForPost"
            class="postCommentTextArea flex lg:w-[100%] w-full mt-2 overflow-hidden h-[80px]  transition-[height] duration-500 ease-in-out"
            :id="`commentReplyArea_${$generalStore.expandedPost.id}`"
            style="">
                    <span contenteditable @input="commonFunctions.changeHeight($generalStore.expandedPost.id);"  class="

                                        w-full
                                        min-h-[50px]
                                        text-gray-400
                                        border-t-[0 px]
                                        py-2.5
                                        px-3
                                        transition-[bottom] duration-200 ease-in-out
                                    " :id="`textArea${$generalStore.expandedPost.id}`">Write a Comment
                            <button class="z-10 float-right"

                                    @click="postComment($generalStore.expandedPost.id, $event, $generalStore.clickedComment.comment_id, $generalStore.clickedComment.level, $generalStore.clickedComment.main_parent_id) "
                                    :id="`postCommentButton${$generalStore.expandedPost.id}`" >
                <Icon name="mdi:send-variant-outline" class=" right-0 float-right z-10 color-gray-300"
                      size="25"/>
            </button>
            <button class="z-10 float-right" :id="`replyCommentButton${$generalStore.expandedPost.id}`" style="display: none">
                <Icon name="mdi:send-variant-outline" class=" right-0 float-right z-10 color-gray-300"
                      size="25"/>
            </button>

                    </span>


        </div>


    </div>
</template>

<script setup>
import commonFunctions from "~/components/commonFunction";

const { $generalStore,$userStore } = useNuxtApp()
var showReply =true;
const postComment = async (id, elementButton, parent_id=0, level_id=0, mainParentId=0) => {
    try {
        console.log(id, parent_id, level_id, mainParentId);
        let replyValue = document.getElementById("textArea" + id).innerText;
        await $userStore.addComment(id, replyValue, parent_id, level_id, mainParentId)
        // document.getElementById("commentReplyArea_" + id).style.display = "none";
    } catch (error) {
    }
}
</script>

<style>
.expanded {
    opacity: 1;

}
.expandedScroller::-webkit-scrollbar {
    display: none;
    border : none;
    /* Safari and Chrome */
}

.expandedScroller {
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    /* Firefox */
}
</style>