<template>
<div class="q-ma-md">
  <q-card>
    <div class="row">
      <div class="flex flex-center">
          <figure>
            <q-zoom>
              <img :src="resolve_img_url(imagem_src)" class="responsive" style="max-width: 300px">
            </q-zoom>
            <figcaption>{{imagem_fonte}}</figcaption>
          </figure>
      </div>
      <q-separator vertical inset/>
      <div class="col-md-8 flex flex-center">
        <div class="q-pa-md q-px-xl">
          <slot name="conteudo"></slot>
        </div>
      </div>
    </div>
  </q-card>
</div>
</template>

<script>
export default {
  props: {
    imagem_src: String,
    imagem_fonte: String
  },
  data () {
    return {}
  },
  methods: {
    resolve_img_url: function (path) {
      const images = require.context('../assets/image', false, /\.png$|\.jpg$/)
      return images('./' + path)
    }
  }
}
</script>
