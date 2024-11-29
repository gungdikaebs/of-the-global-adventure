<script setup>
import { ref, onMounted } from 'vue'
import activities from '@/assets/json/activities.json'

const showData = ref(8)
const randomActivities = ref(
  activities.data.sort(() => Math.random() - Math.random()).slice(0, showData.value)
)
// from randomActivities, get the image
const randomActivitiesImg = ref(randomActivities.value.map((activity) => activity.img))
const randomNumber = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1) + from)
}
const id = ref(0)
const classes = ['tall', 'wide', '', 'tall wide']
const divClass = {
  0: classes[0],
  1: classes[1],
  2: classes[2],
  3: classes[2],
  4: classes[1],
  5: classes[3],
  6: classes[0],
  7: classes[0]
}
</script>

<template>
  <!-- ACTIVITIES -->
  <section class="max-w-screen-xl mt-8 mx-auto overflow-hidden" data-aos="fade-in" data-aos-duration="1000">
    <h2 class="text-[#1E0342] font-semibold text-[2rem] md:text-[3rem] text-center">Activities</h2>
    <div class="grid-container">
      <RouterLink class="grid-item" v-for="(item, index) in randomActivities" :class="divClass[index]" :key="item"
        :style="`background-image: url('${item.img[randomNumber(0, 2)]}');`" :to="'/activities/detail/' + item.id">
      </RouterLink>
    </div>
    <div class="flex w-full justify-end">
      <RouterLink to="/activities"
        class="block py-2 px-3 text-[#0E46A3] rounded lg:bg-transparent lg:py-1 border border-[#0E46A3]">
        More
      </RouterLink>
    </div>
  </section>
  <!-- END ACTIVITIES -->
</template>
