<script setup>
import { reviews } from '@/config/reviews'
import StarRating from './StarRating.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
</script>
<style>
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: '' !important;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: '' !important;
}

.swiper-button-next svg,
.swiper-button-prev svg {
  width: 24px !important;
  height: 24px !important;
}

.swiper-button-next,
.swiper-button-prev {
  position: relative !important;
}

.swiper-slide.swiper-slide-active {
  --tw-border-opacity: 1 !important;
  border-color: rgb(79 70 229 / var(--tw-border-opacity)) !important;
}

.swiper-slide.swiper-slide-active > .swiper-slide-active\:text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}

.swiper-slide.swiper-slide-active > .flex .grid .swiper-slide-active\:text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}
</style>

<template>
  <section class="p-16 mt-10 relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8"
      >
        <h2 class="text-4xl text-center font-bold text-gray-900 lg:text-left">Testimonials</h2>
        <!-- Slider controls -->
        <div class="flex items-center gap-8">
          <button
            id="slider-button-left"
            class="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
            data-carousel-prev
          >
            <svg
              class="h-6 w-6 text-indigo-600 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            id="slider-button-right"
            class="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
            data-carousel-next
          >
            <svg
              class="h-6 w-6 text-indigo-600 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <swiper-container
        pagination-el=".swiper-pagination"
        class="review-slider max-w-screen-lg"
        effect="coverflow"
        :grab-cursor="true"
        :centered-slides="true"
        :loop="true"
        slides-per-view="auto"
        coverflow-effect-rotate="0"
        coverflow-effect-stretch="0"
        coverflow-effect-depth="100"
        coverflow-effect-modifier="2.5"
        :pagination-clickable="true"
        space-between="200"
        :initial-slide="middleNumber"
      >
        <swiper-slide class="review-slide" v-for="review in reviews" :key="review.id">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600"
            >
              <div
                class="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600"
              >
                <StarRating :style="100" :rating="review.rating"></StarRating>
              </div>
              <p
                class="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800"
              >
                {{ review.review }}
              </p>
              <div class="flex items-center gap-5">
                <img
                  class="rounded-full object-cover"
                  src="https://pagedone.io/asset/uploads/1696229969.png"
                  alt="avatar"
                />
                <div class="grid gap-1">
                  <h5
                    class="text-gray-900 font-medium transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600"
                  >
                    {{ review.name }}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="popular-slider-control">
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- <div class="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
          <div class="wrapper" v-for="review in reviews">
            <div class="flex sm:items-center flex-col sm:flex-row justify-between mb-4">

              <div class="flex items-center stars gap-3">

                <StarRating :style="100" :rating="review.rating"></StarRating>
              </div>
              <div class="flex items-center gap-3">
                <img
                  src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                  alt="" class="w-10">
                <h6 class="font-semibold text-lg leading-8 text-black">{{ review.name }}</h6>
                <p class="font-medium text-base leading-7 text-gray-400">{{ review.date }}</p>
              </div>
            </div>

            <p class="font-normal text-lg leading-8 text-gray-500 " v-html="review.review"></p>
          </div>
        </div> -->
  </section>
</template>
