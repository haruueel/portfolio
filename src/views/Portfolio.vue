<template>
  <main class="h-screen w-screen !overflow-auto">
    <div
      class="container mx-auto xl:h-full w-full flex flex-col xl:flex-row justify-between gap-3 py-10 overflow-auto"
    >
      <section
        class="module h-full xl:w-1/4 flex flex-col divide-y divide-piece gap-6 overflow-auto"
      >
        <Profile />
        <WorkingExp class="pt-4" />
      </section>
      <section class="xl:h-full xl:flex-1 overflow-hidden">
        <Projects />
      </section>
      <section class="xl:h-full flex flex-col gap-3 xl:w-1/4 overflow-hidden">
        <Skills class="h-full w-full module overflow-auto"></Skills>
        <VisitThisProject class="module h-1/4" />
        <MadeWith class="flex-1" />
      </section>
    </div>
  </main>
</template>

<script setup>
import Profile from "./components/Profile.vue";
import WorkingExp from "./components/WorkingExp.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import MadeWith from "./components/MadeWith.vue";
import VisitThisProject from "./components/VisitThisProject.vue";
</script>
