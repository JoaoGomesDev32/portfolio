<script setup>
import { ref, onMounted } from 'vue';
import messagesGeneratorImg from '@/assets/img/messages-generator.jpeg';
import screenGameImg from '@/assets/img/screen-game.jpeg';
import xtrememoviesImg from '@/assets/img/xtrememovies.jpeg';
import todolistImg from '@/assets/img/todolist.png';
import jsmusicImg from '@/assets/img/jsmusic.png';

const projects = ref([
  {
    image: xtrememoviesImg,
    title: 'Xtreme Filmes',
    description: 'Xtreme Filmes é um site responsivo que oferece uma vasta coleção de filmes e séries online gratuitos.',
    github: 'https://github.com/JoaoGomesDev32/xtreme-filmes',
    demo: 'https://xtremefilmes.netlify.app/'
  },
  {
    image: jsmusicImg,
    title: 'JS Music',
    description: 'Uma aplicação web para pesquisar músicas no Deezer, criar playlists personalizadas e salvá-las localmente. Desenvolvido com React, TypeScript, Node.js e Deezer API, com foco em design responsivo e experiência de usuário fluida.',
    github: 'https://github.com/JoaoGomesDev32/js-music',
    demo: 'https://jsxmusic.netlify.app/'
  },
  {
    image: todolistImg,
    title: 'ToDo List',
    description: 'Uma aplicação de lista de tarefas simples e intuitiva, desenvolvida com Vue.js. Permite adicionar, editar e remover tarefas, além de marcar como concluídas. Ideal para organizar suas atividades diárias.',
    github: 'https://github.com/JoaoGomesDev32/todo-list',
    demo: '#'
  },
  {
    image: screenGameImg,
    title: 'Flappy Bird',
    description: 'Um jogo simples e divertido inspirado no famoso Flappy Bird, desenvolvido com JavaScript, HTML5 e CSS3.',
    github: 'https://github.com/JoaoGomesDev32/flappyBird',
    demo: 'https://voapassarinhovoa.netlify.app/'
  },
  {
    image: messagesGeneratorImg,
    title: 'Gerador de Mensagens',
    description: 'Um aplicativo simples e elegante para gerar mensagens motivacionais, dicas inspiradoras e complementos encorajadores. Desenvolvido com Vue 3 e Vuetify, este projeto é otimizado para dispositivos móveis e permite até mesmo o compartilhamento direto das mensagens geradas.',
    github: 'https://github.com/JoaoGomesDev32/gerador-mensagens/tree/main',
    demo: '#'
  }
]);

onMounted(() => {
  projects.value.forEach(project => {
    const img = new Image();
    img.src = project.image;
  });
});
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
            <img :src="project.image" :alt="project.title" class="img-fluid w-100 h-100" />
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
  height: 300px; /* Altura fixa */
  background: #212529; /* Cor de fundo */
}

.portfolio-item img {
  transition: transform 0.5s ease;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cobre todo o espaço do card */
  object-position: center;
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



