<script setup lang="ts"></script>

<template>
  <div>
    <div class="info-section">
      <div class="info-section__inner">
        <div class="info-section__grid">
          <div class="info-item">
            <span class="info-item__title">{{ $t("location") }}</span>
            <div class="info-item__info-container">
              <span class="info-item__info">South Carolina, USA</span>
            </div>
          </div>
          <div class="info-item">
            <span class="info-item__title">{{ $t("website") }}</span>
            <div class="info-item__info-container">
              <a class="info-item__info link" href="https://topography.digital"
                >topography.digital</a
              >
            </div>
          </div>
          <div class="info-item">
            <span class="info-item__title">{{ $t("email") }}</span>
            <div class="info-item__info-container">
              <a class="info-item__info link" href="mailto:cody@akula.shark"
                >cody@akula.shark</a
              >
            </div>
          </div>
          <div class="info-item">
            <span class="info-item__title">GitHub</span>
            <div class="info-item__info-container">
              <a
                class="info-item__info link"
                href="https://github.com/akula-shark"
                >akula-shark</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import url("../assets/css/tailwind.css");
.info-section {
  &__grid {
    @apply gap--default grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4;
  }
}
.info-item {
  @apply card flex flex-col space-y-4 p-4;

  &__title {
    @apply text--secondary;
  }
  &__info-container {
    @apply flex items-center space-x-2;
  }
  &__info {
    @apply text--primary text-base;
  }
  &__icon {
    @apply text--primary h-4 w-4 fill-current;
  }
}
</style>
