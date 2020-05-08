<template>
  <div class="flex flex-center">
    <figure class="final-pagina">
      <q-zoom background-color="blue-grey-1">
        <img :src="resolve_img_url(imagem_src)" class="responsive">
      </q-zoom>
      <figcaption>{{imagem_fonte}}</figcaption>
    </figure>
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
      const images = require.context('../assets/', false, /\.png$|\.jpg$/)
      return images('./' + path)
    }
  }
}
</script>
