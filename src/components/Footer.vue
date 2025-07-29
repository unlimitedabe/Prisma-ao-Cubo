<template>
  <footer class="footer">
    <!-- Primeira faixa: 168px de altura, #4E55A2 -->
    <div class="footer-top">
      <span>Primeira parte</span>
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
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  align-items: center;
}

.footer-top {
  width: 100%;
  height: 168px;
  background-color: #4E55A2;
  display: grid;
  place-items: center;
}

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
  margin-left: 4px;
  line-height: 23px;
  text-align: left;  /* <<< Essencial para que o texto de baixo comece na mesma margem que o de cima  */
  padding-top: 19px;
}

.footer-bottom .logo {
  height: 120px;
  object-fit: contain;
  margin-right: -18px;
}

</style>
