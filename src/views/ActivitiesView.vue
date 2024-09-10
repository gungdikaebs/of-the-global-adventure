<script setup>
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import MainView from '@/components/MainView.vue'
import activities from '@/assets/json/activities.json'
</script>
<template>
  <DefaultNavbar />
  <MainView :datas="activities" type="activities"></MainView>
</template>
