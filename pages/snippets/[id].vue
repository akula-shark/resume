<script setup>
var route = useRoute();

const { data: snippet } = await useAsyncData(`content-${route.path}`, () => {
  return queryContent().where({ _path: route.path }).findOne();
});
</script>

<template>
  <div>
    <div class="snppets-page">
      <main class="snippet-page__inner">
        <div class="snippet__icon">
          <img :src="snippet.icon" alt="snippet-icon" />
        </div>
        <page-header
          :title="snippet.title"
          :description="snippet.description"
          :showDownloadButton="false"
        />
        <div class="snippet">
          <ContentRenderer :value="snippet" />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.snippet-page {
  @apply page-container;

  &__inner {
    @apply page-flow;
  }
}

.snippet {
  @apply card card--padding text--primary w-full overflow-scroll;
  &__icon {
    @apply card h-20 w-20 p-4;
  }
}
</style>
