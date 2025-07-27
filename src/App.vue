<template>
  <div id="app">
    <!-- Navbar fixa em todas as rotas/páginas -->
    <Navbar />

    <!-- conteúdo das páginas; lembre-se de dar um padding-top
         para não ficar embaixo da navbar -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' // importa o JS do Bootstrap (necessário para componentes como collapse, dropdown etc.)
</script>

<style>
/* cria um offset para o conteúdo principal não ficar encoberto */
.main-content {
  padding-top: 143px;
}
/* opcional: reseta body/html para altura total */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
