<template>
  <div class="normal-container section-1">
    <h1>We Are</h1>
    <p norm>
      team of like-minded people, socially active companies, media
      personalities, volunteers who help low-income shelters and foster carers
      to support homeless animals.
    </p>

    <h1>Our Primary Goal</h1>
    <p>
      is to provide animals with the most necessary things - food, medicine, and
      urgent needs for the livelihood of shelters. We believe in our power and
      the power of conscious citizens who care about the environment and their
      health, who understand the importance of helping each other, especially
      our little friends. Growth begins with your care for your loved ones.
      Animals are one of the closest creatures to humans who remain with us
      throughout our lives. We all know the healing power of warmth, grace, and
      big loving eyes.
    </p>
    <div class="section-1-quote">
      <p>"Animals need to have friends. Just like humans."</p>
      <p>- James Herriot, All Creatures Great and Small</p>
    </div>
    <p>
      Who else if not we should support our younger brothers, especially in
      difficult times? Let's be friends!
    </p>
  </div>
  <div class="section-1-landing-video" ref="normalScroll">
    <VideoPage />
  </div>
</template>

<script setup>
import VideoPage from "./VideoPage.vue";

import { ref } from "vue";
import { useAnimateOnScroll } from "./scrollAnimation";
const normalScroll = ref(null);
const leftScroll = ref(null);

useAnimateOnScroll(normalScroll, {
  y: 250,
  duration: 0.5,
});
</script>
<style scoped></style>
