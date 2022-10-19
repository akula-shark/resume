<template>
  <div class="page-container">
    <h1 class="mb-2 text-4xl font-bold">Blog</h1>
    <p class="mb-10 text-stone-700 opacity-70">
      These are a collection of code snippets I've used in the past and saved.
      Hopefully they'll help you out some as well. If any were useful be sure to
      leave a message in the guestbook!
    </p>
    <div v-for="i in 12" :key="i" class="mb-24 flex flex-col space-y-6">
      <div class="relative aspect-video">
        <img
          class="absolute z-10 rounded-lg opacity-50 blur-2xl"
          src="https://planetscale.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff1avhira%2Fproduction%2F9cdb8d64bc80038eb03a212e5d459f5ffddee73c-1552x872.jpg&w=3840&q=75"
          alt=""
        />
        <img
          class="absolute z-20 rounded-lg"
          src="https://planetscale.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff1avhira%2Fproduction%2F9cdb8d64bc80038eb03a212e5d459f5ffddee73c-1552x872.jpg&w=3840&q=75"
          alt=""
        />
      </div>
      <p class="text-lg font-medium text-green-600">App development</p>
      <h1 class="text-3xl font-bold">
        Ruby on Rails: 3 tips for deleting data at scale
      </h1>
      <p class="text-stone-700 opacity-70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        consequatur possimus deleniti ipsam corrupti harum adipisci porro,
        cupiditate dolorum pariatur? Modi et deleniti nihil in accusantium
        impedit nemo, libero at.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
