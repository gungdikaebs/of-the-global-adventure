<script setup>
import checkRounded from '@/components/icons/checkRounded.vue'
</script>

<template>
  <section class="max-w-screen-xl bg-[#0E46A3] flex flex-col mx-auto rounded-lg" data-aos="fade-down"
    data-aos-duration="2000">
    <div class="flex flex-col" data-aos="zoom-in">
      <h2 class="text-center mt-10 font-semibold text-[2rem] md:text-[3rem] text-[#E1F7F5] tracking-wide">
        Service
      </h2>
      <p class="text-center text-[#E1F7F5] font-light text-sm mt-3 px-5">
        Our service packages are designed to provide you with the best experience possible. Whether you are looking for
        a romantic getaway or a fun-filled family vacation, we have something for everyone. Our packages include a
        variety of activities and amenities to ensure that your trip is unforgettable.
      </p>
    </div>
    <div class="flex flex-col md:flex-row py-20 px-5 lg:px-20 gap-16 justify-center items-center">
      <div
        class="w-full lg:w-[45%] h-72 bg-[#E1F7F5] rounded-xl px-5 items-center md:w-[80%] hover:scale-110 duration-500">
        <div class="py-[10%] flex flex-col">
          <h3 class="text-center text-[#0E46A3] font-semibold text-[1.5rem] mb-3">
            Honeymoon Package
          </h3>
          <hr class="border-b w-72 mx-auto mb-3 border-slate-500" />
          <ul class="mx-auto pl-0 md:pl-5">
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded> Romantic candle light dinner
            </li>
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded>Couple white water rafting
            </li>
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded>⁠Bali romantic swing
            </li>
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded>⁠Couple beach activity
            </li>
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded>⁠Couple trip sightseeing
            </li>
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded>⁠Couple spa treatment
            </li>
          </ul>
        </div>
      </div>
      <div
        class="w-full lg:w-[45%] h-72 bg-[#E1F7F5] rounded-xl px-5 items-center md:w-[80%] hover:scale-110 duration-500">
        <div class="py-[10%] flex flex-col">
          <h3 class="text-center text-[#0E46A3] font-semibold text-[1.5rem] mb-3">
            Family Package
          </h3>
          <hr class="border-b w-72 mx-auto mb-3 border-slate-500" />
          <ul class="mx-auto pl-0 md:pl-5">
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded>Family trip sightseeing
            </li>
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded>⁠Family white water rafting
            </li>
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded>⁠Family beach activity
            </li>
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded>⁠Bali family swing
            </li>
            <li class="flex">
              <checkRounded class="mr-5"> </checkRounded>⁠Family island trip
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
