<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    image: 'img/projeto1.jpg',
    title: 'Projeto 1',
    description: 'Descrição do projeto.'
  },
  {
    image: 'img/projeto2.jpg',
    title: 'Projeto 2',
    description: 'Descrição do projeto.'
  },
  {
    image: 'img/projeto3.jpg',
    title: 'Projeto 3',
    description: 'Descrição do projeto.'
  },
  // Adicione outros projetos aqui
]);
</script>

<template>
  <!-- Portfolio Section -->
  <section id="portfolio" class="portfolio-section py-5 bg-dark">
    <div class="container">
      <h2 class="text-center">Projetos</h2>
      <div class="row">
        <div class="col-md-4" v-for="(project, index) in projects" :key="index">
          <div class="card">
            <img :src="project.image" class="card-img-top" :alt="project.title">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <a href="#" class="btn btn-primary">Ver mais</a>
              <div class="project-links">
                <a href="#" class="project-link">Github</a>
                <a href="#" class="project-link">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos específicos da seção Portfolio */
.card {
    flex: 1 1 30%;
    margin: 10px;
    background-color: #121212;
    color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.project-links a {
    color: #159e5c;
}

.project-links a:hover {
    color: #28a745;
}

.btn-primary {
    background-color: #159e5c;
    border-color: #159e5c;
}

.btn-primary:hover {
    background-color: #28a745;
    border-color: #28a745;
}
</style>

