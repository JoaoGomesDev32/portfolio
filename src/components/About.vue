<script setup>
// Este componente não precisa de lógica adicional
</script>

<template>
  <section id="about" class="about-section py-5 bg-dark">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2>Sobre Mim</h2>
          <p>
            Olá! Meu nome é João Gomes, tenho 35 anos, sou brasileiro,
            atualmente morando em Lisboa, Portugal. Sou graduado em Análise e
            Desenvolvimento de Sistemas pela faculdade Estácio, e também conclui
            o curso de formação profissional de Engenheiro Fullstack da
            Codecademy recentemente.
          </p>
          <p>
            Entre outubro de 2024 e setembro de 2025, tive minha primeira
            experiência profissional na área de tecnologia como desenvolvedor
            frontend na Magnisoft. Durante esse período, contribuí no
            desenvolvimento de um software de faturação web utilizando Vue.js e
            TypeScript, onde pude aplicar e expandir meus conhecimentos em
            desenvolvimento web moderno.
          </p>
          <p>
            Essa experiência me proporcionou um crescimento significativo,
            permitindo-me trabalhar com tecnologias atuais e boas práticas de
            desenvolvimento em um ambiente profissional. Agora, busco novos
            desafios onde possa continuar aplicando e expandindo minhas
            habilidades técnicas.
          </p>
        </div>
        <div class="col-md-6 text-center">
          <img
            src="@/assets/img/my-img.jpeg"
            alt="Minha Foto"
            class="img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos específicos da seção About */
.about h2 {
  color: #159e5c;
}
.about-section img {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  object-position: center top;
}
</style>
