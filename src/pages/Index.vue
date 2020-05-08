<template>
  <div>
    <tela-apresentacao>
      <template v-slot:titulo_banner>Unidade</template>
        <template v-slot:conteudo>
        </template>
    </tela-apresentacao>
    <buttom-nav :prev="true" :toPrev="''"></buttom-nav>
    <buttom-nav :next="true"  :toNext="''"></buttom-nav>
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
    'tela-apresentacao': require('components/tela/apresentacao.vue').default
  }
}
</script>
