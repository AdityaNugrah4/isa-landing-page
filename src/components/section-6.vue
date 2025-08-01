<template>
  <div class="normal-container section-6">
    <h1>Our Partners</h1>
    <p>are take care of our fund and help us with many questions</p>
    <div class="section-6-grid-container">
      <div v-for="logo in companyLogos" :key="logo.name" class="section-6-card">
        <img
          :src="logo.src"
          :alt="logo.name"
          loading="lazy"
          ref="bottomScroll"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAnimateOnScroll } from "./scrollAnimation";

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

const companyLogos = [
  {
    name: "advires",
    src: require("@/assets/images/62aa3401042d425391235aaa_Logo-adviRES.jpg"),
    alt: "advires",
  },
  {
    name: "ovid-wind",
    src: require("@/assets/images/62aa33e1380de680b7110ebf_ovid-wind-logo.png"),
    alt: "ovid-wind",
  },
  {
    name: "tbs-industry",
    src: require("@/assets/images/6265d803f32677c8352bc485_tbs_logo1-02.png"),
    alt: "tbs-industry",
  },
  {
    name: "accurl",
    src: require("@/assets/images/6265d7edf0c46ce38f559328_download.png"),
    alt: "accurl",
  },
  {
    name: "laudis-accountancy",
    src: require("@/assets/images/6265d7d930a5c2377aedf9d4_logo_laudis_accountancy.png"),
    alt: "laudis-accountancy",
  },
  {
    name: "kickbite",
    src: require("@/assets/images/6265d7c51ad96b1cbf31b0c0_photo_2022-04-21 20.43.09.jpeg"),
    alt: "kickbite",
  },
];
</script>
<style scoped></style>
