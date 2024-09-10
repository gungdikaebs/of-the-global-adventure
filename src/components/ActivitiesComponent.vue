<script setup>
import { ref, onMounted } from 'vue'

// Fungsi untuk menghasilkan kelas acak
const generateRandomClass = () => {
  const classes = ['tall', 'wide', 'tall wide', '']
  return classes[Math.floor(Math.random() * classes.length)]
}

// Menginisialisasi elemen-elemen grid dengan kelas acak
const gridItems = ref([])

onMounted(() => {
  // Menghasilkan kelas acak untuk setiap grid item
  gridItems.value = Array(11)
    .fill('')
    .map(() => generateRandomClass())
})
</script>

<template>
  <!-- ACTIVITIES -->
  <section class="max-w-screen-xl mt-14 mx-auto">
    <h1 class="text-[#1E0342] font-semibold text-[2rem] md:text-[3rem] text-center">Activities</h1>
    <div class="grid-container">
      <!-- Iterasi elemen grid -->
      <div
        v-for="(itemClass, index) in gridItems"
        :key="index"
        :class="['grid-item', itemClass]"
        :style="`background-image: url('https://picsum.photos/id/${index + 1}/900/900.jpg');`"
      ></div>
    </div>
    <div class="flex w-full justify-end">
      <RouterLink
        to="/activities"
        class="block py-2 px-3 text-[#0E46A3] rounded lg:bg-transparent lg:py-1 border border-[#0E46A3"
      >
        More</RouterLink
      >
    </div>
  </section>
  <!-- END ACTIVITIES -->
</template>
