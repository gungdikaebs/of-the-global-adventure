<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute() // Ambil informasi rute saat ini

const toggleNavbar = () => {
  const navbar = document.getElementById('navbar-default')
  navbar.classList.toggle('hidden')
}

// State untuk mengontrol dropdown
const showDropdown = ref(false)
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

// Fungsi untuk memeriksa apakah URL saat ini cocok dengan path
const isActive = (path) => route.path.startsWith(path)

// Fungsi untuk memeriksa fragment hash
const isHashActive = (hash) => {
  return window.location.hash === hash
}

// Cek apakah route saat ini termasuk dalam kategori Accomodation
const isAccomodationActive = () => {
  return route.path.startsWith('/hotel') || route.path.startsWith('/restaurant')
}

// Buka dropdown secara otomatis jika di halaman accomodation
if (isAccomodationActive()) {
  showDropdown.value = true
}
</script>

<template>
  <!-- NAVBAR -->
  <header class="sticky top-0 z-[9999]">
    <nav class="bg-[#E1F7F5]">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/" class="flex items-center">
          <img src="./../assets/Logo.png" alt="" width="100px" />
        </RouterLink>
        <button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
          @click="toggleNavbar">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <!-- dibagian ini kasi class HIDDEN -->
        <div class="w-full lg:block lg:w-auto hidden" id="navbar-default">
          <ul class="font-medium flex flex-col lg:p-0 mt-4 rounded-lg lg:flex-row lg:mt-0 lg:gap-14">
            <li>
              <RouterLink to="/" class="block py-2 px-3 rounded bg-transparent lg:py-1"
                :class="isActive('/') ? 'text-[#0E46A3]' : 'text-[#0E46A3]'"
                :aria-current="isActive('/') ? 'page' : undefined">
                Home
              </RouterLink>
            </li>
            <li>
              <!-- Manually check for hash instead of using route path -->
              <a href="/#services" class="block py-2 px-3 rounded lg:py-1"
                :class="isHashActive('#services') ? 'text-white bg-[#0E46A3]' : 'text-[#0E46A3]'"
                aria-current="isHashActive('#services') ? 'page' : undefined">
                Services
              </a>
            </li>
            <li>
              <RouterLink to="/destination" class="block py-2 px-3 rounded  lg:py-1"
                :class="isActive('/destination') ? 'text-white bg-[#0E46A3]' : 'text-[#0E46A3]'"
                :aria-current="isActive('/destination') ? 'page' : undefined">
                Destinations
              </RouterLink>
            </li>

            <!-- Dropdown Accomodation -->
            <li class="relative">
              <button @click="toggleDropdown" class="flex items-center justify-between w-full py-2 px-3 rounded lg:py-1"
                :class="isAccomodationActive() ? 'text-white bg-[#0E46A3]' : 'text-[#0E46A3]'"
                :aria-current="isAccomodationActive() ? 'page' : undefined">
                Accomodation
                <!-- Ikon dinamis yang berubah berdasarkan status dropdown -->
                <svg :class="showDropdown ? 'transform rotate-180' : ''"
                  class="w-4 h-4 ml-2 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul v-show="showDropdown"
                class="relative lg:absolute left-0 mt-3 lg:mt-5 w-full lg:bg-[#E1F7F5] rounded-lg shadow-lg lg:w-44">
                <li>
                  <RouterLink
                    class="block py-2 px-5 rounded-lg text-[#0E46A3] hover:bg-[#0E46A3] hover:text-[#E1F7F5] duration-300 lg:w-full mx-auto"
                    to="/hotel">Hotel</RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="block py-2 px-5 rounded-lg text-[#0E46A3] hover:bg-[#0E46A3] hover:text-[#E1F7F5] duration-300 lg:w-full mx-auto"
                    to="/restaurant">Restaurant</RouterLink>
                </li>
              </ul>
            </li>
            <li>
              <RouterLink to="/activities" class="block py-2 px-3 rounded  lg:py-1"
                :class="isActive('/activities') ? 'text-white bg-[#0E46A3]' : 'text-[#0E46A3]'"
                :aria-current="isActive('/activities') ? 'page' : undefined">
                Activities
              </RouterLink>
            </li>

            <li>
              <a href="/#Contact"
                class="flex justify-center items-center mx-auto border-[#0E46A3] w-[90%] border-2 px-3 py-1 mt-5 lg:mt-0 text-[#0E46A3] rounded-lg lg:w-full hover:bg-[#0E46A3] hover:text-[#E1F7F5] duration-300">Contact
                Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- END NAVBAR -->
</template>
