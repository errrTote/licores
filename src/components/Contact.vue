<template lang="pug">
  .section.section_contact
    .row.container_icon
      figure.section_icon
        img(:src="icon_contact")
      h4.section_title Contacto
      
    .row
      p Twiter | Facebook | Instagram Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    
</template>

<script>
  export default {
    name: 'Contact',
    data () {
      return {
        icon_contact: require('@/assets/img/icon_contact_white.png')
      }
    }
  }
</script>

<style scoped>  
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

  .section_title{
    margin: 0;
  }
  
</style>
