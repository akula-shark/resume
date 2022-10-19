---
title: BEM + TailwindCSS
description: The correct way to use BEM with TailwindCSS and PostCSS in Vue or Nuxt.
icon: "/uploads/tailwind.svg"

---
    <script setup>
    const downloadItem = () => {
      console.log("Download Clicked!");
    };
    
    const deleteItem = () => {
      console.log("Delete Clicked!");
    };
    </script>
    
    <template>
      <div>
        <div class="card">
          <div class="card__body">
            <img class="card__image" src="/bloc.png" alt="" />
            <div class="card__title">Flutter Bloc</div>
            <div class="card__subtitle">State management library</div>
            <div class="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              officia nostrum neque magni sint perferendis quis repudiandae alias,
              error suscipit natus maiores, dolorem perspiciatis consequuntur libero
              animi eveniet vitae veritatis!
            </div>
            <div class="card__actions">
              <button @click="downloadItem()" class="card__action-button--green">
                Download
              </button>
              <button @click="deleteItem()" class="card__action-button--red">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <style lang="postcss" scoped>
    .card {
      @apply w-max backdrop-blur-2xl;
    
      &__body {
        @apply p-6;
      }
    
      &__image {
        @apply mb-1 h-14 w-14;
      }
    
      &__title {
        @apply mb-1 truncate text-2xl font-semibold text-stone-100;
      }
    
      &__subtitle {
        @apply mb-3 truncate font-medium text-stone-100/70;
      }
    
      &__description {
        @apply max-w-sm text-stone-100/70;
      }
    
      &__actions {
        @apply flex space-x-2;
      }
    
      &__action-button {
        @apply rounded-lg px-5 py-2 shadow-lg transition hover:translate-y-1 hover:shadow-none;
      }
    
      &__action-button--green {
        @apply card__action-button bg-green-500 text-stone-100 hover:bg-green-400;
      }
    
      &__action-button--red {
        @apply card__action-button bg-red-500 text-stone-100 hover:bg-red-400;
      }
    }
    </style>