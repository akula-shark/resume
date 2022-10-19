<script setup>
defineProps({
  title: String,
  image: String,
});
</script>

<template>
  <div class="skill">
    <img class="skill__image" :src="image" alt="Skill image" />
    <div class="skill__title">{{ title }}</div>
  </div>
</template>

<style lang="postcss" scoped>
@import url("../assets/css/tailwind.css");

.skill {
  @apply card flex aspect-square flex-col items-center justify-center;

  &__image {
    @apply h-14 w-14 object-contain pb-2 drop-shadow-lg;
  }

  &__title {
    @apply text--secondary mt-1 text-lg;
  }
}
</style>
