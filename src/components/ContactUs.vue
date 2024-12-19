<template>
  <!-- CONTACT US -->
  <section
    class="max-w-screen-xl my-14 mx-auto flex flex-col relative"
    id="Contact"
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <h2 class="text-[#1E0342] font-semibold text-[2rem] md:text-[3rem] text-center relative">
      Contact Us
    </h2>
    <div class="flex md:mt-20">
      <div class="flex-1 flex-col">
        <div class="flex flex-col sm:flex-row py-10">
          <img
            src="../assets/icons/Whatsapp.png"
            class="ms-3 p-2 mb-2 sm:mb-0 sm:ms-4 w-24"
            alt=""
          />
          <div class="mx-5">
            <h3 class="text-[#1E0342] font-semibold text-xl lg:text-2xl">WHATSAPP</h3>
            <a :href="contact" class="text-[#1f162b] font-normal">+{{ whatsapp.numberPrimary }}</a>
            <br />
            <a
              :href="`https://wa.me/` + whatsapp.numberSecondary"
              v-if="whatsapp.numberSecondary"
              class="text-[#1f162b] font-normal"
              >+{{ whatsapp.numberSecondary }}</a
            >
          </div>
        </div>
        <div class="flex flex-col sm:flex-row py-10">
          <img
            src="../assets/icons/Gmail_icon_(2020).svg.png"
            class="ms-3 p-2 mb-2 sm:mb-0 sm:ms-4 w-24"
            alt=""
          />
          <div class="mx-5">
            <h3 class="text-[#1E0342] font-semibold text-xl lg:text-2xl">Email</h3>
            <a :href="`mailto: ` + email.primaryGmail" class="text-[#1E0342] font-normal">{{
              email.primaryGmail
            }}</a>
            <br />
            <a :href="`mailto: ` + email.secondaryGmail" class="text-[#1E0342] font-normal">{{
              email.secondaryGmail
            }}</a>
          </div>
        </div>
      </div>
      <div class="flex-1 justify-end items-end flex-col hidden md:flex">
        <img src="../assets/ContactUs.png" class="mt-20 md:mt-0" alt="" />
      </div>
    </div>
  </section>
  <!-- END CONTACT US -->
</template>
<script setup>
import { whatsapp, email, contact } from '@/config/contact'
</script>
