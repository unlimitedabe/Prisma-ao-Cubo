<template>
    <div class="servicos"  alt="fundo" id="servicos-container" >
        <!-- esse 700 é a altura -->
        <svg viewBox="6 7 1174 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  id="bg-img"> 
            <!-- ajuste a espessura aqui -->
            <g stroke="#4E55A2" stroke-width="7.5" stroke-linecap="butt" stroke-linejoin="round" fill="none">
                <!-- centro aproximado das linhas -->
                <!-- esquerda  -->
                <line x1="5" y1="400" x2="600" y2="300" />
                <!-- direita -->
                <line x1="1181" y1="390" x2="600" y2="300" />
                <!-- para cima -->
                <line x1="600" y1="300" x2="480" y2="5" />
            </g>
        </svg>
        <!-- <div class="footer-top">
            <div class="footer-top-container"  id="footer-top-container">
                <div class="footer-contact">
                    <span class="footer-title">CONTATOS</span>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

// onMounted(() => {
//   const larguraTela = window.screen.width

//   const footerTop = document.getElementById('footer-top-container')
//   const footerBottom = document.getElementById('footer-bottom-container')

//   if (footerTop) {
//     footerTop.style.maxWidth = `${larguraTela}px`
//   }

//   if (footerBottom) {
//     footerBottom.style.maxWidth = `${larguraTela}px`
//   }
// })

onMounted(() => {
  const larguraTela = window.screen.width
  const servicos = document.getElementById('servicos-container')
  if (servicos) {
    servicos.style.maxWidth = `${larguraTela}px`
  }
})


</script>

<style scoped>

.servicos{
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - clamp(96px, 9vw, 143px) - clamp(96px, 10vw, 143px)); /* navbar + footer */
  margin: auto;
  /* align-items: center; */
}

svg {
  position: relative;
  z-index: 1;
  width: 100%;
  display: block;
  object-fit: cover;
  /* background-color: pink; */
  /* flex-direction: column;
  align-items: center; */
}




</style>
