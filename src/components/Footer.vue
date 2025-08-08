<template>
  <footer class="footer">
      <!-- Primeira faixa: altura proporcional -->
      <div class="footer-top">
          <div class="footer-top-container"  id="footer-top-container">
            <!-- Bloco Esquerdo -->
            <div class="footer-contact">
              <span class="footer-title">CONTATOS</span>
            </div>

            <!-- Bloco Central -->
            <div class="footer-social">
              <span class="footer-subtitle">Social media</span>
              <div class="footer-line-icon">
                <i class="bi bi-instagram icon"></i>
                <span>@prismaocubo</span>
              </div>
              <div class="footer-line-icon">
                <i class="bi bi-envelope-fill icon-gmail"></i>
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

      <!-- Segunda faixa -->
      <div class="footer-bottom">
        <div class="container" id="footer-bottom-container">
          <p class="footer-text">
            © 2025 Prisma ao Cubo. Todos os direitos reservados.<br>
            Cookies e privacidade
          </p>
          <img
            class="logo"
            src="/src/assets/logo_prismaocubo3_RGB_P&Bneeg_2.png"
            alt="Logo Prisma ao Cubo"
          />
        </div>
      </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const larguraTela = window.screen.width

  const footerTop = document.getElementById('footer-top-container')
  const footerBottom = document.getElementById('footer-bottom-container')

  if (footerTop) {
    footerTop.style.maxWidth = `${larguraTela}px`
  }

  if (footerBottom) {
    footerBottom.style.maxWidth = `${larguraTela}px`
  }
})
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  width: 100; 
  z-index: 1000;
  align-items: center; 
}

/* Primeira Faixa */
.footer-top {
  width: 100%;
  height: clamp(96px, 12vw, 168px);
  background-color: #4E55A2;
  display: flex;
  align-items: center;
}

.footer-top-container {
  width: 100%;
  text-align: left;
  /* ALINHAR OS MAX-WIDHT DO NAVBAR E DO footer
  max-width: 1200px;  */
  margin: 0 auto;
  padding-inline: clamp(8px, 4vw, 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-contact{
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 58px; /* DIstância até a margem esquerda*/
}
.footer-hours {
  display: flex;
  flex-direction: column;
  color: white;
  margin-right: 58px; /* DIstância até a margem direita*/
}

.footer-social {
  display: flex;
  flex-direction: column;
  color: white;
}

.footer-title {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: clamp(18px, 2.2vw, 30px);
}

.footer-subtitle {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  font-size: clamp(14px, 1.5vw, 20px);
  margin-bottom: 4px;
}

.footer-line {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(12px, 1.4vw, 20px);
  font-weight: 400;
  line-height: 1.4;
}

.footer-line-icon {
  display: flex;
  align-items: center;
  gap: clamp(4px, 0.8vw, 8px);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(12px, 1.4vw, 20px);
  font-weight: 400;
  line-height: 1.4;
}

.icon,
.icon-gmail {
  font-size: clamp(18px, 2vw, 25px);
  width: clamp(18px, 2vw, 25px);
  height: clamp(18px, 2vw, 28px);
  flex-shrink: 0;
}

/* Segunda Faixa */
.footer-bottom {
  width: 100%;
  height: clamp(96px, 10vw, 143px);
  background-color: #2B2E69;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-bottom .container {
  width: 100%;
  /* max-width: 1200px; */
  padding-inline: clamp(8px, 4vw, 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-text {
  color: #ffffff;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 1.4;
  text-align: left;
  padding-top: clamp(10px, 1.4vw, 19px);
  margin-left: 59px; /* DIstância até a margem esquerda*/
}

.footer-bottom .logo {
  height: clamp(70px, 8vw, 120px);
  object-fit: contain;
  margin-right: 59px; /* DIstância até a margem direita*/
}
</style>
