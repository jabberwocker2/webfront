<template>
    <div class="grid mt-[30px]">
<!--        <div class="flex justify-between justify-self-center h-[30px] fixed w-[450px] z-50 ">-->

<!--            <div class="buttonTab grid border">tab 1</div>-->
<!--            <div class="buttonTab grid border ">tab 2</div>-->
<!--            <div class="buttonTab grid border">tab 3</div>-->
<!--        </div>-->
        <div  class="scrolltags fixed justify-self-center max-w-[700px]  snap-mandatory snap-x z-50  2s ease-in-out   ">
            <button :class="`${tags.label}`" :id="`${tags.label}`" v-for="tags in $allTagsGeneral" :key="tags"
                    @click="searchWithTags(tags, $event)"
                    class="tagsButton snap-center ml-4 text-xs inline-flex items-center font-bold text-[gray] leading-sm uppercase px-4 py-2 border   rounded-full cursor-pointer mt-2">

                {{ tags.label }}
            </button>
            <button
                    class="tagsButton snap-center ml-4 text-xs inline-flex items-center font-bold text-[gray] leading-sm uppercase px-4 py-2 border   rounded-full cursor-pointer">+
            </button>
        </div>
    </div>
</template>

<script setup>
const {$generalStore, $userStore, $profileStore} = useNuxtApp()
const $allTagsGeneral = [{
    label: 'sports', value: $generalStore.sportsTag
}, {
    label: 'cars', value: $generalStore.carsTag
}, {
    label: 'news', value: $generalStore.newsTag
}, {
    label: 'cooking', value: $generalStore.cookingTag
}, {
    label: 'DIY', value: $generalStore.DIYTag
}, {
    label: 'history', value: $generalStore.historyTag
}, {
    label: 'music', value: $generalStore.musicTag
}, {
    label: 'craft', value: $generalStore.craftTag
}, {
    label: 'bikes', value: $generalStore.bikesTag
}, {
    label: 'national', value: $generalStore.nationalTag
}, {
    label: 'kids', value: $generalStore.kidsTag
}, {
    label: 'science', value: $generalStore.scienceTag
},]

onMounted (() => {
    // document.getElementsByClassName('scrolltags')[0].addEventListener('scroll',function () {
    //     setTimeout(() => {
    //         document.getElementsByClassName('scrolltags')[0].style.opacity = "0";
    //     }, 2000)
    // })

    let tagsButton = document.getElementsByClassName('tagsButton');

    for (let i = 0;i < tagsButton.length;i++) {
        if((i%3) === 0) {

            let classList = tagsButton[i].getAttribute("class");

            classList = classList.replace("snap-center","");
            tagsButton[i].setAttribute("class",classList);
        }
    }

})

const tagAnimation = () => {
    document.getElementsByClassName('scrolltags')[0].style.opacity = "1";
}
const tagExit = () => {
    document.getElementsByClassName('scrolltags')[0].style.opacity = "0";
}
const searchWithTags = (tags, component) => {
    let searchQuery = '';


    if (document.getElementById(component.target.id).style.backgroundColor) {
        document.getElementById(component.target.id).style.backgroundColor = "";
        document.getElementById(component.target.id).style.color = "#004151";
    } else {
        document.getElementById(component.target.id).style.backgroundColor = "black";
        document.getElementById(component.target.id).style.color = "white";

    }

    for (let i = 0; i < $allTagsGeneral.length; i++) {
        if ($allTagsGeneral[i].label == tags.label) {
            if ($allTagsGeneral[i].value == true) {
                $allTagsGeneral[i].value = false;
            } else {
                $allTagsGeneral[i].value = true;
            }
        }
        if ($allTagsGeneral[i].value == true) {
            if (searchQuery == '') {
                searchQuery += $allTagsGeneral[i].label;

            } else {
                searchQuery += "," + $allTagsGeneral[i].label;
            }
        }
    }


    $generalStore.selectedTags = searchQuery;
    $generalStore.getAllUsersAndPosts(searchQuery);

}


</script>


<style>
.scrolltags::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}

.scrolltags {
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    /* Firefox */
}

.buttonTab {
    width: 200px;
    justify-items: center;
    justify-content: center;
}
</style>