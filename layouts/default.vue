<template>
  <div class="min-h-screen pb-12">
    <layout-nav-bar />
    <slot />
    <layout-footer />
  </div>
</template>

<script script></script>

<style lang="postcss">
body {
  @apply bg-stone-800 bg-cover bg-fixed bg-no-repeat;
  background-image: url("/vibration3.jpg");
}
</style>
