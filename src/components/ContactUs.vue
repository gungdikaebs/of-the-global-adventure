<template>
  <!-- CONTACT US -->
  <section class="max-w-screen-xl my-14 mx-auto flex flex-col relative" id="Contact" data-aos="fade-up"
    data-aos-duration="1500">
    <h2 class="text-[#1E0342] font-semibold text-[2rem] md:text-[3rem] text-center relative">
      Contact Us
    </h2>
    <div class="flex md:mt-20">
      <div class="flex-1 flex-col p-8">
        <div class="flex py-10">
          <div class="border rounded-[10rem] border-[#1E0342] p-3 min-w-[5rem] min-h-[5rem] w-14 flex">
            <img src="../assets/icons/Whatsapp.png" class="m-auto p-2 scale-150 md:scale-125" alt="" />
          </div>
          <div class="mx-5">
            <h3 class="text-[#1E0342] font-semibold text-xl lg:text-2xl">WHATSAPP</h3>
            <a :href="contact" class="text-[#1f162b] font-normal">+{{ whatsapp.numberPrimary }}</a>
            <br />
            <a :href="`https://wa.me/` + whatsapp.numberSecondary" class="text-[#1f162b] font-normal">+{{
              whatsapp.numberSecondary }}</a>
          </div>
        </div>
        <div class="flex py-10">
          <div class="border rounded-[10rem] border-[#1E0342] p-3 min-w-[5rem] min-h-[5rem] w-14">
            <img src="../assets/icons/Gmail.png" class="p-2" alt="" />
          </div>
          <div class="mx-5">
            <h3 class="text-[#1E0342] font-semibold text-xl lg:text-2xl">Email</h3>
            <a :href="`mailto: ` + email.primaryGmail" class="text-[#1E0342] font-normal">{{
              email.primaryGmail
            }}</a>
            <br>
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
