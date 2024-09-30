<script setup>
import DataCard from '@/components/DataCard.vue'
import { defineProps } from 'vue'
import { ref, computed } from 'vue'

const props = defineProps({
  datas: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

const search = ref('')
const filter = ref('')
const allData = props.datas
const totalData = ref(allData.data.length)
const maxShowedData = ref(9)
const type = props.type
const showMoreData = 6

allData.data.sort((a, b) => b.id - a.id)

const filteredAndSortedItems = computed(() => {
  const filteredItems = allData.data.filter((datas) =>
    datas.placeName.toLowerCase().includes(search.value.toLowerCase())
  )

  if (filter.value === 'alphabetical') {
    filteredItems.sort((a, b) => a.placeName.localeCompare(b.placeName))
  } else if (filter.value === 'popular') {
    filteredItems.sort((a, b) => b.rating - a.rating)
  }

  return { limitedData: filteredItems.slice(0, maxShowedData.value), originalData: filteredItems }
})

console.log(filteredAndSortedItems.value.limitedData)
const updateTotalValue = () => {
  if (search.value) {
    totalData.value = filteredAndSortedItems.value.originalData.length
  } else {
    totalData.value = allData.data.length
  }
}
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <main>
    <section class="max-w-screen-xl flex mx-auto my-5 justify-between flex-col lg:flex-row px-8 py-2">
      <h1 class="font-semibold text-3xl text-[#0E46A3] mb-2 lg:mb-0">
        {{ capitalize(type) }} Page
      </h1>
      <div class="flex flex-row gap-3">
        <input type="text" :placeholder="'Search ' + capitalize(type) + '...'" v-model="search"
          @keyup="updateTotalValue"
          class="border bg-transparent border-[#0E46A3] rounded text-[#0E46A3] focus:outline-none placeholder:text-sm placeholder:text-[#0E46A3] px-3 py-1 w-40 lg:w-full" />

        <select class="rounded bg-[#E1F7F5] text-[#0E46A3] border border-[#0E46A3] focus:outline-none w-18 px-3 py-1"
          name="" id="" v-model="filter">
          <option class="" value="" hidden>Filter</option>
          <option value="alphabetical">A - Z</option>
          <option value="popular">Popular</option>
        </select>
      </div>
    </section>
    <section class="max-w-screen-xl flex  mx-auto">
      <div class="flex flex-col lg:flex-row gap-5 mt-5 flex-auto md:p-3 flex-wrap">
        <!-- card goes here -->
        <DataCard v-for="data in filteredAndSortedItems.limitedData" :data="data" :key="data.id" :type="type">
        </DataCard>
      </div>
    </section>
    <div class="flex w-full">
      <button @click="maxShowedData += showMoreData" v-if="totalData > maxShowedData"
        class="bg-white border border-1 text-black text-center mx-auto mb-12 mt-4 p-2 rounded">
        Load More
      </button>
    </div>
  </main>
</template>
