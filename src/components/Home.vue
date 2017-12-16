<template>
  <div class="home">
    <lic-parallax :image="back1"></lic-parallax>
    <div>
      <lic-about></lic-about>
      <lic-tragos></lic-tragos>
      <lic-contact></lic-contact>
    </div> 
    <lic-parallax :image="back2"></lic-parallax>   
  </div>  
</template>
<script>
import LicContact from '@/components/Contact.vue'
import LicAbout from '@/components/About.vue'
import LicTragos from '@/components/Tragos.vue'
import LicParallax from '@/components/Parallax.vue'

  export default {
    name: 'Home',
    components: {
      LicAbout,
      LicTragos,  
      LicParallax,  
      LicContact
    },

    data () {
      return {
        back1: require('@/assets/img/barra_1.jpg'),
        back2: require('@/assets/img/back_3.png')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
  .logo_bar_img{
    width: 100%;
  }
</style>
