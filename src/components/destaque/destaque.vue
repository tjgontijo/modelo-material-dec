<template>
  <div class="destaque responsiva">
      <p class="destaque-title"><slot name="titulo"></slot></p>
      <p class="q-ma-md text-justify">
        <slot name="conteudo"></slot>
      </p>
  </div>
</template>

<script>
export default {
  props: {
    colorChip: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.destaque
  position: relative
  padding: 1em
  margin: 30px
  color: #fff
  background: rgb(255,48,25)
  background: -moz-radial-gradient(center, ellipse cover,  rgba(255,48,25,1) 0%, rgba(255,0,0,1) 100%)
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,48,25,1) 0%,rgba(255,0,0,1) 100%)
  background: radial-gradient(ellipse at center,  rgba(255,48,25,1) 0%,rgba(255,0,0,1) 100%)
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff3019', endColorstr='#ff0000',GradientType=1 )
  -webkit-box-shadow: 5px 5px 7px 0px rgba(122,121,122,1)
  -moz-box-shadow: 5px 5px 7px 0px rgba(122,121,122,1)
  box-shadow: 5px 5px 7px 0px rgba(122,121,122,1)
  border-radius: 12px 12px 12px 12px
  -moz-border-radius: 12px 12px 12px 12px
  -webkit-border-radius: 12px 12px 12px 12px
  border: 0px solid #000000
.destaque-title
  color: #fff
  text-transform: uppercase
  font-weight: 600
  letter-spacing: .2rem
  font-size: 1.35em
</style>
