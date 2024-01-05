<template>
  <section class="w-full flex gap-3 items-center justify-center">
    <h2 class="text-detail">Made with</h2>
    <div class="flex gap-3">
      <Popper content="Vue3" hover="true" arrow="true" placement="top">
        <Vue class="!fill-detail icon hover:!fill-emerald-400" />
      </Popper>
      <Popper content="Tailwindcss" hover="true" arrow="true" placement="top">
        <Tailwindcss class="!fill-detail icon hover:!fill-blue-400" />
      </Popper>
    </div>
  </section>
</template>

<script setup>
import Vue from "/src/components/icons/Vue.vue";
import Tailwindcss from "/src/components/icons/Tailwindcss.vue";
import Popper from "vue3-popper";
</script>
