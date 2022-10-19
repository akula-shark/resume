<script script></script>

<template>
  <div>
    <div class="resume">
      <main class="resume__inner">
        <!-- PAGE HEADER -->
        <page-header
          :title="$t('myResumeTitle')"
          :description="$t('myResumeDescription')"
          :showDownloadButton="true"
        />
        <!-- PAGE HEADER END -->

        <!-- ME SECTION -->
        <section class="me-section">
          <div class="me-section__name-container">
            <img
              class="me-section__profile-picture"
              src="/realme.png"
              alt="My pic"
            />
            <div class="me-section__name-text-container">
              <span class="me-section__name-text">Cody Roach</span>
              <span class="me-section__personal-title">
                {{ $t("personalTitle") }}</span
              >
            </div>
          </div>
          <info />
          <h1 class="me-section__skills-title">
            {{ $t("skillsSectionTitle") }}
          </h1>
          <div class="me-section__skills-grid">
            <skill title="Flutter" image="flutter.svg" />
            <skill title="Dart" image="dart.svg" />
            <skill title="Bloc" image="bloc.png" />
            <skill title="Vue" image="vue.svg" />
            <skill title="Nuxt" image="nuxt.svg" />
            <skill title="Next" image="next.svg" />
            <skill title="Tailwind" image="tailwind.svg" />
            <skill title="Figma" image="figma.svg" />
            <skill title="MacOS" image="finder.svg" />
            <skill title="Linux" image="linux.svg" />
            <skill title="Docker" image="docker.svg" />
            <skill title="Go" image="go.svg" />
            <skill title="Ethereum" image="ethereum.svg" />
            <skill title="Javascript" image="javascript.svg" />
            <skill title="Typescript" image="typescript.svg" />
            <skill title="Mongo" image="mongo.svg" />
            <skill title="Realm" image="realm.svg" />
            <skill title="Cockroach" image="cockroach.png" />
          </div>
        </section>
        <!-- ME SECTION END -->

        <!-- EXPERIENCE SECTION -->
        <section class="experience-section">
          <h1 class="experience-section__title">{{ $t("experience") }}</h1>
          <experience
            image="/topo.png"
            title="Full-stack developer"
            dates="Topography Digital in USA (2017 - Now)"
            :list="[
              'Created complex full-stack web sites & applications using React.js & Nuxt.js ',
              'Created native iOS & Android, Windows, Mac, Linux and Web apps using Flutter',
              'Formulated a long-term online business strategy for clients',
            ]"
            link=""
          />
          <experience
            image="/heu.jpeg"
            title="Full-stack development contractor"
            dates="Heureka in Germany (May 2021 - July 2022)"
            :list="[
              'Created an app for Android based Zebra barcode scanners that allowed warehouse staff to scan and sort packages',
              'Created in-depth documentation on barcode scanning app and trained new devs',
              'Worked directly with warehouse managers and owners to ensure their requirements were precisely met',
              'Created warehouse statics dashboard used by Siemens, BMW, and more to manage their warehouses',
            ]"
          />
          <experience
            image="/jayloto.png"
            title="Full-stack development contractor"
            dates="Jayloto in USA (November 2021 - August 2022)"
            :list="[
              'Created designs from scratch using Figma',
              'Worked with Nuxt.js to create & maintain a web wallet and QR scan system',
              'Worked closely with back-end developers integrating Ethereum smart contracts',
              'Created iOS & Android Crypto & NFT Wallet using Flutter',
            ]"
          />
          <experience
            image="/ukr.png"
            title="Volunteer English Teacher"
            dates="Bucha / Kyiv, Ukraine (October 2020 - December 2021)"
            :list="[
              'Met with English language learners regularly to help them improve their speaking skills.',
            ]"
          />
        </section>
        <!-- EXPERIENCE SECTION END -->

        <!-- EDUCATION SECTION -->
        <section class="education-section">
          <h1 class="education-section__title">{{ $t("education") }}</h1>
          <education
            title="Front-end developer certificate"
            from="Meta (Facebook)"
            image="/meta.png"
          />
          <education
            title="Back-end developer certificate"
            from="Meta (Facebook)"
            image="/meta.png"
          />
          <education
            title="Cyber Security certificate"
            from="IBM"
            image="https://purepng.com/public/uploads/large/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png"
          />
        </section>
        <!-- EDUCATION SECTION END -->

        <!-- ABOUT ME SECTION -->
        <section class="about-me-section">
          <h1 class="about-me-section__title">{{ $t("aboutMe") }}</h1>
          <p class="about-me-section__description">
            I’m a full-stack developer from The United States currently living
            in Greenwood, SC. I have 4+ years of experience making beautiful web
            sites, web applications, native mobiles apps, Progressive web apps
            and REST Apis. I’ve been living abroad in Kyiv, Ukraine and Antalya,
            Turkey but recently returned to the USA. In my free time I’m usually
            fishing, hiking or learning rock climbing.
          </p>
        </section>
        <!-- ABOUT ME SECTION END -->
      </main>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import url("../assets/css/tailwind.css");

.resume {
  @apply page-container;

  &__inner {
    @apply page-flow;
  }
}

.me-section {
  @apply card card--padding card--default-spacing;

  &__name-container {
    @apply flex w-max max-w-3xl;
  }

  &__profile-picture {
    @apply h-16 w-16 rounded-full object-cover shadow-lg;
  }

  &__name-text-container {
    @apply ml-4 flex flex-col justify-center;
  }

  &__name-text {
    @apply text--primary text-2xl font-semibold;
  }

  &__personal-title {
    @apply text--secondary font-semibold capitalize;
  }

  &__skills-title {
    @apply section-title;
  }

  &__skills-grid {
    @apply gap--default grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6;
  }
}

.experience-section {
  @apply card card--padding card--default-spacing;

  &__title {
    @apply section-title;
  }
}

.education-section {
  @apply card card--padding card--default-spacing;

  &__title {
    @apply section-title;
  }
}

.about-me-section {
  @apply card card--padding card--default-spacing;

  &__title {
    @apply section-title;
  }

  &__description {
    @apply text--primary text-lg;
  }
}
</style>
