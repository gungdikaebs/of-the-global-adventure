<script setup>
import destinations from '@/assets/json/destinations.json'
import DefaultNavbar from '@/components/DefaultNavbar.vue';
import MainView from '@/components/MainView.vue';
import Footer from '@/components/Footer.vue'
import FloatingWhatspp from '@/components/FloatingWhatspp.vue';
</script>
<template>
    <DefaultNavbar />
    <MainView :datas="destinations" type="destination"></MainView>
    <FloatingWhatspp />
    <Footer />

</template>