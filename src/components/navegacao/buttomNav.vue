<template>
  <div>
    <q-page-sticky  v-if="prev" position="bottom-right" :offset="[66, 20]">
      <q-btn @click="prevPage" round color="primary" icon="arrow_forward" class="rotate-180" title="Página Anterior" />
    </q-page-sticky>
    <q-page-sticky v-if="next" position="bottom-right" :offset="[20, 20]">
      <q-btn @click="nextPage" round color="primary" icon="arrow_forward" title="Próxima Página" />
    </q-page-sticky>
     <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <img src="~assets/pmdf_.png" width="85vw">
    </q-page-sticky>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    },
    toNext: {
      type: String
    },
    toPrev: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    nextPage () {
      var destino = this.toNext
      this.$router.push(`/${destino}`)
      console.log(destino)
    },
    prevPage () {
      var destino = this.toPrev
      this.$router.push(`/${destino}`)
      console.log(destino)
    }
  }
}
</script>
