<template>
  <div class="normal-container section-5">
    <h1>Socially active citizens</h1>
    <p>Support us</p>
    <div class="section-5-grid-container">
      <div
        v-for="citizen in supporter"
        :key="citizen.name"
        class="section-5-card"
      >
        <img :src="citizen.href" :alt="citizen.name" loading="lazy" />
        <div>
          <h3>{{ citizen.name }}</h3>
          <p>{{ citizen.occupation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supporter = [
  {
    name: "Oleksiy Tritenko",
    occupation: "theater and film actor",
    href: require("@/assets/images/628398012a964488bb09078d_13.jpg"),
  },
  {
    name: "Stanislav Boklan",
    occupation: "People's Artist of Ukraine",
    href: require("@/assets/images/628397b3f06d2066cfe8e9a2_14.jpg"),
  },
  {
    name: "Alexander Rudinsky",
    occupation: "theater and film actor",
    href: require("@/assets/images/627fcdfcb2137dcf7db53e7f_12.jpg"),
  },
  {
    name: "Oksana Zhdanova",
    occupation: "theater and film actress",
    href: require("@/assets/images/627fcdd72d729d8ecacf6de7_11.jpg"),
  },
  {
    name: "Natalka Denisenko",
    occupation: "theater and film actress",
    href: require("@/assets/images/627fcdaedc0f8eea17c92429_10.jpg"),
  },
  {
    name: "Maksym Samchyk",
    occupation: "theater and film actor",
    href: require("@/assets/images/62744eae22e10d8a15f909ef_9.jpg"),
  },
  {
    name: "Kateryna Vyshneva",
    occupation: "theater and film actress",
    href: require("@/assets/images/627fcd5ca9508410b3a0d824_08.jpg"),
  },
  {
    name: "Irma Vitovska",
    occupation: "Honored Actress of Ukraine",
    href: require("@/assets/images/627fcd3288758547e6ee0e22_07.jpg"),
  },
  {
    name: "Igor Portyanko",
    occupation: "actor of theater and cinema",
    href: require("@/assets/images/627fcd1790c298c49bc7c436_06.jpg"),
  },
  {
    name: "Dmytro Surzhikov",
    occupation: "Honored Artist of Ukraine",
    href: require("@/assets/images/627fccf0fc672a5dcfa87ee9_05.jpg"),
  },
  {
    name: "Daria Barihashvili",
    occupation: "theater and film actress",
    href: require("@/assets/images/627fccc57c3cb5177369015e_04.jpg"),
  },
  {
    name: "Vera Kobzar",
    occupation: "theater and film actress",
    href: require("@/assets/images/627fcc9bc50d7acc036982a9_03.jpg"),
  },
  {
    name: "Andriy Fedynchyk",
    occupation: "theater and film actor",
    href: require("@/assets/images/627fcc7339e6f5389ed03013_02.jpg"),
  },
  {
    name: "Anastasia Nesterenko",
    occupation: "theater and film actress",
    href: require("@/assets/images/627fcc4b694dfd4d65a13230_01.jpg"),
  },
];
</script>
<style scoped></style>
