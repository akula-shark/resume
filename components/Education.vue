<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  from: { type: String, required: true },
  image: { type: String, required: true },
});
</script>

<template>
  <div class="education">
    <div class="education__image-container">
      <img class="education__image" :src="image" alt="" />
    </div>
    <div>
      <div class="education__title">{{ title }}</div>
      <div class="education__from">{{ from }}</div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import url("../assets/css/tailwind.css");

.education {
  @apply card card--padding card--small-spacing card--default-spacing md:flex md:flex-row md:items-center;

  &__image-container {
    @apply mr-6 h-14 w-14 rounded-full bg-white;
  }

  &__image {
    @apply mr-auto h-14 w-14 rounded-full object-contain;
  }

  &__title {
    @apply text--primary mb-1 text-lg font-medium tracking-wider;
  }

  &__from {
    @apply text--secondary text-lg;
  }
}
</style>
