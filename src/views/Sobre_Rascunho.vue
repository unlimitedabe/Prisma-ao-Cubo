<template>
  <div class="sobre">
    <!-- Faixas de fundo -->
    <div class="faixa faixa-top" id="faixa-top"></div>
    <div class="faixa faixa-bottom" id="faixa-bottom"></div>

    <!-- Imagem de fundo -->
    <img class="bg-img" :src="imagemFundo" alt="fundo" id="bg-img" />
     <!-- <img class="bg-img" :src="imagemFundo" alt="fundo" /> -->

    <!-- Texto sobreposto -->
    <div class="sobre-container" id="sobre-container">
    <!-- <div class="sobre-container"> -->
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

onMounted(() => {
  const larguraTela = window.screen.width

  const bgImg = document.getElementById('bg-img')
  const sobreContainer = document.getElementById('sobre-container')

  if (bgImg) {
    bgImg.style.maxWidth = `${larguraTela}px`
  }

  if (sobreContainer) {
    sobreContainer.style.maxWidth = `${larguraTela}px`
  }
})

onMounted(() => {
  const imagem = document.getElementById('bg-img')
  const faixaAzul = document.getElementById('faixa-top')
  // const faixaBranca = document.getElementById('faixa-bottom')

  function calcularAlturas() {
      if (imagem && faixaAzul) {
        // Captura a altura da imagem renderizada (H1)
        const alturaImagem = imagem.offsetHeight

        // Calcula a altura ideal da faixa rosa (X)
        const a = 0.42105
        const b = -96.6842
        const alturaFaixa = Math.round(a * alturaImagem + b)

        // Aplica dinamicamente a altura da faixa-top
        faixaAzul.style.height = `${alturaFaixa}px`
      }
  }

  if (imagem.complete) {
    calcularAlturas()
  } else {
    imagem.onload = calcularAlturas
  }

  window.addEventListener('resize', calcularAlturas)
})

// onMounted(() => {
//   const bgImg = document.getElementById('bg-img')

//   if (bgImg) {
//     const alturaImagem = bgImg.offsetHeight
//     console.log(`Altura real da imagem em px: ${alturaImagem}px`)

//     // Se quiser mostrar na tela:
//     const alturaDiv = document.createElement('div')
//     alturaDiv.textContent = `Altura da imagemmmm: ${alturaImagem}px`
//     alturaDiv.style.position = 'fixed'
//     alturaDiv.style.top = '60px'
//     alturaDiv.style.left = '0'
//     alturaDiv.style.color = 'limegreen'
//     alturaDiv.style.fontWeight = 'bold'
//     alturaDiv.style.zIndex = '9999'
//     alturaDiv.style.background = 'rgba(0,0,0,0.7)'
//     alturaDiv.style.padding = '4px 8px'
//     alturaDiv.style.fontFamily = 'monospace'

//     document.body.appendChild(alturaDiv)
//   }
// })

// onMounted(() => {
//   const bgImg = document.getElementById('bg-img')
//   const faixaTop = document.querySelector('.faixa-top')

//   if (bgImg && faixaTop) {
//     // Captura a altura da imagem renderizada (H1)
//     const alturaImagem = bgImg.offsetHeight


//     // Calcula a altura ideal da faixa rosa (X)
//     const a = 0.42105
//     const b = -96.6842
//     const alturaFaixa = Math.round(a * alturaImagem + b)


//     // Aplica dinamicamente a altura da faixa-top
//     faixaTop.style.height = `${alturaFaixa}px`

//     // Opcional: exibir na tela para debug
//     const alturaDiv = document.createElement('div')
//     alturaDiv.textContent = `Altura da faixa-top: ${alturaFaixa}px`
//     alturaDiv.style.position = 'fixed'
//     alturaDiv.style.top = '90px'
//     alturaDiv.style.left = '0'
//     alturaDiv.style.color = 'deeppink'
//     alturaDiv.style.fontWeight = 'bold'
//     alturaDiv.style.zIndex = '9999'
//     alturaDiv.style.background = 'rgba(0,0,0,0.7)'
//     alturaDiv.style.padding = '4px 8px'
//     alturaDiv.style.fontFamily = 'monospace'
//     document.body.appendChild(alturaDiv)
//   }
// })

</script>

<style scoped>
.sobre {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - clamp(96px, 9vw, 143px) - clamp(96px, 10vw, 143px)); /* navbar + footer */
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
  /* height: clamp(300px, 40vw, 693px); */
  /* height: 985px; */
  /* height: auto; */
  width: 100%;
  background-color: #2B2E69;
}

.faixa-bottom {
  bottom: 0;
  /* height: clamp(500px, 70vw, 1090px); */
  /* height: 1058px; */
  /* height: auto; */
  /* height: 2000px; */
  inset: 0;  /* cobre tudo a baixo da faixa-top */
  width: 100%;
  z-index: -1;
  background-color: white;
}

/* IMAGEM DE FUNDO */
.bg-img {
  position: relative;
  z-index: 1;
  width: 100%;
  /* max-width: 1920px; */
  margin: 0 auto;
  margin-top: clamp(-96px, -8vw, -40px);
  display: block;
  object-fit: cover;
  background-color: white;
}

/* CONTAINER DO TEXTO */
.sobre-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: clamp(12px, 5vw, 40px);
}

/* TEXTO SOBREPOSTO */
.texto-sobreposto {
  position: absolute;
  top: clamp(400px, 39vw, 652px); /* altura aproximada onde começa o texto */
  left: clamp(40px, 6vw, 120px);
  font-size: clamp(20px, 2.2vw, 32px);
  font-weight: bold;
  color: black;
  z-index: 3;
}
</style>
