<template>
  <div id="app">
    <barra-header></barra-header>        
    <router-view/>
    <barra-footer></barra-footer>
  </div>
</template>

<script>
import BarraHeader from '@/components/layouts/Header'
import BarraFooter from '@/components/layouts/Footer'

export default {
  name: 'app',
  components: {
    BarraHeader,
    BarraFooter    
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

</style>
