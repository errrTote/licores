<template lang="pug">
  .section.section_contact
    .row.container_icon
      figure.section_icon
        img(:src="icon_us")
      h4.section_title About us
    .row
      p Tu barra movil activa, combos, luces y mas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, provident est fugiat, mollitia quia laborum alias earum labore nam ipsum explicabo voluptatum veniam a eligendi error quasi ipsam! Cumque, tempore.
</template>

<script>
  export default {
    name: 'Contact',
    data () {
      return {
        icon_us: require('@/assets/img/icon_us.png')
      }
    }
  }
</script>

<style scoped>
  @import '../../node_modules/swiper/dist/css/swiper.css';
  
  .container_icon{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .section_icon{
    position: relative;
    display: inline-block;
    transition: .3s;
    border-radius: 50%;    
  }
  .section_title{
    margin: 0;
  }
  .section_icon img {
    width: 70px;
    height: 70px;   
  }

  .section_contact{
    background-color: black;
    color: white;
    padding: 20px;
  }
  .section_contact:hover .section_icon{
    background-color: white;
  }
  
</style>