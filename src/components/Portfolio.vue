<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    image: 'messages-generator.png',
    title: 'Projeto 1',
    description: 'Descrição do projeto.',
    github: 'https://github.com/JoaoGomesDev32/gerador-mensagens/tree/main',
    demo: '#'
  },
  {
    image: 'projeto2.jpg',
    title: 'Projeto 2',
    description: 'Descrição do projeto.',
    github: '#',
    demo: '#'
  },
  {
    image: 'projeto3.jpg',
    title: 'Projeto 3',
    description: 'Descrição do projeto.',
    github: '#',
    demo: '#'
  },
]);
</script>

<template>
  <section id="portfolio" class="portfolio-section py-5 bg-dark text-white">
    <div class="container">
      <div class="section-title text-center mb-5">
        <h2 class="text-uppercase">Projetos</h2>
        <p>Veja alguns dos meus trabalhos recentes.</p>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="(project, index) in projects" :key="index">
          <div class="portfolio-item position-relative overflow-hidden">
            <img :src="`src/assets/img/${project.image}`" class="img-fluid w-100" :alt="project.title">
            <div class="portfolio-overlay d-flex align-items-center justify-content-center">
              <div class="text-center">
                <h5 class="text-white">{{ project.title }}</h5>
                <div class="mt-2">
                  <a :href="project.github" class="btn btn-sm btn-outline-light me-2" target="_blank">Github</a>
                  <a :href="project.demo" class="btn btn-sm btn-primary" target="_blank">Demo</a>
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
.portfolio-section {
  background-color: #1c1e21;
}

.section-title h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #28a745;
}

.portfolio-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.portfolio-item img {
  transition: transform 0.5s ease;
}

.portfolio-item:hover img {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-overlay .btn-outline-light {
  border-color: #28a745;
}

.portfolio-overlay .btn-outline-light:hover {
  background-color: #28a745;
  border-color: #28a745;
}

.portfolio-overlay .btn-primary {
  background-color: #159e5c;
  border-color: #159e5c;
}

.portfolio-overlay .btn-primary:hover {
  background-color: #28a745;
  border-color: #28a745;
}
</style>
