<script setup>
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import destinations from '@/assets/json/destinations.json'
import MainDetail from '@/components/MainDetail.vue'
import { useRoute } from 'vue-router'
import { watchEffect, ref } from 'vue'
import Footer from '@/components/Footer.vue'
import FloatingWhatspp from '@/components/FloatingWhatspp.vue'


const route = useRoute()
const params = ref(route.params.id)

watchEffect(() => {
  params.value = route.params.id
})
</script>
<template>
  <DefaultNavbar />
  <MainDetail :datas="destinations" type="destination" :key="params"></MainDetail>
  <FloatingWhatspp />
  <Footer />
</template>
