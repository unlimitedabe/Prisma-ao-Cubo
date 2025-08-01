<template>
  <div id="app">
    <!-- Navbar fixa -->
    <Navbar />

    <!-- Conteúdo principal -->
    <main class="main-content">
      <Sobre />
    </main>

    <!-- Rodapé em todas as páginas -->
    <Footer />
  </div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Footer   from './components/Footer.vue'
import Sobre from './views/Sobre.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

/* Corrigir o conteúdo para não ficar atrás do navbar ou footer */
.main-content {
  padding-top: 143px;     /* altura do navbar */
  min-height: calc(100vh - 311px - 143px); /* altura visível restante */
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

</style>
