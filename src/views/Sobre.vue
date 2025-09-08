<template>
  <div class="sobre">
    <!-- Faixas de fundo -->
    <div class="faixa faixa-top" id="faixa-top"></div>
    <div class="faixa faixa-bottom" id="faixa-bottom"></div>
    

     <!-- Texto sobreposto --> 
    <div class="sobre-container" id="sobre-container">
      <!-- Bloco de texto sobre a faixa-top -->
      <div class="texto-faixa-top">
        <strong>PRISMA AO CUBO</strong> nasce como um estúdio onde design e programação se unem para criar experiências digitais marcantes. 
        Assim como um prisma transforma luz em infinitas cores, transformamos ideias em projetos visuais e digitais inovadores. 
        <br><br>
        Aqui, criatividade e precisão, código e arte, se encontram e multiplicam, combinando estética e funcionalidade para dar vida a soluções estratégicas e autênticas.
        <br><br>
        Bem-vindo ao <strong>PRISMA AO CUBO</strong> – onde cada conceito, cada linha de código e cada pixel é pensado para alcançar sua melhor versão.

      </div>
      <div class="texto-faixa-bottom-left">
        <h2 class="titulo">MISSÃO</h2>
        <p>
          Capacitar marcas e indivíduos a se destacarem em um mundo digital por meio de soluções criativas e tecnológicas que combinam design inovador e programação de alta qualidade. Nosso compromisso é transformar ideias em experiências impactantes e acessíveis, promovendo evolução e conectividade.
        </p>
      </div>

      <div class="texto-faixa-bottom-right">
        <h2 class="titulo">VISÃO</h2>
        <p>
          Ser um estúdio referência onde design e tecnologia se unem para criar experiências digitais que conectam pessoas e marcas de forma autêntica. Queremos elevar identidades ao seu potencial máximo em cada projeto, combinando criatividade e inovação para transformar o digital em impactante e memorável.
        </p>
      </div>

      <div class="texto-faixa-bottom-last-left">
        <h2 class="titulo">VALORES</h2>

        <!-- Criatividade/Inovação -->
        <div class="criatividade">
          <div class="valores-accordion" @click="abertoCriatividade = !abertoCriatividade" :aria-expanded="abertoCriatividade">
            <div class="valores-acc-header">
              <span class="valores-acc-title">Criatividade e inovação</span>
              <span class="valores-acc-icon" :class="{ open: abertoCriatividade }">+</span>
            </div>

            <!-- painel -->
            <div class="valores-acc-panel" :class="{ open: abertoCriatividade }">
              <p>
                Exploramos novas formas de solucionar desafios, acompanhamos tendências e
                transformamos ideias em designs e plataformas únicas.
              </p>
            </div>
          </div>
        </div>
        <!-- Personalidade  -->
        <div class="personalidade">
          <div class="valores-accordion" @click="abertoPersonalidade = !abertoPersonalidade" :aria-expanded="abertoPersonalidade">
            <div class="valores-acc-header">
              <span class="valores-acc-title">Personalidade</span>
              <span class="valores-acc-icon" :class="{ open: abertoPersonalidade }">+</span>
            </div>
            <div class="valores-acc-panel" :class="{ open: abertoPersonalidade }">
              <p>
                Criamos experiências que refletem a essência de cada marca e indivíduo, 
                promovendo autenticidade no mundo digital.
              </p>
            </div>
          </div>
        </div>

        <!-- Aprendizado -->
        <div class="aprendizado">
          <div class="valores-accordion" @click="abertoAprendizado = !abertoAprendizado" :aria-expanded="abertoAprendizado">
            <div class="valores-acc-header">
              <span class="valores-acc-title">Aprendizado contínuo</span>
              <span class="valores-acc-icon" :class="{ open: abertoAprendizado }">+</span>
            </div>
            <div class="valores-acc-panel" :class="{ open: abertoAprendizado }">
              <p>
                Investimos no desenvolvimento da equipe e dos clientes, 
                incentivando a capacitação e a troca de conhecimento para crescimento constante.
              </p>
            </div>
          </div>
        </div>

        <!-- Excelência -->
        <div class="excelencia">
          <div class="valores-accordion" @click="abertoExcelencia = !abertoExcelencia" :aria-expanded="abertoExcelencia">
            <div class="valores-acc-header">
              <span class="valores-acc-title">Excelência técnica</span>
              <span class="valores-acc-icon" :class="{ open: abertoExcelencia }">+</span>
            </div>
            <div class="valores-acc-panel" :class="{ open: abertoExcelencia }">
              <p>
                Priorizamos a qualidade em cada detalhe do design e da programação (do desenvolvimento), 
                garantindo alto desempenho e precisão.
              </p>
            </div>
          </div>
        </div>

        <!-- Colaboração/Empatia -->
         <div class="colaboracao">
          <div class="valores-accordion" @click="abertoColaboracao = !abertoColaboracao" :aria-expanded="abertoColaboracao">
            <div class="valores-acc-header">
              <span class="valores-acc-title">Colaboração e empatia</span>
              <span class="valores-acc-icon" :class="{ open: abertoColaboracao }">+</span>
            </div>
            <div class="valores-acc-panel" :class="{ open: abertoColaboracao }">
              <p>
                Trabalhamos lado a lado com nossos clientes para compreender suas necessidades 
                e desenvolver soluções personalizadas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-btn">
        <button class="scroll-btn scroll-up" @click="scrollUp">
          <svg xmlns="http://www.w3.org/2000/svg" 
              width="30" height="32"
              viewBox="0 0 16 16" 
              fill="none" stroke="currentColor" 
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="2 11 8 5 14 11"></polyline>
          </svg>
        </button>

        <!-- Botão descer -->
        <button class="scroll-btn scroll-down" @click="scrollDown">
          <svg xmlns="http://www.w3.org/2000/svg" 
              width="30" height="32" 
              viewBox="0 0 16 16" 
              fill="none" stroke="currentColor" 
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="2 5 8 11 14 5"></polyline>
          </svg>
        </button>
      </div>

    </div>
    <!-- Botão subir -->
    
    <!-- Imagem de fundo -->
    <img class="bg-img" :src="imagemFundo" alt="fundo" id="bg-img" />
    
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import imagemFundo from '/src/assets/imagem_pag_sobre.png'

