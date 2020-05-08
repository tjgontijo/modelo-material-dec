<template>
  <div class="row justify-center">
    <div class="col-11 offset-1 drop-shadow">
      <span style="font-size: calc(0.5em + 0.6vw)">
        <slot name="conteudo" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textoDestaque',
  data () {
    return {}
  }
}
</script>
<style scoped>
.drop-shadow {
    padding: 1em;
    background: rgba(163, 179, 189, 0.247);
    -webkit-box-shadow: 0 1px 4px rgba(97, 85, 85, 0.541), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    margin: 0px 0px 15px 0px;
    font-style: normal;
    border-radius: 5px;
}
</style>
