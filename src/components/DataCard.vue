<script setup>
import { RouterLink } from 'vue-router';
import { defineProps, ref } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
})
const publicPath = import.meta.env.BASE_URL
const path = ref('')

if (props.type === 'destination') {
    path.value = '/destination/detail/' + props.data.id
} else if (props.type === 'accomodation') {
    path.value = '/accomodation/detail/' + props.data.id
} else if (props.type === 'activities') {
    path.value = '/activities/detail/' + props.data.id
}
</script>
<template>
    <div class="flex flex-col bg-slate-100 rounded-lg mx-auto lg:mx-0">
        <RouterLink :to="path">
            <div class="group relative w-[350px] h-[200px] md:w-[400px] md:h-[250px] p-3 overflow-hidden">
                <img :src="publicPath + props.data.img[0]"
                    class="w-full h-full object-cover rounded brightness-75 group-hover:brightness-90 duration-500 transition-all" />
                <div
                    class=" w-full h-full top-0 left-0
                     absolute flex flex-col justify-center items-center md:opacity-0 duration-[0.6s] md:group-hover:opacity-[1] ">
                    <h1 class="insideText text-sm leading-snug tracking-wide" v-html="props.data.placeName">
                    </h1>
                </div>
            </div>
        </RouterLink>
        <div class="flex justify-end  w-full">
            <h1 class="hidden md:block mx-5 mt-1 font-semibold text-l flex-1 flex-grow">{{ props.data.placeName }}</h1>
            <RouterLink :to="path"
                class="flex mb-5 text-[#0E46A3] border-[#0E46A3] border hover:bg-[#0E46A3] hover:text-[#E1F7F5] duration-300 text-sm px-3 py-2 rounded mx-3">
                <span> View Detail </span>
            </RouterLink>
        </div>
    </div>
</template>