<template>
  <div class="sobre">
    <!-- Faixas de fundo -->
    <div class="faixa faixa-top"></div>
    <div class="faixa faixa-bottom"></div>

    <!-- Imagem de fundo -->
    <img class="bg-img" :src="imagemFundo" alt="fundo" />

    <!-- Texto sobreposto -->
    <div class="sobre-container">
      <div class="texto-sobreposto">OAKLEY OCULOS</div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import imagemFundo from '/src/assets/imagem_pag_sobre.png'

const loaded = ref(false)

const imagensParaPrecarregar = [
  '/src/assets/imagem_pag_sobre.png',
]

function preloadImages(urls, callback) {
  let loadedCount = 0
  const total = urls.length

  urls.forEach((src) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      loadedCount++
      if (loadedCount === total) {
        callback()
      }
    }
    img.onerror = () => {
      console.warn(`Erro ao carregar imagem: ${src}`)
      loadedCount++
      if (loadedCount === total) {
        callback()
      }
    }
  })
}

onMounted(() => {
  preloadImages(imagensParaPrecarregar, () => {
    loaded.value = true
  })
})

// onMounted(() => {
//   const img = new Image()
//   img.src = imagemFundo
//   img.onload = () => {
//     loaded.value = true
//   }
// })
</script>

<style scoped>
.sobre {
  position: relative;
  overflow: hidden;
  width: 98.9vw;
  min-height: calc(100vh - 143px - 311px);
}

/* FAIXAS DE FUNDO */
.faixa {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 0;
}

.faixa-top {
  top: 0;
  height: 693px; /*= para /src/assets/imagem_pag_sobre.png */
  /* height: 690px; /*= para /src/assets/imagem_pag_sobre_21.png */
  background-color: #2B2E69;
}

.faixa-bottom {
  bottom: 0;
  height: 1090px;
  z-index: -1;
  background-color: white;
}

/* IMAGEM DE FUNDO */
.bg-img {
  position: relative;
  z-index: 1;
  width: 98.9vw;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: clamp(-96px, -8vw, -40px);
  display: block;
  object-fit: cover;
  background-color: white;
}
/* 
@media (max-width: 1180px) {
  .bg-img {
    margin-top: -86px;
  }
}

@media (max-width: 1058px) {
  .bg-img {
    margin-top: -76px;
  }
} 

@media (max-width: 946px) {
  .bg-img {
    margin-top: -66px;
  }
} 

@media (max-width: 821px) {
  .bg-img {
    margin-top: -56px;
  }
} 

@media (max-width: 692px) {
  .bg-img {
    margin-top: -46px;
  }
} 

@media (max-width: 569px) {
  .bg-img {
    margin-top: -40px;
  }
}   */

/* 
@media (max-width: 246px) {
  .bg-img {
    margin-top: -43px;
  }
} */

/* CONTAINER DO TEXTO */
.sobre-container {
  position: relative;
  z-index: 2;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

/* TEXTO SOBREPOSTO */
.texto-sobreposto {
  position: absolute;
  top: 652px;
  left: 120px;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  z-index: 3;
}

</style>
