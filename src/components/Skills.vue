<script setup>
import { ref } from "vue";

const skills = ref([
  { name: 'HTML', level: 85, icon: 'fab fa-html5' },
  { name: 'CSS', level: 80, icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', level: 65, icon: 'fab fa-js-square' },
  { name: 'React', level: 35, icon: 'fab fa-react' },
  { name: 'Vue', level: 60, icon: 'fab fa-vuejs' },
  { name: 'TypeScript', level: 30, icon: 'fab fa-typo3' },
  { name: 'Bootstrap', level: 55, icon: 'fab fa-bootstrap' },
  { name: 'MySQL', level: 40, icon: 'fas fa-database' },
  { name: 'GitHub', level: 55, icon: 'fab fa-github' },
  { name: 'Git', level: 55, icon: 'fab fa-git-alt' },
  { name: 'Node.js', level: 35, icon: 'fab fa-node-js' },
  { name: 'Python', level: 60, icon: 'fab fa-python' },
]);
</script>
<template>
  <section id="skills" class="skills-section py-5">
    <div class="container">
      <h2 class="text-center mb-5">Minhas Habilidades</h2>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="(skill, index) in skills" :key="index">
          <div class="card skill-card text-center">
            <div class="card-body">
              <i :class="skill.icon" class="skill-icon"></i>
              <h5 class="card-title mt-3">{{ skill.name }}</h5>
              <div class="progress mt-3">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: skill.level + '%' }"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ skill.level }}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background: #1c1e21;
  color: #fff;
  padding: 60px 0;
}

.skills-section h2 {
  font-size: 2.5rem;
  color: #18d26e;
}

.skill-card {
  background: #212529;
  border: none;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.3s;
}

.skill-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.skill-icon {
  font-size: 3rem;
  color: #18d26e;
}

.progress {
  height: 10px;
  background-color: #343a40;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar {
  background-color: #18d26e;
  transition: width 0.4s ease-in-out;
}

.card-title {
  color: #fff;
}
</style>
