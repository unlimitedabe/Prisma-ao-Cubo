<template>
  <nav class="navbar">
    <div class="container">
      <img
        class="logo"
        src="/src/assets/logo_prismaocubo3_RGB_P&Bneeg.png"
        alt="Logo Prisma ao Cubo"
       />


      <div class="menu-wrapper">
        <!-- SVG com altura total de 30px -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="menu-icon">
            <rect class="bar bar-1" x="0" y="0"   width="30" height="4" />
            <rect class="bar bar-2" x="0" y="13"  width="30" height="4" />
            <rect class="bar bar-3" x="0" y="26"  width="30" height="4" />
        </svg>


        <ul class="menu-text">
          <li><a href="#sobre">sobre</a></li>
          <li><a href="#contato">contato</a></li>
          <li><a href="#serviços">serviços</a></li>
          <li><a href="#projetos">projetos</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script setup>
import { ref } from 'vue'
import expandIcon  from '/src/assets/icone_menu_expandido_Prancheta_1.png'
import retractIcon from '/src/assets/icone_menu_retraido_Prancheta_1.png'

const isHovered = ref(false)
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 143px;
  background-color: #2B2E69;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 120px;
  margin-left: -19px;
  display: block;
  object-fit: contain;
}


.menu-wrapper {
  position: relative;
  margin-right: 4px;
  width: 60px;
  height: 30px;
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
  transform-origin: right center; /* <- ESSENCIAL */
  transform: scaleX(1);
  transition: transform 0.3s ease;
}

/* Hover: encolhe horizontalmente da ESQUERDA para a DIREITA */
.menu-wrapper:hover .bar {
  transform: scaleX(0.266); /* 8px de 30px = 0.266 */
}

/* Texto do menu */
.menu-text {
  position: absolute;
  right: 100%;
  top: 50%;
  display: flex;
  gap: 38px;
  list-style: none;
  margin: 0;
  padding: 0;
  opacity: 0;
  pointer-events: none;
  transition: 
    opacity 0.4s ease, 
    transform 0.4s ease;
  transform: translateY(-50%);
}

.menu-wrapper:hover .menu-text {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(-50%) ;
}

.menu-text li a {
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  font-weight: 400;
  text-decoration: none;
}

.menu-text li a:hover {
  color: #ddd;
}


</style>