const loaded = ref(false)
let ro = null // ResizeObserver
let onLoadHandler = null

const imagensParaPrecarregar = ['/src/assets/imagem_pag_sobre.png']

const abertoCriatividade = ref(false)
const abertoPersonalidade = ref(false)
const abertoAprendizado = ref(false)
const abertoExcelencia = ref(false)
const abertoColaboracao = ref(false)


function preloadImages(urls, callback) {
  let loadedCount = 0
  const total = urls.length

  urls.forEach((src) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      loadedCount++
      if (loadedCount === total) callback()
    }
    img.onerror = () => {
      console.warn(`Erro ao carregar imagem: ${src}`)
      loadedCount++
      if (loadedCount === total) callback()
    }
  })
}

const getVH = () => Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

/** rola n telas (pode ser 1, 1.25, 2, etc.) */
function scrollByScreens(n = 1) {
  window.scrollBy({
    top: getVH() * n,
    behavior: 'smooth',
  })
}

function scrollDown() { scrollByScreens(3) }   // 1 tela inteira
function scrollUp()   { scrollByScreens(-3) }  // sobe 1 tela


function getCSSHeight(el) {
  // altura renderizada com precisão subpixel
  return el.getBoundingClientRect().height
}

/**
 * (Opcional) Regressão linear por mínimos quadrados para calibrar a e b
 * Preencha PARES com valores medidos (H -> X) se quiser refinar.
 */
function regressaoLinear(pontos) {
  const n = pontos.length
  if (n < 2) return null
  let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0
  for (const { H, X } of pontos) {
    sumX += H; sumY += X; sumXY += H * X; sumXX += H * H
  }
  const a = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX)
  const b = (sumY - a * sumX) / n
  return { a, b }
}

