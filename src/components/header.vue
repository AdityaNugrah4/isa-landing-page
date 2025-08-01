<template>
  <div class="header">
    <div class="donate-btn">Donate</div>
    <div class="donate-btn-bg">
      <div>Donate</div>
    </div>
    <a
      href="https://webflow.com/?utm_campaign=brandjs"
      target="_blank"
      rel="noopener noreferrer"
      class="webflow-badge"
    >
      <img
        src="@/assets/images/webflow-badge-icon-d2.89e12c322e.svg"
        alt="webflow-badge-icon"
      />
      <img
        src="@/assets/images/webflow-badge-text-d2.c82cec3b78.svg"
        alt="webflow-badge-text"
      />
    </a>
    <div class="header-parent-div">
      <div class="header-second-div">
        <transition name="fade" mode="out-in">
          <img
            :key="currentImageSrc"
            :src="currentImageSrc"
            alt="animal-logo"
            class="image-switcher"
            ref="aboveScroll"
          />
        </transition>
        <div class="header-title" ref="rightScroll">
          <h1>Innovative</h1>
          <h1>Solutions</h1>
          <h1>for</h1>
          <h1>Animals</h1>
        </div>
      </div>
      <div class="header-div-social" ref="bottomScroll">
        <p>charity organization</p>
        <div>
          <a
            v-for="account in socialMedia"
            :key="account.name"
            :href="account.href"
          >
            <img
              :src="account.src"
              :alt="account.name"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useAnimateOnScroll } from "./scrollAnimation";

const images = [
  require("@/assets/images/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg"),
  require("@/assets/images/6265332e63b917130ca8d702_isa-logo-dog-clean.svg"),
];

const currentIndex = ref(0);

const currentImageSrc = computed(() => {
  return images[currentIndex.value];
});

let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const socialMedia = [
  {
    name: "youtube",
    href: "https://m.youtube.com/channel/UCflad3HMzVzumevfDEqJFFQ/featured",
    src: require("@/assets/images/6274433d06989d76edcff015_9055867_youtube_bxl.svg"),
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/isa.official.ua/",
    src: require("@/assets/images/6274449bf840c377311f2e08_9055851_instagram_bxl.svg"),
  },
  {
    name: "facebook",
    href: "https://m.facebook.com/isa.co.ua/",
    src: require("@/assets/images/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg"),
  },
  {
    name: "patreon",
    href: "https://www.patreon.com/isa_co_ua",
    src: require("@/assets/images/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg"),
  },
  {
    name: "telegram",
    href: "https://t.me/isa_co_ua",
    src: require("@/assets/images/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg"),
  },
];
const bottomScroll = ref(null);
const leftScroll = ref(null);
const rightScroll = ref(null);
const aboveScroll = ref(null);

useAnimateOnScroll(rightScroll, {
  x: 200,
  y: 0,
  duration: 0.5,
});

useAnimateOnScroll(bottomScroll, {
  x: 0,
  y: 250,
  duration: 0.5,
});

useAnimateOnScroll(aboveScroll, {
  x: 0,
  y: -250,
  duration: 0.5,
});

useAnimateOnScroll(leftScroll, {
  x: -200,
  y: 0,
  duration: 0.5,
});
</script>

<style scoped>
.image-switcher {
  display: grid;
  place-items: center;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
