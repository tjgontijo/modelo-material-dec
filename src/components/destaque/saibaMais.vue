<template>
  <div class="q-py-md">
      <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 10px"
      icon="add"
      label="Saiba Mais"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
    <q-card>
      <q-card-section>
       <slot name="conteudo"></slot>
      </q-card-section>
    </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
