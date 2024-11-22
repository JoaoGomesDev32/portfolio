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
      const messages = ["Desenvolvedor Web", "FullStack", "Apaixonado por Tecnologia", "Pronto para Inovar"];
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
      <!-- Adicionando os ícones de mídia social -->
      <div class="social-icons">
        <a href="https://github.com/JoaoGomesDev32" target="_blank" class="social-icon">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://wa.me/seunumerodetelefone" target="_blank" class="social-icon">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/seuusuario" target="_blank" class="social-icon">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/joaofelipedev32/" target="_blank" class="social-icon">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
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
  color: #18d26e; /* Verde como destaque */
}

.hero-content h2 {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  height: 40px;
}

.btn-primary {
  background-color: #18d26e;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  color: white;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #218838;
}

/* Remove a cor azul no estado de :focus e :active */
.btn-primary:focus,
.btn-primary:active {
  background-color: #1e7e34;
  outline: none;
  box-shadow: none;
}

/* Estilos para os ícones de mídia social */
.social-icons {
  margin-top: 30px;
}

.social-icon {
  display: inline-block;
  font-size: 2rem;
  margin: 0 10px;
  color: white;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #28a745; /* Verde como o botão */
}

.social-icon i {
  pointer-events: none;
}

</style>
