<template>
    <div :id="`commentTile-${comment.id}`" class="commentTiles overflow-y-visible transition-all 2s ease-in-out mt-[20px]">
        <div id="" class="replyTile relative block w-[100%]"  >
            <div class="flex min-w-[468px]">
                <button class="mt-1 relative " :class="`${levelZeroCommentClass(comment.level,'image')}`" @click="showMenu = !showMenu">
                    <img class="rounded-full" width="25" :src="$userStore.image">
                </button>
                <p class="font-medium self-center ml-2 relative text-gray-800"  :class="`${levelZeroCommentClass(comment.level,'username')}`">  {{comment.name}}</p>
                <div class="flex">
                </div>
            </div>

            <div v-if="comment.level === 0" class="commentTileSelectLevel flex  border-gray-300 p-1 w-fit  rounded-2xl justify-around transition-all 4s ease-in-out mt-1" :id="`commentTileSelect-${comment.id}`">
                <p class="max-w-[50ch]  text-gray-600 ">{{ comment.text }}</p>
                <Icon @click="collapseCommentTile($event)" v-if="comment.level !== 0"  name="mdi:plus" size="20" class="text-gray-400 border-[2px] border-gray-300 rounded-2xl ml-[10px]" />
                </div>
            <div v-else class="commentTileSelect flex  border-gray-300 p-1 w-fit  rounded-2xl justify-around transition-all 4s ease-in-out" :id="`commentTileSelect-${comment.id}`">

                <p v-if="comment.level === 0" class="max-w-[50ch] text-gray-600">{{ comment.text }}</p>
                <p v-else class="max-w-[70ch] text-gray-600 ">{{ comment.text }}</p>


                <Icon @click="collapseCommentTile($event)" v-if="comment.level !== 0"  name="mdi:plus" size="20" class="text-gray-400 border-[2px] border-gray-300 rounded-2xl ml-[10px]" />
            </div>
            <div class="flex max-w-[500px]">
                <div class="tileBoxClass flex w-[20%] max-w-[450px] justify-around mt-2 mb-1 ml-4 transition-all 3s ease-in-out" :id="`tileBox${comment.id}`" >
                    <div class="flex ">
                        <Icon @click="likePost(comment)" name="mdi:lightning-bolt-outline" size="22" class="text-gray-400" :color="comment.likedByUser ? '#f0cc2c' : ''"/>
                        <p class="text-gray-400 ml-2">{{ comment.allLikes }}</p>
                    </div>
                    <div class="text-gray-300 text-sm">|</div>
                    <Icon  @click="expandCommentTree(comment,posts,primaryObject)" name="mdi:arrow-right-top" size="20" class="expandCommentTreeClass text-gray-400" :id="`expandCommentTree${comment.id}`"  />
                    <div class="text-gray-300 ">|</div>
                    <Icon @click="commonFunctions.toggleTextArea(posts.id,comment.id,primaryObject)" name="ri:share-forward-fill" size="20" class="text-gray-400" />
                </div>
                <div  class="flex  w-[50%] justify-around mt-2 mb-1 ml-4 transition-all 3s ease-in-out">
                    <p class="text-gray-400">3256</p>
                    <p :id="`replies${comment.id}`" class="text-gray-400 cursor-pointer">Replies</p>
                    <div class="text-gray-300 ">|</div>
                    <p class="text-gray-400">3256</p>
                    <p class="text-gray-400">pp</p>
                </div>
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

            <div v-if="showReply" v-for="replies in $generalStore.commentsForPost.filter(rep => (rep.comment_id === comment.id)).filter(rep1 => rep1.level === comment.level +1)" class="commentTrayClass ml-3 border-l-[1px]" :id="`commentTray${comment.id}`" >
                <CommentTile  :comment="replies" :posts=posts :showReply="showReply" />
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
import expandedCommentSection from "~/components/ExpandedCommentSection.vue";

const props = defineProps(['comment','posts', 'user','showReply'])
const { comment, user ,posts,showReply} = toRefs(props)
const { $generalStore,$userStore } = useNuxtApp()
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
    // if(primaryObject.id) {
    //     document.getElementById("replyCommentButton"+posts.value.id).addEventListener('click',function () {commonFunctions.postComment(primaryObject.post_id,primaryObject.comment_id,primaryObject.level_id,primaryObject.comment_value_id,primaryObject.userStore,(document.getElementById("textArea"+id).value),primaryObject.textArea,primaryObject.button)})
    // }

    var replyValue = document.getElementById('textArea'+posts.value.id);
``
    // if(comment.value.level === 0) {
    //     console.log(document.getElementById('commentTray'+comment.value.id),comment.value.level,"in if");
    //     setTimeout(()=>{
    //         document.getElementById('commentTray'+comment.value.id).style.display = 'none';
    //     },10)
    // }
    document.getElementById('postCommentButton-'+comment.value.id).addEventListener('click',function() { console.log('replies value',replyValue); commonFunctions.postComment(posts.value.id,comment.value.id,comment.value.level_id+1,comment.value.id,$userStore,document.getElementById('openReplyTextArea-'+comment.value.id).value,'openReplyTextArea-'+comment.value.id,'postCommentButton-'+comment.value.id)})
})

