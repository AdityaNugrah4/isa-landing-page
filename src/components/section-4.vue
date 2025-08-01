<template>
  <div class="normal-container section-4">
    <h1>Our team</h1>
    <p>
      consists of completely different people who are united by a common desire
      - to help
    </p>
    <div class="section-4-grid-container">
      <div v-for="member in teamMember" :key="member.position">
        <div class="section-4-card">
          <img :src="member.href" :alt="member.name" loading="lazy" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMember = [
  {
    name: "Daryna Deriy",
    position: "Chairman of the Board",
    href: require("@/assets/images/62744ee9fce7fbaf400c22f8_2.jpg"),
  },
  {
    name: "Polina Snisarenko-Kulchytska",
    position: "Curator of the Foundation",
    href: require("@/assets/images/62744edaac91b4183ac27e10_5.jpg"),
  },
  {
    name: "Bohdan Kulchytsky",
    position: "Executive Manager",
    href: require("@/assets/images/62744ec97586a996f48f7a85_1.jpg"),
  },
  {
    name: "Mykhaylo Deriy",
    position: "Operation Manager",
    href: require("@/assets/images/62744eae22e10d8a15f909ef_9.jpg"),
  },
  {
    name: "Ksenia Nikishina",
    position: "Office manager",
    href: require("@/assets/images/62744e8e05f6c22bac85252a_7.jpg"),
  },
  {
    name: "Anna Andriychuk",
    position: "SMM-manager",
    href: require("@/assets/images/62744f0eb7cd3462ef475ebf_6.jpg"),
  },
  {
    name: "Anastasia Kovalchuk",
    position: "Director",
    href: require("@/assets/images/62744e6761e425c6956af3a5_3.jpg"),
  },
  {
    name: "Basil Gloo",
    position: "Web Developer",
    href: require("@/assets/images/626ae0bcd92bf48017c14083_basil-square.png"),
  },
  {
    name: "Lina Yakobchuk",
    position: "Designer",
    href: require("@/assets/images/626ae01da2a805d176b1606b_Якобчук.jpg"),
  },
  {
    name: "Anastasia Yevchenko",
    position: "Translator",
    href: require("@/assets/images/627fc796cf3602b53a7512cf_4.jpg"),
  },
  {
    name: "Office Manager",
    position: "open vacancy",
    href: require("@/assets/images/6265332e63b917130ca8d702_isa-logo-dog-clean.svg"),
  },
  {
    name: "SEO specialist",
    position: "open vacancy",
    href: require("@/assets/images/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg"),
  },
];
</script>
<style scoped></style>
