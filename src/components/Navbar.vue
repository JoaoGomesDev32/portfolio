<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">JS Developer</router-link>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        aria-controls="navbarNav"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: isMenuOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Habilidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfólio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Estilos específicos do Navbar */
.collapse {
  display: none;
  transition: all 0.3s ease-in-out;
}

.collapse.show {
  display: block;
}

.navbar {
  transition: background-color 0.3s ease-in-out;
}

/* Links do Navbar */
.navbar-nav .nav-link {
  padding: 0.5rem 1rem;
  position: relative;
  font-size: 1rem;
}

.navbar-nav .nav-link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  border-bottom: 4px solid #18d26e;
  transition: width 0.3s;
  position: absolute;
  bottom: 0;
  left: 0;
}

.navbar-nav .nav-link:hover::after {
  width: 100%;
}

/* Estilos para dispositivos pequenos */
@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
  }

  .navbar-nav .nav-item {
    margin-bottom: 0.5rem;
  }

  .navbar-nav .nav-link {
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
  }
}

/* Estilo do botão de navegação ao expandir */
.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-toggler:focus {
  box-shadow: none;
}
</style>
