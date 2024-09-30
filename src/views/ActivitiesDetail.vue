<script setup>
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import activities from '@/assets/json/activities.json'
import MainDetail from '@/components/MainDetail.vue'
import { useRoute } from 'vue-router'
import { watchEffect, ref } from 'vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
const params = ref(route.params.id)

watchEffect(() => {
  params.value = route.params.id
})
</script>
<template>
  <DefaultNavbar />
  <MainDetail :datas="activities" type="activities" :key="params"></MainDetail>
  <Footer />
</template>
