<template>
  <div class="normal-container footer">
    <div>
      <h1>Contact us</h1>
      <p>Kyiv, Ukraine</p>
      <div class="email"><a href="#">mail@isa.co.ua</a></div>
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
    <div ref="bottomScroll">
      <img
        src="../assets/images/62647f9fbe07235ba9b28d67_star-white-with-animals.svg"
        alt="star-white-animals"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAnimateOnScroll } from "./scrollAnimation";
const bottomScroll = ref(null);
const leftScroll = ref(null);

useAnimateOnScroll(bottomScroll, {
  x: 0,
  y: 250,
  duration: 0.5,
});

useAnimateOnScroll(leftScroll, {
  x: -200,
  y: 0,
  duration: 0.5,
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
</script>
<style scoped></style>
