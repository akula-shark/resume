<script setup>
const { data: snippets } = await useAsyncData("snippets", () =>
  queryContent("/snippets").find()
);
</script>
<template>
  <div>
    <div class="all-snippets-page">
      <main class="all-snippets-page__inner">
        <!-- PAGE HEADER -->
        <page-header
          :title="$t('snippets')"
          :description="$t('snippetsDescription')"
          :showDownloadButton="false"
        />
        <!-- PAGE HEADER END -->

        <!-- SNIPPETS SECTION -->
        <div class="snippets-section">
          <nuxt-link
            :to="s._path"
            v-for="s in snippets"
            :key="s"
            class="snippets-section__snippet"
          >
            <div class="snippets-section__icon-container">
              <img class="" :src="s.icon" alt="" />
            </div>
            <div class="snippets-section__title">
              {{ s.title }}
            </div>
            <div class="snippets-section__description">{{ s.description }}</div>
          </nuxt-link>
        </div>
        <!-- SNIPPETS SECTION END -->
      </main>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.all-snippets-page {
  @apply page-container;

  &__inner {
    @apply page-flow;
  }

  .snippets-section {
    @apply gap--default grid grid-cols-1 md:grid-cols-2;

    &__snippet {
      @apply card card--padding card--small-spacing hover:card--hover;
    }

    &__icon-container {
      @apply card h-14 w-14 rounded-lg p-2;
    }

    &__title {
      @apply text--primary text-2xl font-semibold;
    }

    &__description {
      @apply text--secondary;
    }
  }
}
</style>
