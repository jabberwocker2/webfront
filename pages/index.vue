




<template>
    <MainLayout>
        <vue-scroll-snap class="justify-self-center">
            <div v-for="post in $generalStore.posts" :key="post" class="pt-[90px] w-{calc(100px-90px)} max-w-[690px]">
                <div class="item">
                    <PostMain v-if="post" :post="post" />
                </div>
            </div>
        </vue-scroll-snap>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import VueScrollSnap from "vue-scroll-snap";
const { $generalStore } = useNuxtApp()

onMounted(async () => {
    try {
        $generalStore.getAllUsersAndPosts('')
    } catch (error) {
        console.log(error)
    }
})
</script>

<style>
.item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    min-height: 800px;
}

.scroll-snap-container {
    margin-top: 2rem;
    height: 800px;
    width: 450px;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */

}

.scroll-snap-container::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}

.scroll-snap-container {
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    /* Firefox */
}
</style>