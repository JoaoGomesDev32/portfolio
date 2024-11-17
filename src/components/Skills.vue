<!-- Skills Section -->
<script setup>
import { ref } from 'vue';

const skills = ref([
  { name: 'HTML', level: 90, icon: 'fab fa-html5' },
  { name: 'CSS', level: 80, icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', level: 75, icon: 'fab fa-js-square' },
  { name: 'React', level: 70, icon: 'fab fa-react' },
  { name: 'Vue', level: 80, icon: 'fab fa-vuejs' },
  { name: 'TypeScript', level: 60, icon: 'fab fa-typo3' },
  { name: 'Bootstrap', level: 80, icon: 'fab fa-bootstrap' },
  { name: 'MySQL', level: 70, icon: 'fas fa-database' },
  { name: 'GitHub', level: 90, icon: 'fab fa-github' },
  { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
  { name: 'Node.js', level: 75, icon: 'fab fa-node-js' },
  { name: 'Python', level: 65, icon: 'fab fa-python' },
]);
</script>

<template>
  <section id="skills" class="skills-section py-5">
    <div class="container">
      <h2 class="text-center">Habilidades</h2>
      <div class="row">
        <div class="col-md-4" v-for="(skill, index) in skills" :key="index">
          <i :class="skill.icon" style="font-size: 4rem;"></i>
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

.skills-section .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.skills-section .col-md-4 {
    margin-bottom: 30px;
}

.skills-section i {
    font-size: 1.8rem;
}

.skills-section h4 {
    font-size: 1.2rem;
    color: #ddd;
}
</style>

