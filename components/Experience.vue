<script setup>
defineProps({
  title: { type: String, required: true },
  dates: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  list: { type: Array, required: true },
  image: { type: String, required: true },
});
</script>

<template>
  <div class="experience">
    <div class="experience__inner">
      <img class="experience__image" :src="image" alt="" />
      <div class="experience__info-container">
        <div class="experience__name-and-date-container">
          <span class="experience__name">{{ title }}</span>
          <span class="experience__date">{{ dates }}</span>
        </div>
        <p v-if="description" class="mb-6">
          {{ description }}
        </p>
        <ul v-if="list" class="experience__bullets">
          <li v-for="(l, i) in list" :key="i">
            {{ l }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import url("../assets/css/tailwind.css");

.experience {
  @apply card card--padding;

  &__inner {
    @apply flex flex-col md:flex-row;
  }

  &__image {
    @apply z-20 mr-6 mb-4 h-14 w-14 rounded-full object-cover;
  }

  &__info-container {
    @apply flex flex-col;
  }

  &__name-and-date-container {
    @apply flex flex-col;
  }

  &__name {
    @apply text--primary mb-1 text-xl font-medium tracking-wider;
  }

  &__date {
    @apply text--secondary mb-4 text-lg;
  }

  &__bullets {
    @apply text--primary list-inside list-disc space-y-1;
  }
}
</style>
