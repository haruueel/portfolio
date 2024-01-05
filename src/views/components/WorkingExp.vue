<template>
  <section class="h-full w-full flex flex-col gap-3">
    <h2 class="text-white text-xl">Work History</h2>
    <div class="flex flex-col gap-3">
      <div class="box" v-for="el in works">
        <h3 class="text-white">{{ el.position }}</h3>
        <div class="flex w-full justify-between items-center">
          <div class="flex items-center gap-1">
            <Link class="fill-detail w-4" />
            <span class="text-font text-sm truncate">{{ el.name }}</span>
          </div>
          <span class="text-detail font-poppins text-sm">{{ el.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Link from "/src/components/icons/Link.vue";
const works = [
  {
    name: "Zeus Smart Visual Data",
    position: "Fullstack developer",
    date: "March 2023 - Current",
  },
  {
    name: "Elecnor",
    position: "System Administrator",
    date: "March 2021 - June 2021",
  },
];
</script>
