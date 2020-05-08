<template>
  <div>
      <layout-aula>
          <template v-slot:conteudo></template>
      </layout-aula>
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
    'layout-aula': require('components/tela/aula.vue').default
  }
}
</script>
