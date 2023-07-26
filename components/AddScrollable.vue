<template>
    <div class="scrolltags flex overflow-scroll m-4 ml-[15%] mr-[20%]">
        <button :class="`${tags.label}`" :id="`${tags.label}`" v-for="tags in $allTagsGeneral" :key="tags"
            @click="searchWithTags(tags, $event)"
            class=" ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer">

            {{ tags.label }}
        </button>

    </div>
</template>

<script setup>
const { $generalStore, $userStore, $profileStore } = useNuxtApp()
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



const searchWithTags = (tags, component) => {
    let searchQuery = '';

    console.log("reached search", component.target.id);
    if (document.getElementById(component.target.id).style.backgroundColor) {
        document.getElementById(component.target.id).style.backgroundColor = "";
        document.getElementById(component.target.id).style.color = "#004151";
    } else {
        document.getElementById(component.target.id).style.backgroundColor = "#f0cc2c";
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
</style>