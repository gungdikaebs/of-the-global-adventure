<script setup>
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import PopularTours from '@/components/PopularTours.vue'
import OurService from '@/components/OurService.vue'
import ContactUs from '@/components/ContactUs.vue'
import Activities from '@/components/ActivitiesComponentCopy.vue'
import Footer from '@/components/Footer.vue'
import ReviewCard from '@/components/ReviewCard.vue'
</script>

<template>
  <DefaultNavbar />
  <main>
    <!-- HERO -->
    <section
      class="max-w-screen-xl flex flex-col flex-wrap mx-auto py-28 bg-[url('./../assets/bg-slogan.svg')] bg-cover bg-center rounded bg-no-repeat"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div class="title-hero">
        <h1
          class="text-[#E1F7F5] font-bold text-[3rem] md:text-[5rem] mx-16 outline-4 tracking-wide"
          data-aos="fade-up"
        >
          Explore The <br />
          Most Beautiful
        </h1>
        <span class="outline-text font-bold text-[3rem] md:text-[5rem] mx-16 tracking-wide"
          >Place</span
        >
      </div>
      <RouterLink
        to="/destination"
        class="mx-16 mt-5 text-[#E1F7F5] p-3 bg-[#1E0342] hover:bg-[#0E46A3] duration-300 rounded-md pl-5 w-40 flex"
      >
        Explore Now <img src="./../assets/icons/right.svg" alt="" class="ml-3" />
      </RouterLink>
    </section>
    <!-- END HERO -->
    <!-- POPULAR TOURS -->
    <PopularTours></PopularTours>
    <!-- END POPULAR TOURS -->
    <!-- SERVICE -->
    <OurService id="services"></OurService>
    <!-- END SERVICE -->
    <!-- REVIEWS -->
    <ReviewCard></ReviewCard>
    <!-- END REVIEWS -->
    <!-- ACTIVITIES -->
    <Activities></Activities>
    <!-- END ACTIVITIES -->
    <!-- CONTACT US -->
    <ContactUs></ContactUs>
    <!-- END CONTACT US -->
    <!-- FOOTER -->
    <Footer></Footer>
    <!-- END FOOTER -->
  </main>
</template>
