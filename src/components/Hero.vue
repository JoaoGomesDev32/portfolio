<script setup>
import { onMounted } from 'vue';
import particlesJS from 'particles.js';

onMounted(() => {
  particlesJS.load('particles-js', 'particles-config.json');
});
</script>

<template>
    <header class="hero-section text-center text-white d-flex align-items-center justify-content-center">
      <div id="particles-js" class="w-100 h-100 position-absolute"></div>
      <div class="container position-relative">
        <h1>Olá, Eu Sou João Gomes</h1>
        <p>Desenvolvedor Web</p>
        <router-link to="#portfolio" class="btn btn-primary">Veja Meu Trabalho</router-link>
      </div>
    </header>
</template>
  
  <style scoped>
  /* Estilos específicos da seção Hero */
  .hero-section {
    min-height: 100vh;
    background-color: #333;
  }
  </style>
  