<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row justify-between">
      <span class="text-font">{{ name }}</span>
      <span class="text-font animate-pulse" :class="getTextColor()">{{
        getRatingText()
      }}</span>
    </div>
    <div class="w- full h-2 bg-piece/60 rounded-lg">
      <div
        class="h-full rounded-lg"
        :class="getBgColor()"
        :style="{
          width: rating + '%',
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  rating: Number,
});

function getBgColor() {
  if (props.rating == 100) return "bg-violet-300";

  if (props.rating >= 80) return "bg-teal-300";
  if (props.rating >= 50) return "bg-green-300";
  else return "bg-amber-200";
}

function getTextColor() {
  if (props.rating == 100) return "!text-violet-300";

  if (props.rating >= 80) return "!text-teal-300";
  if (props.rating >= 50) return "!text-green-300";
  else return "!text-amber-200";
}

function getRatingText() {
  if (props.rating == 100) return "Master";
  if (props.rating >= 80) return "Expert";
  if (props.rating >= 50) return "Advanced";
  else return "Intermediate";
}
</script>
