<script setup>
import { reviews } from '@/config/reviews'
import StarRating from './StarRating.vue'
</script>
<template>
  <section class="p-20 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
      <div class="">
        <h2
          class="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-10 text-center"
        >
          Customer reviews & rating
        </h2>
        <div class="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
          <div class="wrapper" v-for="review in reviews">
            <div class="flex sm:items-center flex-col sm:flex-row justify-between mb-4">
              <div class="flex items-center stars gap-3">
                <StarRating :style="100" :rating="review.rating"></StarRating>
              </div>
              <div class="flex items-center gap-3">
                <h6 class="font-semibold text-lg leading-8 text-black">{{ review.name }}</h6>
                <p class="font-medium text-base leading-7 text-gray-400">{{ review.date }}</p>
              </div>
            </div>

            <p class="font-normal text-lg leading-8 text-gray-500" v-html="review.review"></p>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row items-center justify-between pt-8 max-xl:max-w-3xl max-xl:mx-auto"
        ></div>
      </div>
    </div>
  </section>
</template>
