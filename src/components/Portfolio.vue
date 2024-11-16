<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    image: 'img/projeto1.jpg',
    title: 'Projeto 1',
    description: 'Descrição do projeto.'
  },
  // Adicione outros projetos aqui
]);
</script>

<template>
  <!-- Portfolio Section -->
  <section id="portfolio" class="portfolio-section py-5">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos específicos da seção Portfolio */
</style>

