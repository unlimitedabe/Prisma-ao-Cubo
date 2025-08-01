<template>
  <footer class="footer">
    <!-- Primeira faixa: 168px de altura, #4E55A2 -->
    <div class="footer-top">
      <div class="footer-top-container">
        
        <!-- Bloco Esquerdo -->
        <div class="footer-contact">
          <span class="footer-title">CONTATOS</span>
        </div>

        <!-- Bloco Central -->
        <div class="footer-social">
          <span class="footer-subtitle">Social media</span>
          <!-- Instagram -->
          <div class="footer-line-icon">
            <i class="bi bi-instagram icon"></i>
            <span>@prismaocubo</span>
          </div>
          <!-- Gmail -->
          <div class="footer-line-icon">
            <!-- <i class="bi bi-google icon-gmail"></i> --> <!-- icone google -->
            <i class="bi bi-envelope-fill icon-gmail"></i> <!-- icone email -->
            <span>prismaocubo@gmail.com</span>
          </div>
        </div>

        <!-- Bloco Direito -->
        <div class="footer-hours">
          <span class="footer-subtitle">Atendimento</span>
          <span class="footer-line">Segunda - Sexta</span>
          <span class="footer-line">9h às 18h</span>
        </div>
      </div>
    </div>


    <!-- Segunda faixa: 143px de altura, #2B2E69 -->
    <div class="footer-bottom">
      <div class="container">
        <p class="footer-text">
          © 2025 Prisma ao Cubo. Todos os direitos reservados.<br>
          Cookies e privacidade
        </p>
        <img
          class="logo"
          src="/src/assets/logo_prismaocubo3_RGB_P&Bneeg.png"
          alt="Logo Prisma ao Cubo"
        />
      </div>
    </div>
  </footer>
</template>

<script setup>
// Lógica adicional, se necessário
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  left: 0;
  width: 98.9vw;
  z-index: 1000;
  align-items: center;
}

/* Primeira Faixa */

.footer-top {
  width: 100%;
  height: 168px;
  background-color: #4E55A2;
  display: flex;
  align-items: center;
}

.footer-top-container {
  width: 90%;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px; /* 40px nas laterais */
}

.footer-contact{
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 8px; /* Distância até a margem esquerda */
}

.footer-social{
  display: flex;
  flex-direction: column;
  color: white;
}

.footer-hours {
  display: flex;
  flex-direction: column;
  color: white;
  margin-right: 8px; /* Distância até a margem direita */
}

.footer-title {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 30px;
}

.footer-subtitle {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 4px;
}

.footer-line {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
} 
/*
.icon {
  font-size: 17px;
  vertical-align: middle;
  margin-right: 8px; /* espaço entre ícone e texto 
} */
.footer-line-icon {
  display: flex;
  align-items: center; /* centraliza o ícone com o texto */
  gap: 7px;             /* espaço entre ícone e texto */
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin-top: 0px;
}

.icon {
  width: 25px;
  height: 28px;
  font-size: 25px; /* isso define o tamanho do ícone */
  flex-shrink: 0;   /* evita que ele encolha em telas pequenas */
}

.icon-gmail {
  width: 25px;
  height: 27px;
  font-size: 25px; /* isso define o tamanho do ícone */
  flex-shrink: 0;   /* evita que ele encolha em telas pequenas */
}


/* Segunda Faixa */

.footer-bottom {
  width: 100%;
  height: 143px;
  background-color: #2B2E69;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Novo contêiner centralizador, igual ao da navbar */
.footer-bottom .container {
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-text {
  color: #ffffff;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  margin-left: 11px; /* Distância até a margem esquerda */
  line-height: 23px;
  text-align: left;  /* <<< Essencial para que o texto de baixo comece na mesma margem que o de cima  */
  padding-top: 19px;
}

.footer-bottom .logo {
  height: 120px;
  object-fit: contain;
  margin-right: -11px; /* Distância até a margem direita */
}

</style>
