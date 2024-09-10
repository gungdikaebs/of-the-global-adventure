<script setup>
import { ref } from 'vue'
import StarFull from '@/components/icons/StarFull.vue'
import StarHalf from '@/components/icons/StarHalf.vue'
import StarNone from '@/components/icons/StarNone.vue'

const props = defineProps({
  rating: {
    type: Number,
    required: true
  }
})
const rating = ref(props.rating)
const ratingHalf = ref(0)
const ratingNone = ref(0)

if (rating.value < 4.5) {
  ratingNone.value = 5 - rating.value
}

if (ratingNone.value % 1 !== 0) {
  ratingNone.value = Math.floor(ratingNone.value)
}

if (rating.value % 1 !== 0) {
  rating.value = Math.floor(rating.value)
  ratingHalf.value = 1
}
</script>
<template>
  <span class="flex flex-row" v-for="rating in rating" :key="rating">
    <StarFull />
  </span>
  <span class="flex flex-row" v-if="ratingHalf">
    <span v-for="rating in ratingHalf" :key="rating">
      <StarHalf />
    </span>
  </span>
  <span class="flex flex-row" v-if="ratingNone">
    <span v-for="rating in ratingNone" :key="rating">
      <StarNone />
    </span>
  </span>
</template>
