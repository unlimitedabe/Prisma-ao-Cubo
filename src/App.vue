<template>
  <div id="app">
    <!-- Navbar fixa -->
    <Navbar />

    <!-- Conteúdo principal -->
    <main class="main-content">
      <Sobre />
    </main>

    <!-- Rodapé -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Sobre from './views/Sobre.vue'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
</script>

<style>
/* html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Source Sans Pro', sans-serif;
  display: contents;
} */
#app, html, body {
  max-width: 100vw;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;
}

/* Espaço para a altura da navbar (proporcional) */
.main-content {
  position: relative;
  padding-top: clamp(96px, 9vw, 143px); /* mesma altura usada na navbar */
  min-height: calc(100vh - clamp(96px, 9vw, 143px) - clamp(168px, 14vw, 311px)); /* altura da tela menos navbar e footer */
  box-sizing: border-box;
  z-index: 1;
}
</style>