const showReplies = (event,postId,commentId) => {
    // commonFunctions.toggleTextArea(postId,commentId)
    // if(document.getElementById('commentTray'+showRepliesID).style.display !== 'none') {
    //     document.getElementById('commentTray'+showRepliesID).style.display = 'none';
    // } else {
    //     document.getElementById('commentTray'+showRepliesID).style.display = 'block';
    // }
    console.log('reolies');

}

const levelZeroCommentClass = (commentLevel,type) => {
    if(commentLevel !== 0 && type === 'image') {
        return "top-[-3px] left-[-12px]"
    } else if (commentLevel !== 0 && type === 'username') {
        return " left-[-12px]"
    }
}

const expandCommentTree =(comment,post,primaryObject,showReply) => {
        for (let i = 0; i < document.getElementsByClassName("commentTileSelect").length; i++) {

            document.getElementsByClassName("commentTileSelect")[i].style.borderColor = "white"

        }
    if(comment.level  === 0) {
        for (let i = 0; i < document.getElementsByClassName("commentTileSelectLevel").length; i++) {
            document.getElementsByClassName("commentTileSelectLevel")[i].style.borderColor = "white"
        }
        for (let i = 0; i < document.getElementsByClassName("expandCommentTreeClass").length; i++) {
            document.getElementsByClassName("expandCommentTreeClass")[i].style.color = "gray"
        }
        document.getElementById('expandCommentTree'+comment.id).style.color = "black";
        $generalStore.expandedComment = comment;
        $generalStore.expandedPost = post;
        for(let i = 0;i<document.getElementsByClassName('changeBackToNormal').length ; i++) {
            document.getElementsByClassName('changeBackToNormal')[i].style.color = "lightgray"
            document.getElementsByClassName('commentTiles')[i].style.border = "";
            document.getElementsByClassName('commentTiles')[i].style.borderRadius = "";
        }
        document.getElementById('thoughtContainer'+ post.id).style.height = '950px';
        document.getElementById('slideContainer'+post.id).style.minHeight = '50px';

        document.getElementById('videoHolder').style.opacity = '1';
        document.getElementById('slideContainer'+post.id).style.opacity = '0';
        document.getElementById('expanded').style.opacity = '1';
        console.log('register the click event',comment.id)

        document.getElementById(    'commentTile-'+comment.id).style.padding = "5px";
        document.getElementById('commentTile-'+comment.id).style.paddingRight = "50px";
        document.getElementById('commentTile-'+comment.id).scrollTop = 50;
    }
    $generalStore.GeneralPrimaryObject = null;
    $generalStore.GeneralPrimaryObject= primaryObject
    $generalStore.clickedComment = comment;
    commonFunctions.toggleTextArea(post.id,comment.id,$generalStore.GeneralPrimaryObject)

}

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

const collapseCommentTile = (event) => {



        let collpaseTileId = event.srcElement.parentElement.parentElement.parentElement.getAttribute('id')
        collpaseTileId = collpaseTileId.replace('commentTile-','')
        console.log('logs',collpaseTileId)
        document.getElementById("commentTray"+collpaseTileId).style.display = 'none';
    // if(document.getElementById('commentTile-'+collpaseTileId).style.opacity !==  '0') {
    //     document.getElementById('commentTile-'+collpaseTileId).style.opacity= '0'
    //     let collpaseTileIdParentId = Number(collpaseTileId);
    //     collpaseTileIdParentId = collpaseTileIdParentId-1
    //     collpaseTileIdParentId = collpaseTileIdParentId.toString();
    //     console.log("reached the click option",document.getElementById('commentTile-'+collpaseTileIdParentId))
    //     document.getElementById('commentTile-'+collpaseTileIdParentId).parentElement.style.borderColor= ''
    //     setTimeout(()=> {
    //         document.getElementById('commentTile-'+collpaseTileId).style.display= 'none'
    //     },200)
    // } else {
    //     document.getElementById('commentTile-'+collpaseTileId).style.display= 'block'
    //     setTimeout(()=> {
    //         let collpaseTileIdParentId = Number(collpaseTileId);
    //         collpaseTileIdParentId = collpaseTileIdParentId-1
    //         collpaseTileIdParentId = collpaseTileIdParentId.toString();
    //         console.log("reached the click option",document.getElementById('commentTile-'+collpaseTileIdParentId))
    //         document.getElementById('commentTile-'+collpaseTileIdParentId).parentElement.style.borderColor= 'black'
    //         document.getElementById('commentTile-'+collpaseTileId).style.opacity= '1'
    //     },200)
    // }
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

<style>
.commentReplyTray {
    display: none;
}
</style>