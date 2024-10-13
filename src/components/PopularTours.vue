<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { RouterLink } from 'vue-router'
import destinations from '@/assets/json/destinations.json'

const publicPath = import.meta.env.BASE_URL
const totalData = destinations.data.length
const maxShowedData = 6

destinations.data.sort((a, b) => b.rating - a.rating)

const middleNumber = Math.floor(totalData / 2)
</script>
<template>
  <section class="my-20 max-w-screen-xl flex flex-col items-center mx-auto" data-aos="fade-up" data-aos-duration="1500">
    <div class="container mb-5">
      <h2 class="text-[#1E0342] font-semibold text-[2rem] md:text-[3rem] text-center mb-10">
        Popular Tours
      </h2>
    </div>
    <div class="container">
      <swiper-container pagination-el=".swiper-pagination" class="popular-slider max-w-screen-lg" effect="coverflow"
        :grab-cursor="true" :centered-slides="true" :loop="true" slides-per-view="auto" coverflow-effect-rotate="0"
        coverflow-effect-stretch="0" coverflow-effect-depth="100" coverflow-effect-modifier="2.5"
        :pagination-clickable="true" space-between="200" :initial-slide="middleNumber">
        <swiper-slide class="popular-slide" v-for="destination in destinations.data.slice(0, maxShowedData)"
          :key="destination.id">
          <RouterLink :to="{ path: '/destination/detail/' + destination.id }">
            <div class="popular-slide-img">
              <img :src="publicPath + destination.img[0]" alt="" class="img-main" />
            </div>
            <div class="popular-slide-title">
              <h3 class="front-text text-[#E1F7F5] font-['Montez'] text-[3rem] font-bold">
                {{ destination.placeName }}
              </h3>
            </div>
          </RouterLink>
        </swiper-slide>
      </swiper-container>
      <div class="popular-slider-control">
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>
