

<template >

    <div  id="videoHolder" class="slideContainer flex content-between w-[25%] h-[900px] transition-all 2s ease-in-out  overflow-x-auto overflow-y-hidden snap-mandatory snap-x ">
            <div :id="`videoContainer${$generalStore.expandedPost.id}`"
                 class="flex rounded-xl  object-cover h-full  z-0  snap-center self-center">
                <video v-if="$generalStore.expandedPost.video" :id="`videoElement${$generalStore.expandedPost.id}`" ref="video" loop controls autoplay muted
                       class=" rounded-xl object-cover  min-h-[900px] max-w-[500px] z-0 "
                       :src="$generalStore.expandedPost.video[0]"/>
            </div>
    </div>
</template>
<script setup>

import constants from "~/constants";
const { $generalStore,$userStore } = useNuxtApp()


</script>
<style>

</style>