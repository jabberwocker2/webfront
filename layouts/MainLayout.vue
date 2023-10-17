
<template>
    <TopNav/>
<!--    <AddScrollable/>-->
    <div
        :class="route.fullPath === '/' ? '' : ''"
        class="   mx-auto  lg:px-2.5 px-0 flex justify-end"
    >
        <div>
        </div>
        <slot />
    </div>
</template>

<script setup>
const route = useRoute()
</script>
