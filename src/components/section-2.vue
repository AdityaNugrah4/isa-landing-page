<template>
  <div class="normal-container section-2">
    <h1>Our Projects</h1>
    <p>
      are very different in terms of priority, scale and complexity of
      implementation
    </p>
    <div>
      <div>
        <div class="section-2-child-1" ref="leftScroll">
          <div class="section-2-child-2">
            <a
              href="https://isa-charity.webflow.io/project/emergency-aid-war-2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Emergency Aid. WAR 2022</h2>
              <p>
                providing food and medicine to the shelters and animals which
                lost their homes and families due to the war
              </p>
            </a>
          </div>
        </div>
        <div class="section-2-child-1" ref="leftScroll">
          <div class="section-2-child-2">
            <a
              href="https://isa-charity.webflow.io/project/non-commercial-feed-line"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Non-commercial feed line</h2>
              <p>
                construction of industrial production base where food for
                shelters will be produced on a free basis
              </p>
            </a>
          </div>
        </div>
        <div class="section-2-child-1" ref="leftScroll">
          <div class="section-2-child-2">
            <a
              href="https://isa-charity.webflow.io/project/education-and-control"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Education and Control</h2>
              <p>
                lectures on communiaction, organisation and coordination of
                processes, control over the use of aid
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAnimateOnScroll } from "./scrollAnimation";
const normalScroll = ref(null);
const leftScroll = ref(null);

useAnimateOnScroll(normalScroll, {
  y: 250,
  duration: 0.5,
});

useAnimateOnScroll(leftScroll, {
  x: -200,
  y: 0,
  duration: 0.5,
});
</script>
<style scoped></style>
