<script setup>
import { ref } from "vue";
import 'devicon/devicon.min.css';


const skills = ref([
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "React", icon: "fab fa-react" },
  { name: "Vue", icon: "fab fa-vuejs" },
  { name: "TypeScript", icon: "devicon-typescript-plain" }, // Icone corrigido
  { name: "Bootstrap", icon: "fab fa-bootstrap" },
  { name: "MySQL", icon: "fas fa-database" },
  { name: "GitHub", icon: "fab fa-github" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "Python", icon: "fab fa-python" },
  { name: "SASS/SCSS", icon: "fab fa-sass" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "SQL", icon: "fas fa-database" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "RESTful APIs", icon: "fas fa-network-wired" }, // Ícone representando APIs
  { name: "Command Line/CLI", icon: "fas fa-terminal" },
]);
</script>


<template>
  <section id="skills" class="skills-section py-5">
    <div class="container">
      <h2 class="text-center mb-4">Habilidades</h2>
      <p class="text-center text-white mb-5">
        Tecnologias e ferramentas que trabalho ou j  utilizei.
      </p>
      <div class="skills-grid">
        <div
          class="skill-item"
          v-for="(skill, index) in skills"
          :key="index"
          :title="skill.name"
        >
          <i :class="skill.icon" class="skill-icon"></i>
          <p class="skill-name">{{ skill.name }}</p>
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
  margin-bottom: 20px;
}

.skills-section p {
  font-size: 1rem;
  color: #aaa;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
}

.skill-item {
  text-align: center;
  background: #212529;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px; /* Garante altura uniforme */
  width: 200px; /* Garante largura uniforme */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.skill-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
}

.skill-icon {
  font-size: 2.5rem;
  color: #18d26e;
}

.skill-name {
  margin-top: 10px;
  font-size: 1rem;
  color: #ddd; /* Ajustado para melhor visibilidade */
}
</style>


