
<template>
    <MainLayout>
        <vue-scroll-snap class="justify-self-center">

            <div class="pt-[90px] w-{calc(100px-90px)} max-w-[690px]">
            <div class="item">
                <PostMain />
            </div>
            <div class="item">
                <PostMain />
            </div>
            <div class="item">
                <PostMain />
            </div>
            <div class="item">
                <PostMain />
            </div>
            <div class="item">
                <PostMain />
            </div>


            </div>
        </vue-scroll-snap>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import VueScrollSnap from "vue-scroll-snap";

</script>

<style>
.item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    min-height: 700px;
}

.scroll-snap-container {
    height: 700px;
    width: 500px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

}
.scroll-snap-container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
.scroll-snap-container {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
</style>