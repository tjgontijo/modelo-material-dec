<template>
  <div class="q-py-md">
      <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 10px"
      icon="warning"
      label="Atenção"
      header-class="bg-amber text-black"
      expand-icon-class="text-black"
      >
    <q-card>
      <q-card-section>
       <slot name="conteudo1"></slot>
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
