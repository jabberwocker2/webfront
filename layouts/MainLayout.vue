
<template>
    <TopNav/>
    <AddScrollable/>
    <div
        :class="route.fullPath === '/' ? 'max-w-[1240px]' : ''"
        class=" grid  mx-auto  lg:px-2.5 px-0"
    >
        <div>
            <SideNavMain />
        </div>
        <slot />
    </div>
</template>

<script setup>
const route = useRoute()
</script>
