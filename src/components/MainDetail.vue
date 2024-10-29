<script setup>
import DataCard from '@/components/DataCard.vue'
import MapIframe from '@/components/MapIframe.vue'
import StarRating from '@/components/StarRating.vue'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import 'swiper/css'
import { contactTemplate } from '@/config/contact'

const props = defineProps({
  datas: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})
const publicPath = import.meta.env.BASE_URL
const route = useRoute()
const params = route.params.id
const type = props.type
const maxShowedData = ref(6)
const data = props.datas.data.filter((data) => data.id == params)[0]
const dataWithoutCurrent = props.datas.data.filter((data) => data.id != params)
const totalData = ref(dataWithoutCurrent.length)
const showMoreData = 6

const limitedData = computed(() => {
  return dataWithoutCurrent.slice(0, maxShowedData.value)
})

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>
<template>
  <main>
    <section class="max-w-screen-xl flex flex-col items-center justify-center mx-auto">
      <div class="mb-10 w-full">
        <div class="flex flex-col mt-8 p-4 w-[100%]">
          <div
            class="border border-[#0E46A3] hover:bg-[#0E46A3] hover:text-[#E1F7F5] duration-300 w-fit flex rounded"
          >
            <RouterLink :to="'/' + type" class="px-4 py-1">Back</RouterLink>
          </div>
          <div class="flex flex-col lg:flex-row mt-5">
            <div class="flex-1 relative w-96 justify-center mx-auto">
              <swiper-container
                class="mySwiper w-full"
                pagination="true"
                autoplay-delay="3500"
                loop="true"
              >
                <swiper-slide
                  class="w-full bg-white items-center justify-center flex"
                  v-for="img in data.img"
                  :key="img"
                >
                  <img
                    :src="publicPath + img"
                    alt=""
                    class="mx-auto rounded-lg block object-cover w-full h-96"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
            <div class="flex-1 mt-5 lg:mt-0 lg:ml-5">
              <h1 class="text-3xl font-semibold">{{ data.placeName }}</h1>
              <div class="flex my-3" v-if="type != 'destination'">
                <StarRating :rating="data.rating"></StarRating>
              </div>
              <div>
                <p class="text-[#0E46A3]">{{ data.region }}</p>
                <p class="mt-5 text-justify" v-html="data.textDetails"></p>
              </div>
              <div class="flex gap-8 lg:gap-[30%] mb-10 mt-5">
                <div class="flex mt-5">
                  <img src="../assets/icons/location.png" alt="" width="40" />
                  <a href="#iframe" class="py-2 ml-1 text-sm text-left">{{ data.placeName }}</a>
                </div>
                <div class="flex mt-3">
                  <a href="">
                    <img src="../assets/icons/Whatsapp.png" alt="" />
                  </a>
                  <a
                    :href="contactTemplate(data.placeName, data.category)"
                    v-if="data.category"
                    target="_blank"
                    class="py-3 ml-1 text-sm text-left"
                    >Whatsapp</a
                  >
                  <a
                    :href="contactTemplate(data.placeName, 'destination')"
                    v-else
                    target="_blank"
                    class="py-3 ml-1 text-sm text-left"
                    >Whatsapp</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="data.iframeLink != false"
        class="flex flex-col w-[80%] lg:w-[60%] items-center"
        id="iframe"
      >
        <h1 class="font-semibold text-2xl my-2">Map Destination</h1>
        <MapIframe :src="data.iframeLink"> </MapIframe>
      </div>
    </section>
    <section class="max-w-screen-xl mx-auto justify-between mt-20 mb-12">
      <h1 class="font-semibold text-2xl mx-0 md:mx-5 text-center lg:text-left">
        Other {{ capitalize(type) }}
      </h1>
      <div class="flex flex-col lg:flex-row mx-auto flex-wrap lg:mx-0 justify-items-start gap-5">
        <DataCard
          v-for="otherData in limitedData"
          :type="type"
          :data="otherData"
          :key="otherData.id"
        >
        </DataCard>
      </div>
    </section>
    <div class="flex w-full">
      <button
        @click="maxShowedData += showMoreData"
        v-if="totalData > maxShowedData"
        class="bg-white text-black text-center mx-auto mb-12 mt-4 p-2 rounded"
      >
        Load More
      </button>
    </div>
  </main>
</template>
