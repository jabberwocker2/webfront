+<template>
    <div 
        id="SideNavMain" 
        :class="route.fullPath === '/' ? 'lg:w-[200px]' : 'lg:w-[220px]'"
        class="fixed z-20  dark:bg-black h-full lg:border-r-0 border-r w-[75px] overflow-autoe"
    >
        <div class="lg:w-full w-[55px] mx-auto">
            <div  @click="$generalStore.changePage('home')" class="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2 transition-all 2s ease-in-out">
                <Icon class="self-center" name="mdi:home" size="27"/>
                <p v-if="!$generalStore.expandedPost.id" >Home</p>
            </div>
            <div @click="$generalStore.changePage('profile')" class="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2 transition-all 2s ease-in-out">
                <Icon class="self-center" name="mdi:account-multiple" size="27" />
                <p v-if="!$generalStore.expandedPost.id">Profile</p>
            </div>
<!--            <div v-if="$userStore.id">-->
<!--                <div class="border-b lg:ml-2 mt-2" />-->

<!--                <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">-->
<!--                    Following accounts-->
<!--                </div>-->

<!--                <div class="lg:hidden block pt-3" />-->

<!--                <div -->
<!--                    v-if="$generalStore.following" -->
<!--                    v-for="fol in $generalStore.following"-->
<!--                >-->
<!--                    <div @click="isLoggedIn(fol)" class="cursor-pointer">-->
<!--                        <MenuItemFollow :user="fol" />-->
<!--                    </div>-->
<!--                </div>-->

<!--                <button class="lg:block hidden text-[black] pt-1.5 pl-2 text-[13px]">See more</button>-->

<!--            </div>-->
            <div class="pb-14"></div>
        </div>
    </div>
</template>

<script setup>
const { $generalStore, $userStore } = useNuxtApp()
const route = useRoute()
const router = useRouter()

const isLoggedIn = (fol) => {
    if (!$userStore.id) {
        $generalStore.isLoginOpen = true
        return
    }
    setTimeout(() => router.push(`/profile/${fol.id}`), 200)
}

const showWidgets = () => {
// console.log('reached here');
// document.getElementById('scroll').style.opacity = '0';
// setTimeout(() =>  document.getElementById('scroll').style.display = 'none', 200)



}
</script>