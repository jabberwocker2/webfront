<template>
    <MainLayout>
        <SideNavMain />
        <vue-scroll-snap class="grid justify-self-center" id="scroll" >


            <div v-for="post in $generalStore.posts" class="pt-[90px] w-{calc(100px-90px)} max-w-[690px] lg:justify-self-center md:justify-self-center">
                <div  class="item w-[700px] border-t-2 border-l-2 ml-[10px]">
                    <PostMain  :post="post" />
                </div>
            </div>





        </vue-scroll-snap>
    </MainLayout>

</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import VueScrollSnap from "vue-scroll-snap";
import {usePostStore} from "~/stores/post";
const { $generalStore, $userStore,$postStore } = useNuxtApp()

onMounted(async () => {
    try {
        $generalStore.getAllUsersAndPosts('')

    } catch (error) {

    }
})


</script>

<style>
.item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/

    min-height: 900px;
    border: 0;
    max-width: 500px;
    /* border-color: seashell; */
}

#backgroundGrade {
    width: 100%;
    height: 100%;
    background: white;
    border : none;
}

.scroll-snap-container {
    height: 900px;
    width: 520px;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    min-width: 460px;
    display: grid;
    border : none;
    /* Firefox */

}

.scroll-snap-container::-webkit-scrollbar {
    display: none;
    border : none;
    /* Safari and Chrome */
}

.scroll-snap-container {
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    /* Firefox */
}
</style>