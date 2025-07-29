<template>
  <div id="app">
    <!-- Navbar fixa -->
    <Navbar />

    <!-- Conteúdo principal -->
    <main class="main-content">
      <HelloWorld />
    </main>

    <!-- Rodapé em todas as páginas -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer   from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
</script>

<style>
/* offset para navbar */
.main-content {
  padding-top: 143px;
  /* opcional: min-height para empurrar o footer para o fim da página quando conteúdo for pouco */
  /* min-height: calc(100vh - 143px - 311px); */
}

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