onMounted(() => {
  // 1) Preload
  preloadImages(imagensParaPrecarregar, () => {
    loaded.value = true
  })

  // 2) Travar max-width com base na largura física do monitor (sua preferência)
  const larguraTela = window.screen.width
  const bgImg = document.getElementById('bg-img')
  const sobreContainer = document.getElementById('sobre-container')
  if (bgImg) bgImg.style.maxWidth = `${larguraTela}px`
  if (sobreContainer) sobreContainer.style.maxWidth = `${larguraTela}px`

  // 3) Seletores para cálculo da faixa
  const imagem = document.getElementById('bg-img')
  const faixaAzul = document.getElementById('faixa-top')

  if (!imagem || !faixaAzul) return

  // --- Calibração ---
  // Se quiser usar regressão com seus pontos reais, preencha PARES:
  const PARES = [
    // { H: 689, X: 673 },
    // { H: 969, X: 985 },
  ]
  const coef = regressaoLinear(PARES)
  // Fallback para seus coeficientes atuais se não houver pontos suficientes
  const a = coef?.a ?? 0.42105
  const b = coef?.b ?? -96.6842

  const aplicar = () => {
    const H = getCSSHeight(imagem)
    const X = a * H + b // use decimal pra máxima precisão
    faixaAzul.style.height = `${X}px`
    // expor como CSS vars para usar no CSS da faixa-bottom / debug
    document.documentElement.style.setProperty('--img-h', `${H}px`)
    document.documentElement.style.setProperty('--faixa-top-h', `${X}px`)
  }

  // Rodar ao carregar a imagem
  if (imagem.complete) aplicar()
  onLoadHandler = () => aplicar()
  imagem.addEventListener('load', onLoadHandler, { once: true })

  // Observar mudanças reais no box renderizado da imagem
  ro = new ResizeObserver(() => aplicar())
  ro.observe(imagem)
})

onBeforeUnmount(() => {
  // limpeza
  const imagem = document.getElementById('bg-img')
  if (imagem && onLoadHandler) {
    imagem.removeEventListener('load', onLoadHandler)
  }
  if (ro) {
    ro.disconnect()
    ro = null
  }
})
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
  width: 100%;
  background-color: #2B2E69;
}

/* Agora a faixa de baixo começa onde termina a faixa-top e vai até o fim.
   Sem height fixo de 2000px. O valor vem do JS via --faixa-top-h */
.faixa-bottom {
  position: absolute;
  top: var(--faixa-top-h, 0px);
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: white;
}

/* IMAGEM DE FUNDO */
.bg-img {
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  margin-top: clamp(-96px, -8vw, -40px); /* mantém o seu offset */
  display: block;
  object-fit: cover;
  background-color: white;
}

/* CONTAINER DO TEXTO */
.sobre-container {
  position: relative;
  z-index: 2;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* NOVO BLOCO DE TEXTO SOBRE A FAIXA-TOP */
.texto-faixa-top {
  position: absolute;
  z-index: 3; /* acima da imagem e faixa */

  top: calc(var(--faixa-top-h, 0px) - clamp(156px, 40vw, 530px));
  left: 98px; /* mantém o alinhamento lateral igual ao navbar */
  width:  clamp(40px, 31vw, 450px);
  height: 419px;

  /* Tipografia */
  /* text-align: left; */
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300; /* Light */
  font-size: clamp(8px, 1.4vw, 18.5px); /* mínimo 14px, escala com viewport até máx. 18px */
  line-height: 1.4;
  color: white; /* presume que é sobre fundo azul */
  /*overflow: hidden; /* garante que não vaza texto */
  text-align: justify; /* <-- deixa o texto justificado */
  /* text-align: left; */
}

/* BLOCO DE TEXTO SOBRE PARTE DE BAIXO */
/* PRIMEIRO A ESQUERDA */
.texto-faixa-bottom-left{
  position: absolute;
  z-index: 3;

  /* PULO VERTICAL: altura da faixa + um respiro */
  top: calc(var(--faixa-top-h, 0px) + clamp(16px, 7vw, 65px));
  /* Alinhamento lateral igual ao da navbar / 1º texto */
  left: 98px;
  /* Largura responsiva semelhante ao 1º bloco */
  width: clamp(40px, 35vw, 450px);
  height: 196px;

  /* Tipografia */
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 1.4vw, 18.5px);
  line-height: 1.4;
  color: #111;           /* provavelmente sobre fundo claro */
  text-align: justify;
  /* text-align: left; */

  /* Se quiser limitar o comprimento de linhas: */
  /* max-width: 60ch; */
}

/* Somente o título dentro */
.texto-faixa-bottom-left > .titulo {
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: clamp(22px, 2.8vw, 40px); /* 30pt ≈ 40px */
  line-height: 1.2;
  margin: 0 0 clamp(12px, 2vw, 24px) 0; /* respiro abaixo */
}

/* SEGUNDO A DIRETA */
.texto-faixa-bottom-right{
  position: absolute;
  z-index: 3;

  /* PULO VERTICAL: altura da faixa + um respiro */
  top: calc(var(--faixa-top-h, 0px) + clamp(50px, 20vw, 173px));
  /* Alinhamento lateral igual ao da navbar / 1º texto */
  right: 98px;
  /* Largura responsiva semelhante ao 1º bloco */
  width: clamp(40px, 35vw, 410px);
  height: 196px;

  /* Tipografia */
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 1.4vw, 18.5px);
  line-height: 1.4;
  color: #111;           /* provavelmente sobre fundo claro */
  text-align: justify;
  /* text-align: left; */

  /* Se quiser limitar o comprimento de linhas: */
  /* max-width: 60ch; */
}

