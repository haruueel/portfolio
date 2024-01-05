<template>
  <div class="box !px-2 !py-1">
    <span class="text-white text-sm leading-none">{{ name }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
});
</script>
