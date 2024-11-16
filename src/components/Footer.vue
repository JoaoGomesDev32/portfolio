<!-- Footer Section -->
<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <footer class="footer text-center py-3 bg-dark">
    <div class="container">
      <p>Feito com 💻 e ☕ por João Gomes. &copy; 2024</p>
    </div>
    <div>
      <button style="display: block;" @click="scrollToTop" id="scrollTopBtn" title="Voltar ao topo">↑</button>
    </div>
  </footer>
</template>

<style scoped>
/* Add any specific styles for the footer here */
</style>
