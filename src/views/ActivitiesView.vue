<script setup>
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import MainView from '@/components/MainView.vue'
import activities from '@/assets/json/activities.json'
import Footer from '@/components/Footer.vue'

</script>
<template>
  <DefaultNavbar />
  <MainView :datas="activities" type="activities"></MainView>
  <Footer />
</template>
