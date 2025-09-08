<template>
  <nav class="navbar">
    <div class="container" id="navbar-container">
      <img
        class="logo"
        src="/src/assets/logo_prismaocubo3_RGB_P&Bneeg_1.png"
        alt="Logo Prisma ao Cubo"
      />

      <div class="menu-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="menu-icon">
          <rect class="bar bar-1" x="0" y="0" width="30" height="4" />
          <rect class="bar bar-2" x="0" y="13" width="30" height="4" />
          <rect class="bar bar-3" x="0" y="26" width="30" height="4" />
        </svg>

        <ul class="menu-text">
          <li><a href="/">sobre</a></li>
          <li><a @click="scrollDown">contato</a></li>
          <li><a href="/serviços">serviços</a></li>
          <li><a href="/projetos">projetos</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import expandIcon from '/src/assets/icone_menu_expandido_Prancheta_1.png'
import retractIcon from '/src/assets/icone_menu_retraido_Prancheta_1.png'

const isHovered = ref(false)

const getVH = () => Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

import { onMounted } from 'vue'

onMounted(() => {
  const larguraTela = window.screen.width
  const container = document.getElementById('navbar-container')
  if (container) {
    container.style.maxWidth = `${larguraTela}px`
  }
})

/** rola n telas (pode ser 1, 1.25, 2, etc.) */
function scrollByScreens(n = 1) {
  window.scrollBy({
    top: getVH() * n,
    behavior: 'smooth',
  })
}

function scrollDown() { scrollByScreens(3) }   // 2 tela inteira

</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: clamp(96px, 9vw, 143px); /* altura proporcional */
  background-color: #2B2E69;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  /*max-width: 100%; /* ocupa toda a largura da tela se quiser que os elementos acomapnahem a margem*/
  /* max-width: 1366px; RESOLUCAO NOTE*/
  /* max-width: 1920px; RESOLUCAO PC*/
  /* margin: 0 auto; */
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 99px;
  padding-right: 99px;
}

.logo {
  position: relative;
  height: clamp(70px, 8vw, 120px);
}

.menu-wrapper {
  position: relative;
  width: clamp(40px, 4vw, 60px);
  height: clamp(20px, 3vw, 30px);
  cursor: pointer;
}

.menu-icon {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  right: 0;
  display: block;
  fill: #fff;
}

.bar {
  transform-origin: right center;
  transform: scaleX(1);
  transition: transform 0.3s ease;
}

.menu-wrapper:hover .bar {
  transform: scaleX(0.266); /* 8px de 30px = 0.266 */
}

.menu-text {
  position: absolute;
  right: 85%;
  top: 50%;
  display: flex;
  gap: clamp(16px, 3vw, 38px);
  list-style: none;
  margin: 0;
  padding: 0;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-50%);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.menu-wrapper:hover .menu-text {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(-50%);
}

.menu-text li a {
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(16px, 1.6vw, 25px);
  font-weight: 400;
  text-decoration: none;
}

.menu-text li a:hover {
  color: #ddd;
}
</style>
