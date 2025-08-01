<template>
  <div class="normal-container section-3">
    <h1>We Want To Help</h1>
    <p>
      homeless packs, volunteers, guardians, overstayers, shelters and other
      organisations
    </p>
    <div class="section-3-grid-container">
      <div
        v-for="shelter in sheltersName"
        :key="shelter.href"
        class="section-3-card"
      >
        <a :href="shelter.href" target="_blank" rel="noopener noreferrer">
          {{ shelter.name }}
        </a>
      </div>
    </div>
    <div class="toArrow" ref="leftScroll">
      <p>apply for help</p>
      <img
        src="@/assets/images/6273a272fe3407579aa3d6c9_PngItem_344959.png"
        alt="arrow"
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

const sheltersName = [
  {
    name: "Shelter of Victoria Bulbyna",
    href: "https://isa-charity.webflow.io/shelters/shelter-of-victoria-bulbyna",
  },
  {
    name: "City of faithful hearts",
    href: "https://isa-charity.webflow.io/shelters/city-of-faithful-hearts",
  },
  {
    name: "Shelter of Natalia Tymoshenko",
    href: "https://isa-charity.webflow.io/shelters/shelter-of-natalia-tymoshenko",
  },
  {
    name: "Shelter of Jeanne Sass",
    href: "https://isa-charity.webflow.io/shelters/shelter-of-jeanne-sass",
  },
  {
    name: "Shelter of Victoria Bondarenko",
    href: "https://isa-charity.webflow.io/shelters/shelter-of-victoria-bondarenko",
  },
  {
    name: "Sterilization center",
    href: "https://isa-charity.webflow.io/shelters/sterilization-center",
  },
  {
    name: "Zoo chance",
    href: "https://isa-charity.webflow.io/shelters/zoo-chance",
  },
  {
    name: "Save lives",
    href: "https://isa-charity.webflow.io/shelters/save-lives",
  },
  {
    name: "City Center for the Treatment of Animals",
    href: "https://isa-charity.webflow.io/shelters/city-center-for-the-treatment-of-animals",
  },
  {
    name: "Society for the Protection of Animals in Sumy",
    href: "https://isa-charity.webflow.io/shelters/society-for-the-protection-of-animals-in-sumy",
  },
  {
    name: "The right to life",
    href: "https://isa-charity.webflow.io/shelters/the-right-to-life",
  },
  { name: "4 paws", href: "https://isa-charity.webflow.io/shelters/4-paws" },
  {
    name: "The kingdom of cats",
    href: "https://isa-charity.webflow.io/shelters/the-kingdom-of-cats",
  },
  { name: "Zvir", href: "https://isa-charity.webflow.io/shelters/zvir" },
  { name: "Mercy", href: "https://isa-charity.webflow.io/shelters/mercy" },
  {
    name: "Happy dog",
    href: "https://isa-charity.webflow.io/shelters/happy-dog",
  },
  {
    name: "Give me a paw, friend",
    href: "https://isa-charity.webflow.io/shelters/give-me-a-paw,-friend",
  },
  { name: "Friend", href: "https://isa-charity.webflow.io/shelters/friend" },
  { name: "Hope", href: "https://isa-charity.webflow.io/shelters/hope" },
  {
    name: "We are for the right to life",
    href: "https://isa-charity.webflow.io/shelters/we-are-for-the-right-to-life",
  },
  { name: "Planeta", href: "https://isa-charity.webflow.io/shelters/planeta" },
  {
    name: "Second Life",
    href: "https://isa-charity.webflow.io/shelters/second-life",
  },
  {
    name: "Happy shore",
    href: "https://isa-charity.webflow.io/shelters/happy-shore",
  },
  {
    name: "Retrieverteam",
    href: "https://isa-charity.webflow.io/shelters/retrieverteam",
  },
  {
    name: "Shelter of Irina Dobrolyubova",
    href: "https://isa-charity.webflow.io/shelters/shelter-of-irina-dobrolyubova",
  },
  { name: "Matilda", href: "https://isa-charity.webflow.io/shelters/matilda" },
  { name: "Life", href: "https://isa-charity.webflow.io/shelters/life" },
  {
    name: "Second chance",
    href: "https://isa-charity.webflow.io/shelters/second-chance",
  },
  { name: "SOS", href: "https://isa-charity.webflow.io/shelters/sos" },
  {
    name: "Best friends",
    href: "https://isa-charity.webflow.io/shelters/best-friends",
  },
];
</script>
<style scoped></style>
