<template>
  <div>
    <q-page class="flex q-pa-md">
      <q-card  class="card-conteudo shadow-10">
        <q-card-section>
          <div class="q-ma-md">
            <slot name="conteudo" />
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