/* Somente o título dentro */
.texto-faixa-bottom-right > .titulo {
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: clamp(22px, 2.8vw, 40px); /* 30pt ≈ 40px */
  line-height: 1.2;
  margin: 0 0 clamp(12px, 2vw, 24px) 0; /* respiro abaixo */
}

/* TERCEIRO A ESQUERDA */
.texto-faixa-bottom-last-left{
  position: absolute;
  z-index: 3;

  /* PULO VERTICAL: altura da faixa + um respiro */
  top: calc(var(--faixa-top-h, 0px) + clamp(100px, 40vw, 400px));
  /* Alinhamento lateral igual ao da navbar / 1º texto */
  left: 98px;
  /* Largura responsiva semelhante ao 1º bloco */
  /* width: clamp(40px, 35vw, 410px);
  height: 196px; */

  /* Tipografia */
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 1.4vw, 18.5px);
  line-height: 1.4;
  color: #111;           /* provavelmente sobre fundo claro */
  text-align: justify;
  /* text-align: left; */

  /* Se quiser limitar o comprimento de linhas: */
  /* max-width: 60ch; */
  
}

/* Somente o título dentro */
.texto-faixa-bottom-last-left > .titulo {
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: clamp(22px, 2.8vw, 40px); /* 30pt ≈ 40px */
  line-height: 1.2;
  margin: 0 0 clamp(12px, 5vw, 31px) 0; /* respiro abaixo */
}

.texto-faixa-bottom-last-left > .criatividade {
  top: 0px;
}

.texto-faixa-bottom-last-left > .personalidade {
  position: absolute;
  top: 254px;
}

.texto-faixa-bottom-last-left > .aprendizado {
  position: absolute;
  top: 431px;
}

.texto-faixa-bottom-last-left > .excelencia {
  position: absolute;
  top: 165px;
  left: 400px
}

.texto-faixa-bottom-last-left > .colaboracao {
  position: absolute;
  top: 342px;
  left: 400px
}

/* container do dropbox */
.valores-accordion {
  width: 306px;                 /* largura fixa como pedido */
  background: #2B2E69;
  color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,.15);
  cursor: pointer;
  user-select: none;
  overflow: hidden;             /* esconde o painel durante a animação */
}

/* cabeçalho */
.valores-acc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;           /* respiro interno */
}

/* título: Source Sans Pro 25 regular */
.valores-acc-title {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;             /* regular */
  font-size: 24px;              /* conforme pedido */
  line-height: 1.2;
}

/* ícone + à direita (gira quando abre) */
.valores-acc-icon {
  display: inline-flex;
  width: 20px;
  height: 24px;
  align-items: center;
  justify-content: center;
  font-size: 37px;
  font-weight: 400;   /* mais grosso que 400, mais leve que 700 */
  line-height: 1;
  transition: transform .2s ease;
}
.valores-acc-icon.open {
  transform: rotate(45deg);     /* vira um “x” estilizado */
}

/* painel com animação de altura */
.valores-acc-panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height .10s ease;
  padding: 0 14px;              /* padding lateral já */
}

/* quando aberto, libera a altura e padding inferior */
.valores-acc-panel.open {
  max-height: 400px;            /* grande o bastante pro seu texto */
  padding-bottom: 10px;
}

/* texto do painel: Source Sans Pro 18 light */
.valores-acc-panel p {
  margin: 6px 0 0 0;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;             /* light */
  font-size: 18px;              /* conforme pedido */
  line-height: 1.35;
  color: #f0f0f6;
}

.scroll-btn {
  position: absolute;
  z-index: 3;
  right: 39px;
  border: none;
  cursor: pointer;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background: transparent;
  
  /* z-index: 5; */


  /* PULO VERTICAL: altura da faixa + um respiro */
  /* top: calc(var(--faixa-top-h, 0px) + clamp(100px, 40vw, 400px)); */

}

/* Botão de subir */
.scroll-up {
  top: calc(var(--faixa-top-h, 0px) + 940px);
  color: #2B2E69;
}

/* Botão de descer */
.scroll-down  {
  top: calc(var(--faixa-top-h, 0px) - 130px);
  color: white; /* cor pedida */
}


</style>
