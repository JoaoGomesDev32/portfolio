<script setup>
  // Este componente não precisa de lógica adicional
</script>
  
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">JS Developer</router-link>
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
.navbar-nav .nav-link {
  padding: 0.5rem 1rem;
  position: relative;
}

.navbar-nav .nav-link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  border-bottom: 4px solid #18d26e;
  transition: width .3s;
  position: absolute;
  bottom: 0;
  left: 0;
}

.navbar-nav .nav-link:hover::after {
  width: 100%;
}
  </style>
  