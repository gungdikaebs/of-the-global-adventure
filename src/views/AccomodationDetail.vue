<script setup>
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import accomodation from '@/assets/json/accomodations.json'
import MainDetail from '@/components/MainDetail.vue'

</script>
<template>
    <DefaultNavbar />
    <MainDetail :datas="accomodation" type="accomodation"></MainDetail>
</template>