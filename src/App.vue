<script setup>
// Importação dos componentes
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const scrollTopBtn = ref(null);


const handleScroll = () => {
  const element = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    element.style.display = "block";
  } else {
    element.style.display = "none"; // Ocultar o botão no topo da tela
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div id="app">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer>
      <router-view />
      <button id="scrollTopBtn" @click="scrollToTop" title="Voltar ao topo">↑</button>
    </Footer>
  </div>
</template>


<style>
#scrollTopBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #18d26e;
  color: #ffffff;
  border: none;
  padding: 10px;
  font-size: 18px;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;
  height: 50px;
  width: 50px;
}

#scrollTopBtn:hover {
  background-color: #159e5c;
}
</style>
