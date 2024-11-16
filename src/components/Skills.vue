<!-- Skills Section -->
<script setup>
import { ref } from 'vue';

const skills = ref([
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 75 },
  // Add more skills here
]);
</script>

<template>
  <section id="skills" class="skills-section py-5">
    <div class="container">
      <h2 class="text-center">Habilidades</h2>
      <div class="row">
        <div class="col-md-4" v-for="(skill, index) in skills" :key="index">
          <h4>{{ skill.name }}</h4>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              :style="{ width: skill.level + '%' }"
            >
              {{ skill.level }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any specific styles for the skills section here */
.skills-section {
  background-color: #121212;
}
.skills-section .progress {
    height: 20px;
    margin-bottom: 15px;
    color: #159e5c;
}

.progress-bar {
    background-color: #159e5c;
}
</style>
