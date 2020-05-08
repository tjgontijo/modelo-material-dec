<template>
  <div>
     <q-page class="flex q-pa-md">
      <q-card class="card-conteudo shadow-10">
          <q-card-section>
            <div class="box-shadow text-center">
              <span style="font-size: calc(1.5em + 1vw)">Considerações Finais</span>
            </div>
          </q-card-section>
            <q-card-section>
          <div class="q-ma-md">
              <p></p>
          </div>
          </q-card-section>
          <q-separator class="text-separator" inset spaced/>
          <q-card-section>
            <div class="q-mx-md">
               <p style="font-size: calc(1.2em + 1vw); font-weight: 500"><slot name="titulo" /></p>
            </div>
          </q-card-section>
          <q-card-section>
            <div class="q-mx-md">
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
<style scoped>
.box-shadow {
    border: 4px solid #fff;
    color: #fff;
    margin: 10px;
    padding: 10px 0px 10px 0px;
    background: rgb(25,25,142);
    background: -moz-radial-gradient(circle, rgba(25,25,142,1) 40%, rgba(0,0,102,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(25,25,142,1) 40%, rgba(0,0,102,1) 100%);
    background: radial-gradient(circle, rgba(25,25,142,1) 40%, rgba(0,0,102,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#19198e",endColorstr="#000066",GradientType=1);
    -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.35), 0 85px 180px 0 #fff, 0 12px 8px -5px rgba(0, 0, 0, 0.85); /* FF3.5+ */
    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.35), 0 85px 810px -68px #fff, 0 12px 8px -5px rgba(0, 0, 0, 0.65); /* Saf3.0+, Chrome */
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.35), 0 85px 180px 0 #fff, 0 12px 8px -5px rgba(0, 0, 0, 0.85); /* Opera 10.5, IE 9.0 */
}
</style>
