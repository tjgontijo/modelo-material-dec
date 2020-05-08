<template>
  <div class="q-py-md">
      <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 10px"
      icon="warning"
      label="Atenção"
      header-class="bg-negative text-white"
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
