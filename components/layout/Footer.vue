<script setup></script>

<template>
  <div>
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__title">Looking to hire me?</div>
        <div class="footer__description">
          Send me an email at
          <a href="mailto:cody@akula.shark">cody@akula.shark</a>
          and I'll be sure to get back to you within 48 hours. I'm available for
          remote work in any technology I'm proficient in, but I'm especially
          interested in working with Flutter, Dart, Nuxt, and Go lang.
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
@import url("../../assets/css/tailwind.css");

.footer {
  @apply page-container;

  &__inner {
    @apply card card--padding card--medium-spacing w-full;
  }

  &__title {
    @apply text--primary text-3xl font-medium;
  }

  &__description {
    @apply text--secondary;
  }

  &__description a {
    @apply link;
  }
}
</style>
