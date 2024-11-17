<script>
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
                <input type="text" id="name" v-model="form.name" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" v-model="form.email" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="message">Mensagem</label>
                <textarea id="message" v-model="form.message" class="form-control" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
            </form>
          </div>
  
          <!-- Ícones de Redes Sociais -->
          <div class="col-lg-6">
            <div class="social-icons">
              <a href="https://github.com/seuusuario" target="_blank" class="social-icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://wa.me/seunumerodetelefone" target="_blank" class="social-icon">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/seuusuario" target="_blank" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/seuusuario" target="_blank" class="social-icon">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      sendMessage() {
        // Aqui você pode implementar a lógica para enviar o formulário
        console.log("Formulário enviado:", this.form);
        alert('Mensagem enviada!');
      }
    }
  };
  </script>
  

<style scoped>
.contact {
  padding: 60px 0;
  background: #121212;
}

.contact .section-title {
  text-align: center;
  margin-bottom: 40px;
}

.contact .section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #28a745; /* Cor verde */
}

.contact .section-title p {
  font-size: 1.1rem;
  color: white;
}

.contact form {
  background: #212529;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact form .form-group {
  margin-bottom: 20px;
}

.contact form label {
  font-size: 1rem;
  color: white;
}

.contact form input,
.contact form textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #9b9d9e;
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
}

.contact form button:hover {
  background-color: #218838;
}

/* Ícones de Redes Sociais */
.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.social-icons .social-icon {
  font-size: 2rem;
  margin: 0 10px;
  color: #ddd;
  transition: color 0.3s ease;
}

.social-icons .social-icon:hover {
  color: #28a745;
}

.social-icons .social-icon i {
  pointer-events: none;
}


</style>
