<script setup>
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import MainView from '@/components/MainView.vue'
import activities from '@/assets/json/activities.json'
import Footer from '@/components/Footer.vue'
import FloatingWhatspp from '@/components/FloatingWhatspp.vue';

</script>
<template>
  <DefaultNavbar />
  <MainView :datas="activities" type="activities"></MainView>
  <FloatingWhatspp />
  <Footer />
</template>
