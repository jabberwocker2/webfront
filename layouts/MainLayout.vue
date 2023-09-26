
<template>
    <TopNav/>
    <AddScrollable/>
    <div
        :class="route.fullPath === '/' ? '' : ''"
        class=" grid  mx-auto  lg:px-2.5 px-0"
    >
        <div>
        </div>
        <slot />
    </div>
</template>

<script setup>
const route = useRoute()
</script>
