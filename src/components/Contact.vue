<script setup>
import { reactive } from "vue";
import emailjs from "emailjs-com";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const sendMessage = () => {
  const serviceId = "service_jk1bhf4";
  const templateId = "template_m03uzpw";
  const userId = "seu_user_id";

  const templateParams = {
    name: form.name,
    email: form.email,
    message: form.message,
  };

  emailjs
    .send(serviceId, templateId, templateParams, userId)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.name = "";
      form.email = "";
      form.message = "";
    })
    .catch((error) => {
      alert("Erro ao enviar a mensagem. Tente novamente.");
      console.error(error);
    });
};
</script>


<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>Contato</h2>
        <p>Entre em contato comigo para discutir projetos ou colaborações.</p>
      </div>

      <div class="row">
        <!-- Formulário de Contato -->
        <div class="col-lg-6">
          <form @submit.prevent="sendMessage">
            <div class="form-group">
              <label for="name">Nome</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">E-mail</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Mensagem</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-control"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
          </form>
        </div>

        <!-- Ícones de Redes Sociais -->
        <div class="col-lg-6">
          <div class="social-icons">
            <a
              href="https://github.com/JoaoGomesDev32"
              target="_blank"
              class="social-icon"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://wa.me/seunumerodetelefone"
              target="_blank"
              class="social-icon"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/seuusuario"
              target="_blank"
              class="social-icon"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/joaofelipedev32/"
              target="_blank"
              class="social-icon"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 60px 0;
  background: #1c1e21; /* Fundo escuro */
}

.contact .section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #28a745; /* Cor verde */
}

.contact .section-title p {
  font-size: 1.1rem;
  color: #ddd; /* Cor cinza clara */
}

.contact form {
  background: #292b2f; /* Fundo um pouco mais claro */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.contact form .form-group label {
  font-size: 1rem;
  color: #eee; /* Texto claro */
}

.contact form input,
.contact form textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  background: #1c1e21; /* Fundo escuro */
  color: #ddd; /* Texto cinza claro */
  border: 1px solid #555; /* Borda cinza escura */
}

.contact form input:focus,
.contact form textarea:focus {
  border-color: #28a745; /* Destaque na borda */
  outline: none;
}

.contact form button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.contact form button:hover {
  background-color: #218838;
}
/* Ícones de Redes Sociais */
.social-icons .social-icon {
  font-size: 2rem;
  margin: 0 10px;
  color: #ddd;
  transition: color 0.3s ease;
}

.social-icons .social-icon:hover {
  color: #28a745;
}
</style>
