<script setup>
import accomodations from '@/assets/json/accomodations.json'
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import MainView from '@/components/MainView.vue'
import router from '@/router'
import { computed } from 'vue'
import Footer from '@/components/Footer.vue'
import FloatingWhatspp from '@/components/FloatingWhatspp.vue'

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const dataComputed = computed(() => {
  return {
    data: accomodations.data.filter(
      (accomodation) => accomodation.category === capitalize(router.currentRoute.value.name)
    )
  }
})
</script>
<template>
  <DefaultNavbar />
  <MainView :datas="dataComputed" type="accomodation" :key="dataComputed"></MainView>
  <FloatingWhatspp />
  <Footer />
</template>
