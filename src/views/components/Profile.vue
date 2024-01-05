<template>
  <article class="w-full flex flex-col items-start gap-3">
    <img :src="pfp" class="h-32 rounded-[200px]" />
    <h1 class="text-white text-2xl leading-none">seven rings</h1>
    <span class="text-detail leading-none">@haruueel</span>

    <div class="flex gap-2 flex-wrap">
      <Tag v-for="el in tags" :name="el"></Tag>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <h2 class="text-white text-xl leading-none">About</h2>
      <p class="text-font">{{ about }}</p>
    </div>
    <div class="flex gap-4">
      <a href="https://github.com/haruueel" target="_blank">
        <Github class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/haruueel/" target="_blank">
        <Linkedin class="icon hover:!fill-blue-500" />
      </a>
      <Popper
        content="haruueel@gmail.com"
        hover="true"
        arrow="true"
        placement="top"
      >
        <Mail class="icon hover:!fill-red-400" />
      </Popper>
    </div>

    <footer class="flex justify-between w-full mt-2">
      <div class="flex gap-2 items-center">
        <Experience class="fill-detail w-3" />
        <span class="leading-none font-poppins text-sm">1 year experience</span>
      </div>
      <div class="flex gap-2 items-center">
        <Projects class="fill-detail w-5" />
        <span class="leading-none font-poppins text-sm">+6 projects</span>
      </div>
    </footer>
  </article>
</template>

<script setup>
import Github from "/src/components/icons/Github.vue";
import Linkedin from "/src/components/icons/Linkedin.vue";
import Mail from "/src/components/icons/Mail.vue";
import Tag from "/src/components/Tag.vue";
import Experience from "/src/components/icons/Experience.vue";
import Projects from "/src/components/icons/Projects.vue";
import Popper from "vue3-popper";

const tags = [
  "Frontend",
  "Backend",
  "Multiplatform dev",
  "Data analyst",
  "Designer",
  "DevOps",
];
const about =
  "I am an appliaction multiplatform fullstack developer driven by an unwavering ambition of becoming an excellent programmer.";
const pfp =
  "https://cdn.discordapp.com/attachments/967185420100194314/1182247238097960970/9df91141f3ba014c66e5306c0e0db9c1.png?ex=6584008a&is=65718b8a&hm=886c3170e84d3090a930da3691c87f7c3566b6418df1c0f8c5e274577e3cb95d&";
</script>
