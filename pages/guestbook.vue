<script async setup>
const user = useSupabaseUser();
const client = useSupabaseClient();

const message = ref("");

const getMessages = async () => {
  const { data } = await client
    .from("Guestbook")
    .select("*")
    .order("created_at", { ascending: true });
  return data;
};

const login = async (provider) => {
  const { error } = await client.auth.signIn({
    provider: "github",
    redirectTo: "/guestbook",
  });
};

const signGuestbook = async () => {
  try {
    const test = await client.from("Guestbook").insert({
      message: message.value,
      username: user.value.user_metadata.user_name,
      created_at: new Date().toISOString(),
    });
    console.error(test);
    message.value = "";
    refreshNuxtData("guestbook");
  } catch (error) {
    console.error(error);
  }
};

const deleteEntry = async (id) => {
  try {
    await client.from("Guestbook").delete().eq("id", id);
    refreshNuxtData("guestbook");
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  console.log(user);
});

const { data: entries } = await useAsyncData("guestbook", async () => {
  return getMessages();
});
</script>

<template>
  <div>
    <div class="guestbook">
      <main class="guestbook__inner">
        <!-- PAGE HEADER -->
        <page-header
          :title="$t('guestbook')"
          :description="$t('guestbookDescription')"
          :showDownloadButton="false"
        />
        <!-- PAGE HEADER END -->

        <!-- SIGN SECTION -->
        <section class="sign-section">
          <h1 class="sign-section__title">{{ $t("signTheGuestbook") }}</h1>
          <div class="sign-section__description">
            {{ $t("guestbookDescription") }}
          </div>
          <div v-if="user" class="sign-section__input-container">
            <input
              v-model="message"
              :placeholder="$t('yourMessage')"
              class="sign-section__input"
            />
            <button @click="signGuestbook()" class="sign-section__button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 30 30"
              >
                <path
                  d="M 7.4550781 5 C 5.5893548 5 3.9925015 6.3217524 2.8574219 8.140625 C 1.7223422 9.9594976 1 12.372926 1 15 C 1 16.641271 1.3984235 18.293645 2.2050781 19.623047 C 3.0117327 20.952449 4.3408466 22 6 22 C 7.5261905 22 8.51029 20.91933 9.1308594 20.105469 C 9.321849 19.854991 9.4441971 19.691006 9.5878906 19.496094 C 9.6499356 19.736128 9.7067381 19.927265 9.7773438 20.228516 C 9.8982175 20.744244 10.028097 21.296368 10.298828 21.828125 C 10.434194 22.094004 10.608006 22.365025 10.888672 22.597656 C 11.169338 22.830288 11.580846 23 11.992188 23 C 12.809268 23 13.361705 22.489138 13.634766 22.246094 C 13.810089 22.090042 13.822412 22.109041 13.869141 22.087891 C 13.985189 22.269592 14.141573 22.581532 14.339844 22.957031 C 14.551622 23.358112 14.805797 23.816859 15.220703 24.226562 C 15.635609 24.636267 16.276317 24.980469 17.001953 24.980469 A 1.0001 1.0001 0 1 0 17.001953 22.980469 C 16.82909 22.980469 16.775938 22.951779 16.625 22.802734 C 16.474062 22.653689 16.289018 22.367356 16.107422 22.023438 C 15.925825 21.679517 15.752673 21.289989 15.488281 20.902344 C 15.223889 20.514699 14.733939 20 14 20 C 13.177787 20 12.593376 20.496951 12.304688 20.753906 C 12.100789 20.935391 12.110243 20.915005 12.083984 20.927734 C 12.081584 20.923234 12.082478 20.926675 12.080078 20.921875 C 11.968959 20.703673 11.838111 20.255756 11.724609 19.771484 C 11.611108 19.287212 11.510671 18.770303 11.326172 18.275391 C 11.233922 18.027934 11.12566 17.777831 10.90625 17.521484 C 10.68684 17.265138 10.267842 17 9.8164062 17 C 9.0546903 17 8.6486551 17.469687 8.3496094 17.822266 C 8.0505637 18.174845 7.802606 18.551462 7.5410156 18.894531 C 7.017835 19.58067 6.5738095 20 6 20 C 5.1541534 20 4.483111 19.520536 3.9160156 18.585938 C 3.3489202 17.651339 3 16.302729 3 15 C 3 12.746074 3.6430172 10.660096 4.5546875 9.1992188 C 5.4663578 7.7383413 6.5978014 7 7.4550781 7 C 8.6484844 7 9.14357 7.6309355 9.5332031 8.4355469 C 9.9228362 9.2401583 10.003906 10.082031 10.003906 10.082031 A 1.0001 1.0001 0 1 0 11.996094 9.9179688 C 11.996094 9.9179688 11.912854 8.7598417 11.333984 7.5644531 C 10.755117 6.3690645 9.4776718 5 7.4550781 5 z M 26.572266 5.0019531 C 25.692328 5.0473281 24.921516 5.6106875 24.603516 6.5234375 L 24.207031 7.6621094 L 28.521484 8.9921875 L 28.863281 8.0097656 C 29.288281 6.7917656 28.693562 5.5607187 27.476562 5.1367188 C 27.172062 5.0304687 26.865578 4.9868281 26.572266 5.0019531 z M 23.548828 9.5527344 L 19.662109 20.710938 C 19.462109 21.284938 19.437844 21.904187 19.589844 22.492188 L 20.091797 24.433594 C 20.226797 24.954594 20.846391 25.171656 21.275391 24.847656 L 22.873047 23.638672 C 23.358047 23.271672 23.723828 22.769313 23.923828 22.195312 L 27.863281 10.882812 L 23.548828 9.5527344 z"
                ></path>
              </svg>
              <span>{{ $t("sign") }}</span>
            </button>
          </div>
          <button
            v-if="!user"
            @click="login('github')"
            class="sign-section__github-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
              ></path>
            </svg>
            <span>Sign in with GitHub</span>
          </button>
        </section>
        <!-- SIGN SECTION END -->

        <!-- MESSAGES SECTION -->
        <section class="messages-section">
          <div
            v-for="(e, i) in entries"
            :key="i"
            class="messages-section__message-card"
          >
            <p class="messages-section__message">{{ e.message }}</p>
            <div class="messages-section__info-container">
              <span class="messages-section__info">{{ e.username }}</span>
              <span class="messages-section__slash">/</span>
              <span class="messages-section__info">{{ e.created_at }}</span>
              <span
                class="messages-section__slash"
                v-if="user?.user_metadata.user_name === e.username"
                >/</span
              >
              <button
                @click="deleteEntry(e.id)"
                v-if="user?.user_metadata.user_name === e.username"
                class="messages-section__delete"
              >
                {{ $t("delete") }}
              </button>
            </div>
          </div>
        </section>
        <!-- MESSAGES SECTION END -->
      </main>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import url("../assets/css/tailwind.css");

.guestbook {
  @apply page-container;

  &__inner {
    @apply page-flow;
  }
}

.sign-section {
  @apply card card--padding card--medium-spacing;

  &__title {
    @apply text--primary text-3xl font-semibold;
  }

  &__description {
    @apply text--secondary;
  }

  &__input-container {
    @apply flex space-x-4;
  }

  &__input {
    @apply text--primary card hover:card--hover focus:card--hover hover-effect w-full rounded-lg p-3 px-5 placeholder-stone-100/70 outline-none ring-stone-800 transition;
  }

  &__button {
    @apply button button--stone hover:button--hover;
  }
  &__github-button {
    @apply button button--stone hover:button--hover w-full;
  }
}

.messages-section {
  @apply space-y-6;

  &__message-card {
    @apply card card--padding;
  }

  &__message {
    @apply text--primary mb-4;
  }

  &__info-container {
    @apply flex space-x-2;
  }

  &__info {
    @apply text--primary;
  }

  &__slash {
    @apply text--secondary;
  }

  &__delete {
    @apply text-red-600;
  }
}
</style>
