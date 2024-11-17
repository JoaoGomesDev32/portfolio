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
            Olá! Meu nome é João Gomes, tenho 34 anos e sou brasileiro,
            atualmente morando em Lisboa, Portugal. Sou estudante de Análise e
            Desenvolvimento de Sistemas na faculdade Estácio, onde estou
            cursando o último período através do EAD. Além disso, estou
            investindo na minha formação profissional com o curso de Engenheiro
            Fullstack na Codecademy.
          </p>
          <p>
            Em outubro de 2024, tive a alegria de conseguir minha primeira
            oportunidade de emprego na área de tecnologia como programador de
            software web frontend. Nesse cargo, estou ganhando uma experiência
            valiosa e aplicando meu conhecimento no desenvolvimento de um
            aplicativo de faturação web utilizando Vue e TypeScript.
          </p>
          <p>
            Minha jornada tem sido uma mistura de aprendizado constante e novas
            descobertas. Cada dia é uma chance de crescer e aprimorar minhas
            habilidades para oferecer soluções eficazes e de qualidade.
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
.about-section img {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  object-position: center top;
}
</style>
  