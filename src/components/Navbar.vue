<script setup>
  // Este componente não precisa de lógica adicional
  </script>
  
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="#home">JG Developer</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="#about">Sobre</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#skills">Habilidades</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#portfolio">Portfólio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#contact">Contato</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  /* Estilos específicos do Navbar */
  </style>
  