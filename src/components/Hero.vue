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
      <a href="#portfolio" class="btn btn-primary">Veja Meus Projetos</a>
    </div>
  </section>
</template>

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

a.btn-primary {
  all: unset; /* Remove todos os estilos padrão do navegador */
  background-color: #28a745;
  cursor: pointer;
  text-decoration: none;
  display: inline-block; /* Garantir comportamento como botão */
  color: white;
  padding: 0.5em 1em;
  text-align: center;
  transition: background-color 0.3s ease;
}

a.btn-primary:hover {
  background-color: #218838;
}

a.btn-primary:focus,
a.btn-primary:active,
a.btn-primary:focus-visible {
  background-color: #1e7e34;
  outline: none;
  box-shadow: none;
}

</style>
