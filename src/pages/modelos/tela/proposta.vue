<template>
  <div>
    <layout-proposta>
      <template v-slot:titulo_banner></template>
      <template v-slot:titulo_aula></template>
      <template v-slot:titulo_competencia>Competencia</template>
      <template v-slot:conteudo_competencia>
        <li></li>
      </template>
      <template v-slot:titulo_habilidade>Habilidade</template>
      <template v-slot:conteudo_habilidade>
        <li></li>
      </template>
      <template v-slot:titulo_atitude>Atitude</template>
      <template v-slot:conteudo_atitude>
      </template>
    </layout-proposta>
    <buttom-nav :prev="true" :toPrev="''"></buttom-nav>
    <buttom-nav :next="true" :toNext="''"></buttom-nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
    'buttom-nav': require('components/navegacao/buttomNav.vue').default,
    'layout-proposta': require('components/tela/proposta.vue').default
  }
}
</script>
