<script>
import { defineComponent, onMounted, ref } from "vue";
import gsap from "gsap";

export default defineComponent({
  setup() {
    const subtitle = ref(null);

    onMounted(() => {
      // Animação de entrada para o título
      gsap.from(".hero-content h1", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Efeito de digitação no subtítulo
      const messages = ["Desenvolvedor Web", "Apaixonado por Tecnologia", "Pronto para Inovar"];
      let i = 0;

      const typeEffect = () => {
        if (subtitle.value) {
          subtitle.value.textContent = "";
          let j = 0;

          const interval = setInterval(() => {
            subtitle.value.textContent += messages[i][j];
            j++;

            if (j === messages[i].length) {
              clearInterval(interval);
              setTimeout(() => {
                i = (i + 1) % messages.length; // Alterna entre as mensagens
                typeEffect();
              }, 2000); // Pausa entre mensagens
            }
          }, 100); // Velocidade de digitação
        }
      };

      typeEffect();
    });

    return { subtitle };
  },
});
</script>

<template>
  <section class="hero" @mousemove="handleMouseMove">
    <div class="hero-content">
      <h1>Bem-vindo, Eu sou João Silva</h1>
      <h2 ref="subtitle" class="hero-subtitle"></h2>
      <router-link to="/#portfolio" class="btn btn-primary">Veja Meus Projetos</router-link>
    </div>
  </section>
</template>
<!-- <template>
  <header class="hero text-center text-white d-flex align-items-center justify-content-center" @mousemove="handleMouseMove">
    <div class="container position-relative">
      <h1>Olá, Eu Sou João Gomes</h1>
      <p>Desenvolvedor Web</p>
      <router-link to="#portfolio" class="btn btn-primary">Veja Meu Trabalho</router-link>
    </div>
  </header>
</template> -->

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #212529, #1c1e21, #28a745);
  color: white;
  overflow: hidden;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #28a745; /* Verde como destaque */
}

.hero-content h2 {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
}

.btn-primary {
  background-color: #28a745;
  border: none;
  cursor: pointer;
  margin-top: 15px; /* Espaço do botão para o item acima */
  color: white; /* Garante contraste com o fundo */
}

.btn-primary:hover {
  background-color: #218838;
}

/* Remove a cor azul no estado de :focus e :active */
.btn-primary:focus,
.btn-primary:active {
  background-color: #1e7e34; /* Um tom mais escuro de verde para indicar o clique */
  outline: none; /* Remove a borda azul padrão */
  box-shadow: none; /* Remove o efeito de sombra azul no estado de foco */
}

</style>
