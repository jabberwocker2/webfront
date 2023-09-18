<template>
    <div class="flex w-[20%] justify-around mt-1">
        <Icon @click="commonFunctions.toggleTextArea(posts.id,comment.id,primaryObject)" name="ri:share-forward-fill" size="20" class="text-gray-400" />
        <Icon @click="" name="mdi:lightbulb" size="20" class="text-gray-400"/>
    </div>

</template>

<script setup>

import commonFunction from "~/components/commonFunction";


import commonFunctions from "~/components/commonFunction";
</script>

