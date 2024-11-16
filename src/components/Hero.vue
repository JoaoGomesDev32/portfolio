<script setup>
import { defineComponent, ref } from "vue";
import { loadFull } from "tsparticles";
import { tsParticles } from 'tsparticles-engine';

const particlesInit = async (engine) => {
  // Carregar os presets da biblioteca
  await loadFull(engine);
};

const particlesOptions = ref({
  fullScreen: { enable: false },
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: "none", random: false, straight: false },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
</script>

<template>
  <header class="hero-section text-center text-white d-flex align-items-center justify-content-center">
    <div id="tsparticles"></div> <!-- Div para o fundo das partículas -->
    <div class="container position-relative">
      <h1>Olá, Eu Sou João Gomes</h1>
      <p>Desenvolvedor Web</p>
      <router-link to="#portfolio" class="btn btn-primary">Veja Meu Trabalho</router-link>
    </div>
  </header>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #121212;
}

#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0; /* Fica atrás do conteúdo */
}

.container {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
}
h1, p {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #28a745;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #218838;
}
</style>
