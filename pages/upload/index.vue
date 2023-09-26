<template>
    <UploadError :errorType="errorType" />

    <div v-if="isUploading"
         class="fixed flex items-center justify-center top-0 left-0 w-full h-screen bg-black z-50 bg-opacity-50">
        <Icon class="animate-spin ml-1" name="mingcute:loading-line" size="100" color="#FFFFFF" />
    </div>

    <UploadLayout>
        <div class="w-full mt-[80px] mb-[40px] bg-white dark:bg-black shadow-lg rounded-md py-6 md:px-10 px-4">
            <div>
                <div v-if="repostId" class="text-[23px] font-semibold">Repost</div>
                <div v-else class="text-[23px] font-semibold">Make a story</div>
                <div class="text-gray-400 mt-1">Add tiles to your story</div>
            </div>
            <div class="mt-5">
                <div class="flex items-center justify-between">
                    <div class="mb-1 text-[15px]">Title</div>
                    <div class="text-gray-400 text-[12px]">{{ caption.length }}/80</div>
                </div>
                <input v-model="caption" maxlength="80" type="text" class="
                                w-full
                                border
                                p-2.5
                                rounded-md
                                focus:outline-none
                            ">
            </div>
            <ul class="list">
                <label v-if="!fileDisplay" for="fileInput" @drop.prevent="onDrop" @dragover.prevent="" class="
                        md:mx-0
                        mx-auto
                        mt-4
                        mb-6
                        flex
                        flex-col
                        items-center
                        justify-center
                        w-full
                        max-w-[260px]
                        h-[470px]
                        text-center
                        p-3
                        border-2
                        border-dashed
                        border-gray-300
                        rounded-lg
                        hover:bg-gray-100
                        cursor-pointer
                    ">
                    <Icon name="majesticons:cloud-upload" size="40" color="#b3b3b1" />

                    <div class="px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[#f0cc2c] rounded-sm">
                        Select file
                    </div>
                    <input ref="file" type="file" id="fileInput" @input="onChange" hidden  />
                </label>
                <div class="flex gap-3">
                    <button @click="discard()"
                            class="px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm">
                        Discard
                    </button>
                    <button @click="createPost()"
                            class="px-10 py-2.5 mt-8 border text-[16px] text-white bg-[#f0cc2c] rounded-sm">
                        Post
                    </button>
                </div>
                <button class="add-btn">+</button>


            </ul>

        </div>

    </UploadLayout>
</template>

<script setup>
import UploadLayout from '~/layouts/uploadLayout.vue';

const { $userStore } = useNuxtApp()
const router = useRouter()

let file = ref(null)
let fileDisplay = ref(null)
let errorType = ref(null)
let caption = ref('')
let fileData = ref(null)
let errors = ref(null)
let isUploading = ref(false)
let tags = 'All';
let params = (new URL(document.location)).searchParams;
let repostId = params.get("repostId");
// definePageMeta({ middleware: 'auth' })

watch(() => caption.value, (caption) => {
    if (caption.length >= 150) {
        errorType.value = 'caption'
        return
    }
    errorType.value = null
})
onMounted(async () => {
    const addBtn = document.querySelector('.add-btn');
    const list = document.querySelector('.list');

    function removeListItem(e){
        const item = e.target.parentElement;


        item.remove();
    }

//DOCUMENT LOAD
    document.querySelectorAll('.list  .list-item').forEach(function(item) {
        item.onclick = removeListItem;
    });

    addBtn.onclick = function(e){

        const item = document.createElement('div');
        const textArea = document.createElement('textarea');
        const closeButton = document.createElement('button')
        item.classList.add('list-item');
        item.innerHTML = 'List Item' + e.screenX;
        item.appendChild(closeButton)
        item.appendChild(textArea);
        item.style.position = "relative";
        textArea.style.border = "2px solid "
        textArea.style.position = "relative"
        textArea.style.width = "400px solid "
        textArea.style.marginTop = "40px"
        textArea.style.height = "400px solid "
        textArea.setAttribute("class","slideTextArea");
        textArea.style.justifySelf = "center"
        closeButton.style.height = "100px solid "
        closeButton.style.border = "2px solid "
        closeButton.style.width = "100px solid "
        closeButton.style.float = "right"
        closeButton.style.fontSize = "2rem"

        closeButton.style.marginRight = "10px"
        closeButton.innerHTML = "x";
        closeButton.onclick = removeListItem;
        addBtn.parentNode.lastChild.insertAdjacentElement('beforebegin', item);
    }
})
const onChange = () => {
    fileDisplay.value = URL.createObjectURL(file.value.files[0])
    fileData.value = file.value.files[0]
}

const onDrop = (e) => {
    errorType.value = ''
    file.value = e.dataTransfer.files[0];
    fileData.value = e.dataTransfer.files[0]

    let extention = file.value.name.substring(file.value.name.lastIndexOf('.') + 1);



    fileDisplay.value = URL.createObjectURL(e.dataTransfer.files[0])
}

const selectTag = (value) => {

    tags += ", " + value.target.innerHTML;
    return tags;
}

const discard = () => {
    file.value = null
    fileDisplay.value = null
    fileData.value = null
    caption.value = ''
}

const getTextSlideValue = (slideTextAreaItem) => {
    let textValue = '';
    for(let i=0;i<slideTextAreaItem.length;i++) {
        textValue += ","  + slideTextAreaItem[i].value;
    }

    textValue += "," +repostId;
    return textValue;
}

const createPost = async () => {
    errors.value = null

    let data = new FormData();
    let slideTextAreaItem = document.getElementsByClassName('slideTextArea');
    let textValueForSlide = getTextSlideValue(slideTextAreaItem);

    data.append('video', fileData.value || '')
    data.append('text', caption.value || '')
    data.append('tags', tags)
    data.append('textValueForSlide',textValueForSlide);


    if (fileData.value && caption.value) {
        isUploading.value = true
    }

    try {
        let res = await $userStore.createPost(data)
        if (res.status === 200) {
            setTimeout(() => {
                router.push('/profile/' + $userStore.id)
                isUploading.value = false
            }, 1000)
        }
    } catch (error) {
        errors.value = error.response.data

        isUploading.value = false
    }
}

const clearVideo = () => {
    file.value = null
    fileDisplay.value = null
    fileData.value = null
}
</script>
<style>

.list{
    margin-top: -10px;
    list-style: none;
    display:flex;
}
.list-item{
    border: 1px solid lightgray;
    width: 250px;
    text-align: center;
    font-size: 1rem;
    margin-top: 10px;
    height: 480px;
    overflow: hidden;
    cursor: pointer;
    align-content: center;
    position: relative;
}
.add-btn{

    background-color: transparent ;
    margin-top: 10px;
    width: 50px;
    text-align: center;
    cursor: pointer;
    height: 5rem;
    font-size: 3rem;
    align-self: center;
    color: lightgray;
}
</style>